const User = require('../models').User;
module.exports = {
    up: (queryInterface, Sequelize) => {
        return User
            .create({
                username: 'user',
                email: 'user@gmail.com',
                password: 'abc123',
                role: 'NORMAL_USER'
            })
            .then(user => {
                return true;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    down: (queryInterface, Sequelize) => {
        try {
            User.destroy({where: {'username': 'user'}})
                .then(user => {
                    return user;
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
