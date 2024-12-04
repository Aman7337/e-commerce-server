const Product = require("../model/product.model");

const createProduct = async (req, res) => {
  const { name, image, text, price, colors, size } = req.body;
  try {
    let newProduct = await Product.create({
      name,
      image,
      text,
      price,
      colors,
      size,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};

const getProduct = async (req, res) => {
  try {
    const newProduct = await Product.find();

    res.status(200).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error :${error.meesage}` });
  }
};

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product doesn't found" });
    }
    res.status(200).json(existingProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error :${error.message}` });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let newProduct = await Product.findById(id);

    if (!newProduct) {
      return res
        .status(404)
        .json({ message: "Id Product is not available to delete" });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted succefully" });
  } catch (error) {
    res.status(500).json({
      message: `Internal server error: ${error.message}`,
    });
  }
};

const updateProducts = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Product updated succesfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal Server error :${error.message}` });
  }
};

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProducts,
  getSingleProduct,
};
