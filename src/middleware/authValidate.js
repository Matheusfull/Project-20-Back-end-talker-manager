// middlewares/auth.js
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
  
    // Caso o token não seja encontrado retorne um código de status 401
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    // Caso o token seja inválido retorne um código de status 401
    if (authorization.length !== 16) {
        return res.status(401).json({ message: 'Token inválido' });
      }
      next();
  };

  /*
  Requisito 5-
  Varificação para ver se a authorization que vem nos headers da requisição existe e tem o tamanho pardão, de 16 caracteres
  */