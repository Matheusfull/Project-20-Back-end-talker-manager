/* // middlewares/auth.js
const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

module.exports = (req, res, next) => {
    const { talk } = req.body;
    
    if (!talk.watchedAt || talk.watchedAt.length === 0) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!isFormatDate.test(talk.watchedAt)) {
        const msg = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
        return res.status(400).json({ message: msg });
    }
    next();
}; */