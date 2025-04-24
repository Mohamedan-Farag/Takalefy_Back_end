import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    validateUser(email: string, password: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    } | null>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
