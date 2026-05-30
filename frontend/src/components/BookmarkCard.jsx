import { Card, CardContent, Typography, IconButton, Box, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function BookmarkCard({ bookmark, onEdit, onDelete }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h6">
              <a href={bookmark.url.startsWith('http') ? bookmark.url : `https://${bookmark.url}`} target="_blank" rel="noreferrer">
                {bookmark.title || bookmark.url}
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">{bookmark.url}</Typography>
            {bookmark.memo && <Typography variant="body2" sx={{ mt: 1 }}>{bookmark.memo}</Typography>}
            {bookmark.tag && <Chip label={bookmark.tag} size="small" sx={{ mt: 1 }} />}
          </Box>
          <Box>
            <IconButton onClick={() => onEdit(bookmark)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(bookmark.id)}><DeleteIcon /></IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}