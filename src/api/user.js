import axios from 'axios';

export async function loadUserData(accessToken, id) {
  const { data } = await axios.get(`http://localhost:3000/users/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}
