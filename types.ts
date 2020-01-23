import { Request, Response } from 'express';

export type CustomerInfo = {
    firstName: string;
    lastName: string;
    clientId: string;
}

export interface ICustomerHandler {
    postName: (req: Request, res: Response) => void;
}