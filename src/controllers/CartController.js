import { cartServices } from "../services/ServicesManager.js";

export const getCarts = async (request, response) => {
  const { cid } = request.user.cart;
  let res = await cartServices.getCart(cid);
  res?.error
    ? response.status(404).send({ res })
    : response.send({ status: `success`, payload: res });
};

export const createCart = async (request, response) => {
  let res = await cartServices.createCart();
  res?.error
    ? response.status(404).send({ status: res.error })
    : response.send({
        status: `The cart was created succesfully.`,
        payload: res,
      });
};

export const deleteCart = async (request, response) => {
  const { cid } = request.params;
  let res = await cartServices.deleteCart(cid);
  res?.error
    ? response.status(400).send({ ...res })
    : response.send({ ...res });
};

export const updateCart = async (request, response) => {
  const { cid } = request.params;
  const { products } = request.body;
  let res = await cartServices.updateCart(cid, products);
  res?.error
    ? response.status(400).send({ ...res })
    : response.send({ ...res });
};

export const updateProductInCart = async (request, response) => {
  const { cid, pid } = request.params;
  const { quantity } = request.body;
  let res = await cartServices.updateProductInCart(cid, pid, quantity);
  res?.error
    ? response.status(400).send({ ...res })
    : response.send({ ...res });
};

export const addProductInCart = async (request, response) => {
  const { cid, pid } = request.params;
  let res = await cartServices.addProductInCart(cid, pid);
  res?.error
    ? response.status(400).send({ ...res })
    : response.send({ ...res });
};

export const deleteProductInCart = async (request, response) => {
  const { cid, pid } = request.params;
  let res = await cartServices.deleteProductInCart(cid, pid);
  res?.error
    ? response.status(400).send({ ...res })
    : response.send({ ...res });
};
