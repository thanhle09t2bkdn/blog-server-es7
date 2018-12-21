import {categoryRepository} from '../../../repositories';
import HTTPStatus from 'http-status';
import Response from '../../../helpers/Response';

export default class CategoryController {
    index = async (req, res) => {
        try {
            const data = req.query;
            const {page, limit} = data;
            const options = {
                order: [
                    ['createdAt', 'DESC']
                ],
                page,
                limit
            };
            const categories = await categoryRepository.findAndCountAll(options);
            return Response.success(res, categories.rows, {
                page,
                count: categories.count
            });

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };
    view = async (req, res) => {
        try {
            const data = req.query;
            const {id} = data;

            const category = await categoryRepository.findByPk(id);
            return Response.success(res, category);

        } catch (e) {
            return Response.error(res, e, HTTPStatus.BAD_REQUEST);
        }
    };
}