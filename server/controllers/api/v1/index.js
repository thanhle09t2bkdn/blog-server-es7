import PostController from './PostController';
import AuthController from './AuthController';
import UserController from './UserController';
import CategoryController from './CategoryController';
module.exports = {
    postController: new PostController(),
    authController: new AuthController(),
    userController: new UserController(),
    categoryController: new CategoryController(),
};