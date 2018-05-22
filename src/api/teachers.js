import axios from 'axios';

export async function getTeachers(accessToken) {
  const { data } = await axios.get('http://localhost:3000/teachers', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}

export async function getTeacher(accessToken, id) {
  const { data } = await axios.get(`http://localhost:3000/teachers/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}

export async function createTeacher(accessToken, { email, name, code }) {
  const { data } = await axios.post(
    'http://localhost:3000/teachers',
    { email, name, code },
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  return data;
}

export async function updateTeacher(accessToken, { id, email, name, code }) {
  await axios.put(
    `http://localhost:3000/teachers/${id}`,
    { email, name, code },
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
}

export async function removeTeacher(accessToken, id) {
  const { data } = await axios.delete(`http://localhost:3000/teachers/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}

export async function getEntries(accessToken, id) {
  const { data } = await axios.get(
    `http://localhost:3000/teachers/${id}/entries`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  return data;
}

export async function addEntry(accessToken, id, entry) {
  const { data } = await axios.post(
    `http://localhost:3000/teachers/${id}/entries`,
    entry,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  return data;
}
