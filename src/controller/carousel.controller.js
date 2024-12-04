const Carousal = require("../model/carousal.model");

const createCrousal = async (req, res) => {
  const { title, text, subText, btnText, image } = req.body;
  try {
    let newCarousal = await Carousal.create({
      title: title,
      text,
      subText,
      btnText,
      image,
    });

    res.status(201).json(newCarousal);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};

const getCarousal = async (req, res) => {
  try {
    const carousals = await Carousal.find();

    res.status(200).json(carousals);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error :${error.meesage}` });
  }
};

const deleteCarousal = async (req, res) => {
  const id = req.params.id;
  try {
    let carousal = await Carousal.findById(id);

    if (!carousal) {
      return res
        .status(404)
        .json({ message: "Id you are trying to delete is not available" });
    }

    await Carousal.findByIdAndDelete(id);
    res.status(200).json({ message: "Carousal deleted succesfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error :${error.meesage}` });
  }
};

const updateCarousal = async (req, res) => {
  const id = req.params.id;

  try {
    await Carousal.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Carousal updated succesfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error :${error.meesage}` });
  }
};

module.exports = { createCrousal, getCarousal, deleteCarousal, updateCarousal };
