import { FlashMessageInterface } from './flash-message.interface';
export declare class FlashMessage implements FlashMessageInterface {
    static nextId: number;
    id: number;
    text: string;
    cssClass: string;
    constructor(text?: string, cssClass?: string);
}
