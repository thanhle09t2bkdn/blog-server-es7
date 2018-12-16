import {Category} from '../models';
import BaseRepository from './BaseRepository';

export default class CategoryRepository extends BaseRepository {
    constructor() {
        super(Category);
    }
}
