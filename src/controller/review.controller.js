const Review = require("../model/review.module");

const createReviewApi = async (req, res) => {
  const { name, text, date, Rating } = req.body;

  let dateval = new Date(date)

  try {
    let newReview = await Review.create({ name, text, Date: dateval, Rating });
    res.status(201).json(newReview);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error at the ${error.message}` });
  }
};

const getReviewApi = async (req, res) => {
  try {
    const getApi = await Review.find();
    res.status(200).json(getApi);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error server error at ${error.message} ` });
  }
};

const deleteReviewApi = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      res.status(404).json({ message: `Id do not found` });
    }
    await Review.findByIdAndDelete(id, req.body);
    res.status(200).json("Data deleted succesfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error occour at ${error.message}` });
  }
};

const updateReviewApi = async (req, res) => {
  const id = req.parms.id;

  try {
    if (!id) {
      res.status(404).json({ message: `Id do not Found` });
    }
    await Review.findByIdAndUpdate(id, req.body);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Intrnal server error at ${error.message}` });
  }
};

module.exports = {
  createReviewApi,
  getReviewApi,
  deleteReviewApi,
  updateReviewApi,
};
