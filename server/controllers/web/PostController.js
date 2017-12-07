import HTTPStatus from 'http-status';
import Response from '../../helpers/Response';
import { PostRepository } from '../../repositories';

let postRepository = new PostRepository();

module.exports = {

    async index(req, res) {
        try {
            let posts = await postRepository.getAll();
            return res
                .status(HTTPStatus.OK)
                .send(Response.returnSuccess(posts));

        } catch (e) {
            return res
                .status(HTTPStatus.BAD_REQUEST)
                .send(Response.returnError(e.message, HTTPStatus.BAD_REQUEST));
        }
    },

    async create(req, res) {
        try {
            let body = req.body;
            let post = await postRepository.create(body);
            return res
                .status(HTTPStatus.OK)
                .send(Response.returnSuccess(Post));
        } catch (e) {
            return res
                .status(HTTPStatus.BAD_REQUEST)
                .send(Response.returnError(e.message, HTTPStatus.BAD_REQUEST));
        }
    },

    async get(req, res) {
        try {
            let postId = req.param('id');
            let post = await postRepository.get(postId);
            return res
                .status(HTTPStatus.OK)
                .send(Response.returnSuccess(Post));
        } catch (e) {
            return res
                .status(HTTPStatus.BAD_REQUEST)
                .send(Response.returnError(e.message, HTTPStatus.BAD_REQUEST));
        }
    },

    async update(req, res) {
        try {
            let postId = req.param('id');
            let body = req.body;
            let post = await postRepository.update(postId, body);
            return res
                .status(HTTPStatus.OK)
                .send(Response.returnSuccess(post));
        } catch (e) {
            return res
                .status(HTTPStatus.BAD_REQUEST)
                .send(Response.returnError(e.message, HTTPStatus.BAD_REQUEST));
        }
    },

    async remove(req, res) {
        try {
            let postId = req.param('id');
            let post = await postRepository.remove(postId);
            return res
                .status(HTTPStatus.OK)
                .send(Response.returnSuccess(post));
        } catch (e) {
            return res
                .status(HTTPStatus.BAD_REQUEST)
                .send(Response.returnError(e.message, HTTPStatus.BAD_REQUEST));
        }
    },

};