import User, { IUserInterfaceDTO } from "../infra/schema/User";

class UserRepository {
  public async createUser(
    data: IUserInterfaceDTO
  ): Promise<IUserInterfaceDTO | string> {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (err) {
      Object.assign(err, { status: 500 });
      throw err;
    }
  }

  public async findOneByUsername(
    username: string
  ): Promise<IUserInterfaceDTO | null> {
    try {
      const foundUser = await User.findOne({ username }).exec();
      return foundUser;
    } catch (err) {
      Object.assign(err, { status: 500 });
      throw err;
    }
  }
}

export default UserRepository;
