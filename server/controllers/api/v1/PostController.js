import HTTPStatus from 'http-status';
import Response from '../../../helpers/Response';
import {postRepository} from '../../../repositories';
import {Category, User} from '../../../models';


export default class PostController {

    index = async (req, res) => {
        try {
            const data = req.query;
            const {page, limit} = data;
            const options = {
                attributes: {exclude: ['image', 'categoryId']},
                order: [
                    ['createdAt', 'DESC']
                ],
                include: [
                    {
                        model: Category,
                        as: 'category',
                        attributes: {exclude: ['image', 'createdAt', 'updatedAt', 'deletedAt']}
                    },
                    {
                        model: User,
                        as: 'user',
                        attributes: {exclude: ['avatar', 'createdAt', 'updatedAt', 'deletedAt', 'password']}
                    },
                ],
                page,
                limit
            };
            const posts = await postRepository.findAndCountAll(options);
            return Response.success(res, posts.rows, {
                page,
                count: posts.count
            });

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };
    view = async (req, res) => {
        try {
            const data = req.query;
            const {id} = data;

            const post = await postRepository.findOne({
                attributes: {exclude: ['categoryId', 'userId']},
                where: {
                    id,
                },
                include: [
                    {
                        model: Category,
                        as: 'category',
                        attributes: {exclude: ['image', 'createdAt', 'updatedAt', 'deletedAt']}
                    },
                    {
                        model: User,
                        as: 'user',
                        attributes: {exclude: ['avatar', 'createdAt', 'updatedAt', 'deletedAt', 'password']}
                    },
                ],
            });
            return Response.success(res, post);

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };

    create = async (req, res) => {
        try {
            const data = req.body;
            const {title, image, content, userId, categoryId} = data;

            const post = await postRepository.create({
                title,
                image,
                content,
                userId,
                categoryId
            });
            return Response.success(res, post);

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };

    update = async (req, res) => {
        try {
            const data = req.body;
            const {id, title, image, content, userId, categoryId} = data;

            const result = await postRepository.update({
                    title,
                    image,
                    content,
                    userId,
                    categoryId
                },
                {
                    where: {
                        id,
                    }
                }
            );
            if (result[0] === 0) {
                return Response.error(res, 'Post not found');
            }
            return Response.success(res, true);

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };


}