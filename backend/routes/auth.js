const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

// 회원가입
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  try {
    db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(username, hashed);
    res.json({ message: '회원가입 성공' });
  } catch {
    res.status(400).json({ message: '이미 존재하는 아이디' });
  }
});

// 로그인
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ message: '아이디 또는 비밀번호 오류' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;