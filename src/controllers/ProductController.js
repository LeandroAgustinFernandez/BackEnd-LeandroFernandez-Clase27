import { productServices } from "../services/ServicesManager.js";

export const getProducts = async (request, response) => {
  const { limit, sort, page, query } = request.query;
  let res = await productServices.getProducts(
    parseInt(limit),
    page,
    query,
    sort
  );
  let urlParams = `/api/products?`;
  if (query) urlParams += `query=${query}&`;
  if (limit) urlParams += `limit=${limit}&`;
  if (sort) urlParams += `sort=${sort}&`;
  res.prevLink = res.hasPrevPage ? `${urlParams}page=${res.prevPage}` : null;
  res.nextLink = res.hasNextPage ? `${urlParams}page=${res.nextPage}` : null;
  res?.error
    ? response.send({ status: `error`, products: res })
    : response.send({ status: `success`, products: res });
};

export const getProduct = async (request, response) => {
  const { pid } = request.params;
  let res = await productServices.getProduct(pid);
  res?.error
    ? response.status(404).send({ status: `error`, ...res })
    : response.send({ status: `success`, product: res });
};

export const saveProduct = async (request, response) => {
  const io = request.app.get("socketio");
  const { files, body } = request;
  let product = { ...body, status: true };
  let thumbnails = files.map((file) => file.originalname);
  product.thumbnails = thumbnails;
  let res = await productServices.saveProduct(product);
  let res2 = await productServices.getProducts();
  response.send(res);
  io.emit("products", res2);
};

export const deleteProduct = async (request, response) => {
  let { pid } = request.params;
  const io = request.app.get("socketio");
  let res = await productServices.deleteProduct(pid);
  let res2 = await productServices.getProducts();
  response.send(res);
  io.emit("products", res2);
};

export const updateProduct = async (request, response) => {
  let { pid } = request.params;
  let res = await productServices.updateProduct(pid, request.body);
  res?.error
    ? response.status(400).send({ ...res })
    : response.send({ product: res });
};
