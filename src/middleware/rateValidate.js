// middlewares/auth.js
module.exports = (req, res, next) => {
    const { talk } = req.body;
    // Caso o campo rate não seja informado ou esteja vazio retorne status 400
    if (talk.rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    // Caso a nota não seja um inteiro de 1 à 5 retorne status 400
    if (!Number.isInteger(talk.rate) || talk.rate < 1 || talk.rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};

/*
Requisito 5
Varificação se a avaliação existe, é um número e está entre 1 e 5
*/