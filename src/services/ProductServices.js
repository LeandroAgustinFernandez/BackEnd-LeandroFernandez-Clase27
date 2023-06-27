import { PRODUCT_DAO } from "../dao/DaoManagers.js";

class ProductServices {
  getProducts = async (limit, sort, page, query) =>
    await PRODUCT_DAO.getProducts(parseInt(limit), page, query, sort);
  getProduct = async (id) => await PRODUCT_DAO.getProductById(id);
  saveProduct = async (product) => await PRODUCT_DAO.addProduct(product);
  deleteProduct = async (id) => await PRODUCT_DAO.deleteProduct(pid);
  updateProduct = async (id, product) => await PRODUCT_DAO.updateProduct(pid, request.body);
}

export default ProductServices