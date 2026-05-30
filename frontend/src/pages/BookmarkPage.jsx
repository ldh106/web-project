import { useState, useEffect } from 'react';
import { Box, Button, TextField, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import BookmarkCard from '../components/BookmarkCard';
import BookmarkModal from '../components/BookmarkModal';
import { getBookmarks, createBookmark, updateBookmark, deleteBookmark } from '../api/bookmarks';

export default function BookmarkPage({ username, onLogout }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  const fetchBookmarks = async () => {
    const data = await getBookmarks(tag, search);
    if (Array.isArray(data)) setBookmarks(data);
  };

  useEffect(() => { fetchBookmarks(); }, [tag, search]);

  const handleSubmit = async (form) => {
    if (editTarget) await updateBookmark(editTarget.id, form);
    else await createBookmark(form);
    setModalOpen(false);
    setEditTarget(null);
    fetchBookmarks();
  };

  const handleEdit = (bookmark) => {
    setEditTarget(bookmark);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deleteBookmark(id);
    fetchBookmarks();
  };

  return (
    <>
      <Navbar username={username} onLogout={onLogout} />
      <Container sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField label="검색" value={search} onChange={(e) => setSearch(e.target.value)} size="small" sx={{ bgcolor: 'background.paper', borderRadius: 1 }} />
          <TextField label="태그 필터" value={tag} onChange={(e) => setTag(e.target.value)} size="small" sx={{ bgcolor: 'background.paper', borderRadius: 1 }} />
          <Button variant="contained" onClick={() => { setEditTarget(null); setModalOpen(true); }}>
            + 추가
          </Button>
        </Box>
        {bookmarks.length === 0
          ? <Typography color="text.secondary">북마크가 없어요. 추가해보세요!</Typography>
          : bookmarks.map((b) => (
              <BookmarkCard key={b.id} bookmark={b} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
      </Container>
      <BookmarkModal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditTarget(null); }}
        onSubmit={handleSubmit}
        initial={editTarget}
      />
    </>
  );
}