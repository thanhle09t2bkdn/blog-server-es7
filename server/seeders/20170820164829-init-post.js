const User = require('../models').User;
const Post = require('../models').Post;
const Faker = require('faker');

module.exports = {
    up: function(queryInterface, Sequelize) {
            return User.findOne({
                        where: {'role' : 'NORMAL_USER'},
                    }).then(function(user) {
                        Post
                            .create({
                                title: Faker.name.title(),
                                content: Faker.lorem.paragraph(),
                                userId: user.id
                            })
                            .then(function (post) {
                                return true;
                            })
                            .catch(function (error) {
                                console.log(error);
                                return false;
                            });
                }).catch(function(error) {
                    console.log(error);
                    return false;
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
