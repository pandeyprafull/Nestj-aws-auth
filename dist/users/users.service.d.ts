import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userData: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
    validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
