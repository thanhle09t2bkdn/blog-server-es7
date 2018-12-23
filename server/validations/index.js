import AuthValidation from './AuthValidation';
import CategoryValidation from "./CategoryValidation";
import PostValidation from "./PostValidation";
import UserValidation from "./UserValidation";


module.exports = {
    authValidation: new AuthValidation(),
    categoryValidation: new CategoryValidation(),
    postValidation: new PostValidation(),
    userValidation: new UserValidation(),
};