import axios from 'axios';

export async function login(email, password) {
  const { data } = await axios.post('http://localhost:3000/auth/login', {
    email,
    password,
  });

  return data;
}

export async function signUp(email, name, password) {
  await axios.post('http://localhost:3000/users', {
    email,
    name,
    password,
  });
}
