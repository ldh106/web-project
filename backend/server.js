require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookmarks', require('./routes/bookmarks'));

app.listen(process.env.PORT, () => {
  console.log(`서버 실행 중: http://localhost:${process.env.PORT}`);
});