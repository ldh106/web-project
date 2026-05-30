import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

export default function BookmarkModal({ open, onClose, onSubmit, initial }) {
  const [form, setForm] = useState({ url: '', title: '', memo: '', tag: '' });

  useEffect(() => {
    if (initial) setForm(initial);
    else setForm({ url: '', title: '', memo: '', tag: '' });
  }, [initial, open]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{initial ? '북마크 수정' : '북마크 추가'}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField label="URL" name="url" value={form.url} onChange={handleChange} required />
        <TextField label="제목" name="title" value={form.title} onChange={handleChange} />
        <TextField label="메모" name="memo" value={form.memo} onChange={handleChange} multiline rows={2} />
        <TextField label="태그" name="tag" value={form.tag} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button variant="contained" onClick={() => onSubmit(form)}>저장</Button>
      </DialogActions>
    </Dialog>
  );
}