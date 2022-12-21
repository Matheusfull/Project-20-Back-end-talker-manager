// middlewares/auth.js
module.exports = (req, res, next) => {
    const { talk } = req.body;
    // Caso o campo não seja informado retorne status 400
    if (!talk) {
        return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    next();
};

/*
Requisito 5
Verificação se há o objeto talk
*/