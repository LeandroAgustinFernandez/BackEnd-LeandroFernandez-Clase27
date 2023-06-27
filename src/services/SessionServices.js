import { USER_DAO } from "../dao/DaoManagers.js";

class SessionServices {
  getUser = async (email) => await USER_DAO.getUser(email);
  saveUser = async (user) => await USER_DAO.register(user);
  changePassword = async (passwords) => await USER_DAO.resetPassword(passwords);
}

export default SessionServices;