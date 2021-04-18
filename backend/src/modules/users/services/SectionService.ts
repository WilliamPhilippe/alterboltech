import jwt from "jsonwebtoken";

import auth from "../../../config/auth";
import UserRepository from "../repositories/UserRepository";

interface IUserLogin {
  username: string;
  password: string;
}

interface ILoginResponse {
  id: string;
  token: string;
}

class SectionService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async login(user: IUserLogin): Promise<ILoginResponse> {
    if (!user.password || !user.username) {
      const err = new Error("Username and password are required");
      Object.assign(err, { status: 400 });

      throw err;
    }

    const { _id, password } = await this.userRepository.findOneByUsername(
      user.username
    );

    if (user.password !== password) {
      const err = new Error("Invalid credentials");
      Object.assign(err, { status: 401 });
      throw err;
    }

    return {
      id: _id,
      token: jwt.sign({ id: _id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    };
  }
}

export default SectionService;
