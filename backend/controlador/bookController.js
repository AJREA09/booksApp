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
    const book = await Book.findByPk(id);
    
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    
    res.json(book);
  } catch (error) {
    console.error("Error al buscar el libro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
