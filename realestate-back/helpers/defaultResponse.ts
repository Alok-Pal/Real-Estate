import { Response } from 'express';
import { DefaultResponseInterface } from '../models/interfaces';

// Default Response For Every Api
export const DefaultResponse = (
    res: Response,
    statusCode: number,
    message: string,
    data?: any,
    total?: number,
    page?: number,

) => {
    let response: DefaultResponseInterface = {
        statusCode: statusCode,
        message: message,
        data: data,
    };
    if (total) {
        response = { ...response, total };
    }
    if (page) {
        response = { ...response, page };
    }

    return res.status(statusCode).json(response);
};
