function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

module.exports = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    } if (!validateEmail(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    } if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    } if (password.length < 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

/*
Requisito 4
Fazermos 4 condições para validar os dados do corpo da requisição na rota /login
1 - Usaremos o caso de inexistência para o email
2 - Usaremos um regex para validação de email. Ao longo do curso foi visto ess regex na parte de formulários no react.
3 - Usaremos o caso de inexistência para a senha 
4 - Verificaremos se a senha contém no mínimo 6 caracteres.
*/