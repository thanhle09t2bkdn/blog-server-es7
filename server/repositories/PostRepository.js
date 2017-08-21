import { Post } from '../models';
import BaseRepository from './BaseRepository';
export default class PostRepository extends BaseRepository {
    constructor() {
        super('Post');
    }
}