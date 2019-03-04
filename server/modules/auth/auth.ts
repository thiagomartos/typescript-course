import { Response, Request } from 'express';
import * as _ from 'lodash';
import User from '../User/service';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';

class TokenRoutes {

    auth(req: Request, res: Response) {
        const credencials = {
            email: req.body.email,
            password: req.body.passowrd
        };

        if (credencials.hasOwnProperty('email') && credencials.hasOwnProperty('password')) {
            User
                .getByEmail(credencials.email)
                .then(_.partial(authSuccess, res, credencials))
                .catch(_.partial(authFail, req, res));
        }
    }
}

export default TokenRoutes;