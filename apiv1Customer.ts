import { Request, Response } from 'express';
import { ICustomerHandler, CustomerInfo } from './types';

class v1Customer implements ICustomerHandler {
    postName = (req: Request, res: Response) => {
        const data: string = req.data;
        // first name in first 8 characters
        let firstName = data.substring(0, 8);
        // last name is next 10 characters
        let lastName = data.substring(8, 10);
        // rest of strings is clientId
        let clientId = data.substring(18);

        const customer: CustomerInfo = {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        };

        const result = {
            statusCode: 200,
            data: customer
        };

        res.json(result);
    };
}

export default v1Customer;