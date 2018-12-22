import AuthValidation from './AuthValidation';
import CategoryValidation from "./CategoryValidation";
import PostValidation from "./PostValidation";


module.exports = {
    authValidation: new AuthValidation(),
    categoryValidation: new CategoryValidation(),
    postValidation: new PostValidation(),
};