const BASE_URL = '/api';

const getToken = () => sessionStorage.getItem('token');

export const getBookmarks = async (tag, search) => {
  const params = new URLSearchParams();
  if (tag) params.append('tag', tag);
  if (search) params.append('search', search);

  const res = await fetch(`${BASE_URL}/bookmarks?${params}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.json();
};

export const createBookmark = async (data) => {
  const res = await fetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateBookmark = async (id, data) => {
  const res = await fetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteBookmark = async (id) => {
  const res = await fetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.json();
};