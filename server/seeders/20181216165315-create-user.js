'use strict';

import {userRepository} from '../repositories';
import {User} from '../models';
import Download from '../helpers/Download';
import Uuid from 'uuid';
import Path from 'path';
import Faker from 'faker';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const pathUploads = Path.join(__dirname, '..', 'public', 'uploads');
            for (let i = 0; i < 10; i++) {
                const imageName = `${Uuid.v4()}.jpg`;
                await Download.file('https://picsum.photos/200?random', pathUploads, imageName);
                await userRepository
                    .create({
                        email: Faker.internet.email(),
                        password: 'abc123',
                        firstName: Faker.name.firstName(),
                        lastName: Faker.name.lastName(),
                        role: User.Roles.USER,
                        avatar: imageName
                    });
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    down: async (queryInterface, Sequelize) => {
        try {
            await userRepository.destroy({where: {'role': User.Roles.USER}});
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
};
