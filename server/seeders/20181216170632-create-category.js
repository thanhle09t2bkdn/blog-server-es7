'use strict';

import {categoryRepository, Op} from '../repositories';
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
                await categoryRepository
                    .create({
                        title: Faker.name.title(),
                        image: imageName,
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
            await categoryRepository.delete({
                where: {
                    id: {
                        [Op.ne]: null
                    }
                }
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
};
