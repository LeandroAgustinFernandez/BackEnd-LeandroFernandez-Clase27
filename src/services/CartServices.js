import { CART_DAO } from "../dao/DaoManagers.js";

class CartServices {
  getCart = async (id) => await CART_DAO.getCart(id)
  createCart = async () => await CART_DAO.addCart();
  deleteCart = async (id) => await CART_DAO.deleteAllProducts(id);
  updateCart = async (id, products) => await CART_DAO.updateProducts(id, products);
  updateProductInCart = async (cid, pid, quantity) => await CART_DAO.updateProductQuantity(cid, pid, quantity);
  addProductInCart = async (cid, pid) => await CART_DAO.addProductToCart(cid, pid)
  deleteProductInCart = async (cid, pid) => await CART_DAO.deleteProduct(cid, pid)
}

export default CartServices;