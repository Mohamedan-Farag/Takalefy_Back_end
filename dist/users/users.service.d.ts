import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from './user.interface';
export declare class UsersService {
    private users;
    private id;
    create(dto: CreateUserDto): Promise<{
        password: any;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        id: number;
    }>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
}
