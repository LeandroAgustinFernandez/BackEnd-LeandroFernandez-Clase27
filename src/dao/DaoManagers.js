import CartManager from "./MongoDbManagers/CartManager.js";
import ProductManager from "./MongoDbManagers/ProductManager.js";
import UserManager from "./MongoDbManagers/UserManager.js";

const productManager = new ProductManager();
const userManager = new UserManager();
const cartManager = new CartManager();

export const PRODUCT_DAO = productManager;
export const USER_DAO = userManager;
export const CART_DAO = cartManager;
