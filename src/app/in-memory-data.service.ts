import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let samples = [
        {
            "name": "Roxie Ward",
            "gender": "female",
            "company": "EBIDCO",
            "email": "roxieward@ebidco.com",
            "phone": "+1 (975) 494-2149"
        },
        {
            "name": "Dyer Cantu",
            "gender": "male",
            "company": "ASSURITY",
            "email": "dyercantu@assurity.com",
            "phone": "+1 (871) 514-2458"
        },
        {
            "name": "Millicent Allen",
            "gender": "female",
            "company": "VINCH",
            "email": "millicentallen@vinch.com",
            "phone": "+1 (974) 462-3294"
        }  
        ];
        return {samples};
    }

}