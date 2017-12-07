import AuthRepository from '../../repositories/AuthRepository';
import HTTPStatus from 'http-status';
import Response from '../../helpers/Response';

const authRepository = new AuthRepository();

module.exports = {

    /**
     * @swagger
     * /api/puppies:
     *   get:
     *     tags:
     *       - Puppies
     *     description: Returns all puppies
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of puppies
     *         schema:
     *           $ref: '#/definitions/Puppy'
     */
    async login(req, res) {
        let data = req.body;
        try {
            let user = await authRepository.authenticate(data);
            return res
                .status(HTTPStatus.OK)
                .send(Response.returnSuccess(user));
        } catch (e) {
            return res
                .status(HTTPStatus.BAD_REQUEST)
                .send(Response.returnError(e.message, HTTPStatus.BAD_REQUEST));
        }
    },

};
