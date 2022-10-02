require('dotenv').config();

const express = require('express');
const { Peoples } = require('../database/models');

const router = express.Router();

router.get('/', async (_req, res) => {
  const users = await Peoples.findAll({
    attributes: ['id', 'name', 'email', 'birthDate', 'telephone'],
  });

  res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const { name, email, birthDate, telephone } = req.body;

  try {
    await Peoples.create({ name, email, birthDate, telephone });
    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (e) {
    return res.status(500).json({ message: `Algo deu errado: ${e.message}` });
  }
});

module.exports = router;