import RouterClass from "./Router.class.js";
import { passportCall } from "../middleware/session.js";
import {
  addProductInCart,
  createCart,
  deleteCart,
  deleteProductInCart,
  getCarts,
  updateCart,
  updateProductInCart,
} from "../controllers/CartController.js";

class CartRouterClass extends RouterClass {
  init() {
    this.get("/", passportCall("jwt"), getCarts);
    this.post("/", passportCall("jwt"), createCart);
    this.post("/:cid/products/:pid", passportCall("jwt"), addProductInCart);
    this.delete("/:cid/products/:pid", passportCall("jwt"), deleteProductInCart);
    this.delete("/:cid/", passportCall("jwt"), deleteCart);
    this.put("/:cid", passportCall("jwt"), updateCart);
    this.put("/:cid/products/:pid", passportCall("jwt"), updateProductInCart);
  }
}

export default CartRouterClass;
