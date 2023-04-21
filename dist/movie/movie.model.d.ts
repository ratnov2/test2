import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface MovieModel extends Base {
}
export declare class Parameter {
    year: number;
    duration: number;
    country: string;
}
export declare class MovieModel extends TimeStamps {
    poster: string;
    bigPoster: string;
    title: string;
    parameters: Parameter;
    rating?: number;
    countOpened?: number;
    videoUrl: string;
    slug: string;
    isSendTelegram?: boolean;
}
