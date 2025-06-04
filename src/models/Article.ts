import { urlFileName } from '@noeldemartin/utils';
import Model from './Article.schema';

export default class Article extends Model {

    public static cloud = true;

    public get slug(): string | null {
        return this.url ? urlFileName(this.url) : null;
    }

}
