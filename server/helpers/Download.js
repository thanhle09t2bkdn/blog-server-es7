import FS from 'fs';
import Path from 'path';
import Request from 'request';
export default class Download {
    static file = (link, directory, name) => {
        return new Promise((resolve, reject) => {
            const dest = Path.join(directory, name);
            var writeStream = FS.createWriteStream(dest);

            writeStream.on('finish', () => {
                resolve(name);
            });

            writeStream.on('error', (err) => {
                FS.unlink(dest, reject.bind(null, err));
            });

            const readStream = Request.get(link);

            readStream.on('error', (err) => {
                FS.unlink(dest, reject.bind(null, err));
            });

            readStream.pipe(writeStream);
        });
    }
}