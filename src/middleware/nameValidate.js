// middlewares/auth.js
module.exports = (req, res, next) => {
    const { name } = req.body;
  
    if (!name || name.length === 0) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
      }
      next();
  };

  /*
  Requisito 5
  Verificação se o nome existe, não é nulo e se é maior que 3 caracteres
  */