import express from 'express';
import { ICustomerHandler, CustomerInfo } from './types';
import v1Api from './apiv1Customer';
import v2Api from './apiv2Customer';

class ApiController {
    public path: string = null;
    private handler: ICustomerHandler = null;

    constructor(app: express.Application) {
        switch (app.locals.apiVersion) {
            case 1:
                this.handler = new v1Api();
                this.path = '/api/v1';
                break;
            case 2:
                this.handler = new v2Api();
                this.path = '/api/v2';
                break;
            default:
                throw 'not valid api version';
        }
    }

    public registerRoutes(app: express.Application) {
        app.post('${this.path}/parse', this.handler.postName);
    }
}

export default ApiController;