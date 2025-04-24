import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findUser(id: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }>;
}
