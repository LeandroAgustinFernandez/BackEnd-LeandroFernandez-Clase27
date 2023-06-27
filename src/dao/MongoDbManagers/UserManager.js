import { userModel } from "../models/user.model.js";
import { createHash } from "../../utils.js";

export default class UserManager {

  async register(userInfo) {
    try {
      let result = await userModel.create(userInfo);
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

  async getUser(email) {
    try {
      let user = await userModel.findOne({ email }, { __v: 0 }).lean();
      if (!user) throw new Error(`User not exists.`);
      return user;
    } catch (error) {
      return { error: error.message };
    }
  }

  async resetPassword({email, newpassword}) {
    try {
      let user = await this.getUser(email);
      let newPassword = createHash(newpassword);
      if (user?.error) throw new Error(user.error);
      let result = await userModel.updateOne(
        { email },
        { $set: { password: newPassword } }
      );
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

}
