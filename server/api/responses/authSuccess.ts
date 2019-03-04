import { Response, response } from 'express';
import * as jwt from 'jwt-simple';
import * as HTTPStatus from 'http-status';
const config = require('../../config/env/config')();

export default function authSuccess(res: Response, credencials: any, data: any) {
    const isMatch = (credencials.password == data.password);

    if (isMatch) {
        const payload = { id: data.id };
        res.json({
            token: jwt.encode(payload, config.secret)
        });
    } else {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
}