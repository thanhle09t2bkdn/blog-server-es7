export default class BaseRepository {

    constructor(model) {
        this.model = model;
    }

    async find(options) {
        return await this.model.findAll(options);
    }

    async findOne(options) {
        return await this.model.findOne(options);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(data, options) {
        return await this.model.update(data, options);
    }

    async delete(options) {
        return await this.model.destroy(options);
    }

}