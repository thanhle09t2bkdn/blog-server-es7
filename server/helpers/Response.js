module.exports = {

    returnSuccess(message, data) {
        return {
            message: message,
            data: data
        };
    },

	returnSuccess(data) {
		return {
			data: data
		};
	},

    returnError(message, code) {
        return {
            error: {
                message: message,
                code: code
            }
        };
    }

};