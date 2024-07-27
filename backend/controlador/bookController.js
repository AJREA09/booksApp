const { Book } = require("../models");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
