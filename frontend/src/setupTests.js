// auth.test.js
import { register, login } from './api';

// Мокаем fetch для тестирования
global.fetch = jest.fn();

// Тест для функции регистрации
describe('register function', () => {
  it('should return success message on successful registration', async () => {
    // Мокаем успешный ответ от API
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Registration successful' }),
    });

    const response = await register('test@example.com', 'password', 'John Doe');
    expect(response.message).toBe('Registration successful');
  });

  it('should throw an error when registration fails', async () => {
    // Мокаем ошибку от API
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.reject('Registration failed'),
    });

    try {
      await register('test@example.com', 'password', 'John Doe');
    } catch (error) {
      expect(error).toBe('Registration failed');
    }
  });
});

// Тест для функции логина
describe('login function', () => {
  it('should return user data on successful login', async () => {
    // Мокаем успешный ответ от API
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ token: 'mock_token', user: { name: 'John Doe' } }),
    });

    const response = await login({ email: 'test@example.com', password: 'password' });
    expect(response.token).toBe('mock_token');
    expect(response.user.name).toBe('John Doe');
  });

  it('should throw an error when login fails', async () => {
    // Мокаем ошибку от API
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.reject('Login failed'),
    });

    try {
      await login({ email: 'test@example.com', password: 'password' });
    } catch (error) {
      expect(error).toBe('Login failed');
    }
  });
});
