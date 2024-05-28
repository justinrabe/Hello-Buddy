import { UserRepository } from "../../Infrastructure/Repositories/UserRepository";
import { User } from "../../Domain/Models/User";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
class AuthService {
    private userRepository: UserRepository;
    
    constructor( userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
    public async registerUser(email: string,  password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();
        //declare a new User object
        const user: User = { 
            email: email,
            password: hashedPassword
         };
        return this.userRepository.create(user);
    }

    public async loginUser(email: string, password: string) {
        const user = await this.userRepository.FindOneBy('email', email);
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return user;
    }
}

export default AuthService;