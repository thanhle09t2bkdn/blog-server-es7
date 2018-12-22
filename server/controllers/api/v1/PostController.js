import HTTPStatus from 'http-status';
import Response from '../../../helpers/Response';
import {postRepository} from '../../../repositories';
import {Category} from '../../../models';


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
                attributes: {exclude: ['categoryId']},
                where: {
                    id,
                },
                include: [
                    {
                        model: Category,
                        as: 'category',
                        attributes: {exclude: ['image', 'createdAt', 'updatedAt', 'deletedAt']}
                    },
                ],
            });
            return Response.success(res, post);

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };


}