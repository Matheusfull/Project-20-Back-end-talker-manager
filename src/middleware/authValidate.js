// middlewares/auth.js
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
        return res.status(401).json({ message: 'Token inválido' });
      }
      next();
  };

  /*
  Requisito 5-
  Varificação para ver se a authorization que vem no headers da requisição existe e tem o tamanha pardão, de 16 caracteres
  */