import {User} from '../models';
import {JWT_SECRET, JWT_EXPIRATION_MINUTES} from '../config';
import BaseRepository from './BaseRepository';
import JWT from '../helpers/JWT';


export default class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    authenticate = async (data) => {
        const {email, password} = data;
        try {
            const user = await this.model.findOne({
                attributes: ['id', 'email', 'password', 'role'],
                where: {
                    email: email,
                },
            });
            if (!user) {
                throw new Error('Email not found');
            } else if (await user.comparePassword(password)) {
                const token = await JWT.sign(
                    {
                        id: user.id,
                        role: user.role
                    },
                    JWT_SECRET,
                    {
                        expiresIn: JWT_EXPIRATION_MINUTES
                    },
                );
                return token;
            } else {
                throw new Error('Password incorrect');
            }
        } catch (e) {
            throw new Error(e);
        }
    }

}