const Style = require("../model/style.module");

const createStyle = async (req, res) => {
  const { style, image, path } = req.body;
  try {
    let newStyle = await Style.create({
      style,
      image,
      path,
    });

    res.status(201).json(newStyle);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error at ${error.message}` });
  }
};

const getStyle = async (req, res) => {
  try {
    const getStyleApi = await Style.find();

    res.status(201).json(getStyleApi);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error at ${error.message}` });
  }
};

const deleteStyle = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      res.status(404).json({ messge: `There is no id available in request` });
    }

    await Style.findByIdAndDelete(id, req.body);
    res.status(201).json({ message: `The data is deleted` });
  } catch (error) {
    res.status(500).json({ message: `Inter server error at ${error.message}` });
  }
};

const updateStyle = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      res
        .status(404)
        .json({ message: `The data which u want to update is not available` });
    }
    const updateStyleData = await Style.findByIdAndUpdate(id, req.body);
    res.status(200).json(updateStyleData);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error at ${error.message}` });
  }
};

module.exports = { createStyle, getStyle, deleteStyle, updateStyle };
