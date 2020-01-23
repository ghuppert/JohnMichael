import { Request, Response } from 'express';
import { ICustomerHandler, CustomerInfo } from './types';

class v2Customer implements ICustomerHandler {
    postName = (req: Request, res: Response) => {
        const data: string = req.data;
        // first name is in first 8 characters remove trailing 0's
        let firstName = data.substring(0, 8);
        firstName = firstName.substring(0, firstName.indexOf('0'));
        // last name is in next 10 characters remove trailing 0's
        let lastName = data.substring(8, 10);
        lastName = lastName.substring(0, lastName.indexOf('0'));
        // rest of strings is clientId, first 3 digist to be seperated by hyphen
        let clientId = data.substring(18);
        clientId = clientId.substring(0, 3) + '-' + clientId.substring(3);

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

export default v2Customer;