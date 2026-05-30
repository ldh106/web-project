import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Tab, Tabs } from '@mui/material';
import { login, register } from '../api/auth';

export default function LoginPage({ onLogin }) {
  const [tab, setTab] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (tab === 0) {
      const data = await login(username, password);
      if (data.token) onLogin(data.token, username);
      else setError(data.message);
    } else {
      const data = await register(username, password);
      if (data.message === '회원가입 성공') {
        setTab(0);
        setError('회원가입 완료! 로그인 해주세요.');
      } else setError(data.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper sx={{ p: 4, width: 360 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>🔖 북마크 앱</Typography>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
          <Tab label="로그인" />
          <Tab label="회원가입" />
        </Tabs>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <Typography color={error.includes('완료') ? 'success.main' : 'error'}>{error}</Typography>}
          <Button variant="contained" onClick={handleSubmit}>
            {tab === 0 ? '로그인' : '회원가입'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}