const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

module.exports = (req, res, next) => {
    const { talk } = req.body;
    
    // Caso a chave watchedAt não seja informada ou esteja vazia retorne status 400
    if (!talk.watchedAt || talk.watchedAt.length === 0) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    // Caso a data não respeite o formato dd/mm/aaaa retorne status 400
    if (!isFormatDate.test(talk.watchedAt)) {
        const msg = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
        return res.status(400).json({ message: msg });
    }
    next();
};

/*
Requisito 5
1 - Verificação se a data existe e não é nula
2 - Usaremos mais um regex para verificar o formato da data, contendo dia, mês e ano. Agora não lembro o site que peguei isso.
*/