const moment = require('moment');

const validateName = (req, res, next) => {
  const { name } = req.body;

  if(!name || name === '') {
    return res.status(400).json({ message: 'Nome inválido!' });
  };

  next();
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const layout = /\S+@\S+\.\S+/;

  const validate = layout.test(email);

  if(validate === false) {
    return res.status(400).json({ message: 'E-mail inválido' });
  }

  next();
}

const validateBirthDate = (req, res, next) => {
  const { birthDate } = req.body;

  const validate = moment(birthDate, 'DD/MM/YYYY', true).isValid();

  if(validate !== true) {
    return res.status(400).json({ message: 'Data de nascimento inválida!' });
  }

  next();
};

const validateTelephone = (req, res, next) => {
  const { telephone } = req.body;

  if(telephone.length < 12) {
    return res.status(400).json({ message: 'Número de telefone inválido!' });
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validateBirthDate,
  validateTelephone,
};