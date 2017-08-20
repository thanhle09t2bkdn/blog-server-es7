import Model from '../models/index1';

let Post = Model.Post;

export default class PostRepository {

	async getAll() {
		try {
			return await Post.findAll();
		} catch (e) {
			throw new Error(e);
		}
	}

	async create(Post) {
		try {
			return await Post.create(Post);
		} catch (e) {
			throw new Error(e);
		}
	}

	async update(id, data) {
		try {
			return await Post.update(data, {where: {id}});
		} catch (e) {
			throw new Error(e);
		}
	}

	async get(id) {
		try {
			return await Post.findById(id);
		} catch (e) {
			throw new Error(e);
		}
	}

	async remove(id) {
		try {
			return await Post.destroy({where: {id}});
		} catch (e) {
			throw new Error(e);
		}
	}

}