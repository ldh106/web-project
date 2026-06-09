const express = require('express');
const router = express.Router();
const db = require('../db/database');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// 전체 조회 + 태그/검색 필터
router.get('/', (req, res) => {
  const { tag, search } = req.query;
  let query = 'SELECT * FROM bookmarks WHERE user_id = ?';
  const params = [req.user.id];

  if (tag) { query += ' AND tag LIKE ?'; params.push(`%${tag}%`); }
  if (search) { query += ' AND (title LIKE ? OR url LIKE ?)'; params.push(`%${search}%`, `%${search}%`); }

  query += ' ORDER BY created_at DESC';
  res.json(db.prepare(query).all(...params));
});

// 생성
router.post('/', (req, res) => {
  const { url, title, memo, tag } = req.body;
  const result = db.prepare('INSERT INTO bookmarks (user_id, url, title, memo, tag) VALUES (?, ?, ?, ?, ?)')
    .run(req.user.id, url, title, memo, tag);
  res.json({ id: result.lastInsertRowid });
});

// 수정
router.put('/:id', (req, res) => {
  const { url, title, memo, tag } = req.body;
  db.prepare('UPDATE bookmarks SET url=?, title=?, memo=?, tag=? WHERE id=? AND user_id=?')
    .run(url, title, memo, tag, req.params.id, req.user.id);
  res.json({ message: '수정 완료' });
});

// 삭제
router.delete('/:id', (req, res) => {
  db.prepare('DELETE FROM bookmarks WHERE id=? AND user_id=?').run(req.params.id, req.user.id);
  res.json({ message: '삭제 완료' });
});

module.exports = router;