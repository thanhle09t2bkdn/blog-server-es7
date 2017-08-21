/**
 * Created by joker on 05/08/2017.
 */
import JWT from 'jsonwebtoken';
import Model from '../models';
import FS from 'fs';
import Path from 'path';
import Config from '../config';

const User = Model.User;

export default class AuthRepository {

    async authenticate(data) {
        let {username, password} = data;
        try {
            let user = await User.findOne({
                where: {
                    username: username,
                    role: 'ADMIN',
                },
            });
            if (!user) {
                throw new Error('Not found user');
            } else if (user.validatePassword(password)) {
                const path = Path.resolve(__dirname, '..', 'config', 'cert', 'private.key')
                const cert = FS.readFileSync(path);
                const token = JWT.sign(
                    {
                        id: user.id,
                        role: user.role
                    },
                    cert,
                    {
                        algorithm: 'RS256',
                        expiresIn: Config.expireTime
                    },
                );
                let userJson = user.toJSON();
                userJson.token = token;
                return userJson;
            } else {
                throw new Error('Wrong password');
            }
        } catch (e) {
            throw new Error(e);
        }
    }

}