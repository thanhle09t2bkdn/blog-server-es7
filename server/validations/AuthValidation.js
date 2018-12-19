export default class AuthValidation {

    static loginForm = {
        email: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['params', 'query'],
            errorMessage: 'ID is wrong',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true
        },
        password: {
            isLength: {
                errorMessage: 'Password should be at least 7 chars long',
                // Multiple options would be expressed as an array
                options: {min: 7}
            }
        }
    };
    static index = (req, res, next) => {
        console.log(req.body);
        next();
    }

}