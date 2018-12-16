import PostRepository from './PostRepository';
import UserRepository from './UserRepository';
import CategoryRepository from './CategoryRepository';
import {Op} from '../models';
module.exports = {
    Op,
    userRepository: new UserRepository(),
    postRepository: new PostRepository(),
    categoryRepository: new CategoryRepository(),
};