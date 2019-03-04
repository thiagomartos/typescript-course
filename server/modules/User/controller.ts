import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from './service';
import { onSuccess } from '../../api/responses/successHandler';
import { onError } from '../../api/responses/errorHandler';
import { dbErrorHandler } from '../../config/dberrorHandler';

class UserController {

    constructor() { }

    getAll(req: Request, res: Response) {
        User.getAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os usuários'));
    }

    getById(req: Request, res: Response) {
        User.getById(parseInt(req.params.id))
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar usuário'));
    }

    getByEmail(req: Request, res: Response) {
        User.getByEmail(req.params.email)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar usuário'));
    }

    createUser(req: Request, res: Response) {
        User.create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao cadastrar usuário'));
    }

    updateUser(req: Request, res: Response) {
        User.update(parseInt(req.params.id), req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao cadastrar usuário'));
    }

    deleteUser(req: Request, res: Response) {
        User.delete(parseInt(req.params.id))
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao excluir usuário'));;
    }
}

export default new UserController();