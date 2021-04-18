import { IUserInterfaceDTO } from "../infra/schema/User";
import UserRepository from "../repositories/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async createUser(data: IUserInterfaceDTO): Promise<IUserInterfaceDTO> {
    if (!(data.name && data.password && data.username)) {
      const err = new Error("Name, username and password are required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const foundUser = await this.userRepository.findOneByUsername(
      data.username
    );
    if (foundUser) {
      const err = new Error("Already exists an user with the same username");
      Object.assign(err, { status: 403 });

      throw err;
    }

    const newUser = await this.userRepository.createUser(data);
    return newUser;
  }
}

export default UserService;
