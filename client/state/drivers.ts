import { Driver } from 'f1-api-interfaces';

export interface DriverInformation extends Driver {
    constructorId?: string;
    constructorName?: string;
}
