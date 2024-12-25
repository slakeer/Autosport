export const register = async (email, password, name) => {
  const response = await fetch('http://localhost:5000/api/Auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  if (!response.ok) {
    return 'Registration failed'
  }

  return response.json();
};

export const login = async (user) => {
  const response = await fetch('http://localhost:5000/api/Auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    return 'Login failed'

  }

  const data = await response.json();
  return data;
};
