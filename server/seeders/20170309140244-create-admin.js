'use strict';

import {userRepository} from '../repositories';
import {User} from '../models';
import Download from '../helpers/Download';
import Uuid from 'uuid';
import Path from 'path';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const imageName = `${Uuid.v4()}.jpg`;
            const pathUploads = Path.join(__dirname, '..', 'public', 'uploads');
            await Download.file('http://trikotec.co.zw/wp-content/uploads/2018/03/admin.jpg', pathUploads, imageName);
            await userRepository
                .create({
                    email: 'admin@gmail.com',
                    password: 'abc123',
                    firstName: 'tony',
                    lastName: 'le',
                    role: User.Roles.ADMN,
                    avatar: imageName
                });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    down: async (queryInterface, Sequelize) => {
        try {
            await userRepository.delete({where: {'email': 'admin@gmail.com'}});
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
};
