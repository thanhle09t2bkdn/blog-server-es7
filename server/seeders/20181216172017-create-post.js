'use strict';

import {postRepository, categoryRepository, userRepository, Op} from '../repositories';
import Download from '../helpers/Download';
import Uuid from 'uuid';
import Path from 'path';
import Faker from 'faker';
import {User} from '../models';
import Random from '../helpers/Random';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            const pathUploads = Path.join(__dirname, '..', 'public', 'uploads');
            const categories = await categoryRepository.findAll({});
            console.log(categories[Random.getInt(categories.length - 1)].id);
            const users = await userRepository.findAll({
                where: {
                    role: User.Roles.USER
                }
            });
            for (let i = 0; i < 100; i++) {
                const imageName = `${Uuid.v4()}.jpg`;
                await Download.file('https://picsum.photos/200?random', pathUploads, imageName);
                await postRepository
                    .create({
                        title: Faker.name.title(),
                        image: imageName,
                        content: Faker.lorem.paragraphs(),
                        categoryId: categories[Random.getInt(categories.length - 1)].id,
                        userId: users[Random.getInt(users.length - 1)].id,
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
            await postRepository.destroy({
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
