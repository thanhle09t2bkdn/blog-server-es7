import Response from '../../../helpers/Response';
import Uuid from 'uuid';
import Path from 'path';
export default class SiteController {
    upload = async (req, res) => {
        try {
            if (!req.files) {
                return Response.error(res, 'No files were uploaded.');
            }
            const file = req.files.file;
            const fileName = `${Uuid.v4()}${Path.extname(file.name)}`;
            await file.mv(Path.join(__rootDir, 'server', 'public', 'uploads', `${fileName}`));
            return Response.success(res, fileName);
        } catch (err) {
            return Response.error(res, err);
        }
    };
}