import AuthValidation from './AuthValidation';
import CategoryValidation from "./CategoryValidation";


module.exports = {
    authValidation: new AuthValidation(),
    categoryValidation: new CategoryValidation(),
};