'use strict';

const User = require('../models').User;
const Faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        console.log("thanh");
        User.findOne({
                where: {'role' : 'NORMAL_USER'},
        }).then(function(user) {
            console.log("thanh le");
            return Post
                .create({
                    title: "Faker.name.title()",
                    content: "Faker.lorem.paragraph()",
                    userId: user.id
                })
                .then(post => {
                    return true;
                })
                .catch(error => {
                    console.log(error);
                    return false;
                });
        });

    },

    down: (queryInterface, Sequelize) => {
        try {
            Post.destroy({})
                .then(post => {
                    return post;
                })
                .catch(error => {
                    console.log(error);
                    return false;
                });
        } catch (e) {
            return false;
        }
    }
};
