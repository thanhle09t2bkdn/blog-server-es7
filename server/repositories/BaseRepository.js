export default class BaseRepository {

    constructor(model) {
        this.model = model;
    }

    async findAll(options) {
        if (!options.limit) {
            options.limit = 1000;
        } else {
            options.limit = parseInt(options.limit);
        }
        if (options.page) {
            options.page = parseInt(options.page);
            options.offset = ((options.page - 1) * options.limit);
            delete options.page;
        }
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

    async destroy(options) {
        return await this.model.destroy(options);
    }

}