const Brands = require("../model/brands.model");

const createBrands = async (req, res) => {
  const { name, image } = req.body;

  try {
    let newBrand = await Brands.create({
      name,
      image,
    });

    res.status(201).json(newBrand);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};
const getBrands = async (req, res) => {
  try {
    const newBrand = await Brands.find();

    res.status(200).json(newBrand);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};

const deleteBrands = async (req, res) => {
  const id = req.params.id;
  try {
    let newBrands = await Brands.findById(id);

    if (!newBrands) {
      return res
        .status(404)
        .json({ message: "Id you are trying to delete is not available" });
    }
    await Brands.findByIdAndDelete(id);
    res.status(200).json({ message: "Brand deleted succesfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error :${error.meesage}` });
  }
};

const updateBrands = async (req, res) => {
  const id = req.params.id;
  try {
    let newBrands = await Brands.findById(id);
    if (!newBrands) {
      return res.status(404).json({ message: `brands are not available ` });
    }

    await Brands.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: `Brans updated succefully` });
  } catch (error) {
    res.status(500).json({
      message: `Internal Error occur while updating:${error.meesage}`,
    });
  }
};

module.exports = { createBrands, getBrands, deleteBrands, updateBrands };
