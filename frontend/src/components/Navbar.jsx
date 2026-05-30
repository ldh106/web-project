import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Navbar({ username, onLogout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <BookmarkIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          북마크 앱
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography>{username}님</Typography>
          <Button color="inherit" onClick={onLogout}>로그아웃</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}