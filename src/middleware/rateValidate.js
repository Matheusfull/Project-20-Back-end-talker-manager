// middlewares/auth.js
module.exports = (req, res, next) => {
    const { talk } = req.body;
    if (talk.rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    if (!Number.isInteger(talk.rate) || talk.rate < 1 || talk.rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};

/*
Requisito 5
Varificação se a avaliação existe, não é nula e está entre 1 e 5
*/