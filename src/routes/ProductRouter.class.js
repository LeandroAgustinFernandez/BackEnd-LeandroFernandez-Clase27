import RouterClass from "./Router.class.js";
import { uploader } from "../utils.js";
import {
  deleteProduct,
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
} from "../controllers/ProductController.js";

class ProductRouterClass extends RouterClass {
  init() {
    this.get("/", getProducts);
    this.post("/", uploader.array("thumbnails"), saveProduct);
    this.get("/:pid", getProduct);
    this.delete("/:pid", deleteProduct);
    this.put("/:pid", updateProduct);
  }
}

export default ProductRouterClass;
