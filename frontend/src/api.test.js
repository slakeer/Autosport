import { register, login } from './api'; 

describe('API tests', () => {
    describe('register function', () => {
      it('should return success message on successful registration', async () => {
        const mockResponse = { message: 'Registration successful', userId: '123' };
        global.fetch = jest.fn().mockResolvedValueOnce({
          json: () => mockResponse,
          ok: true,
        });
  
        const result = await register('test@example.com', 'password', 'John Doe');
        expect(result.message).toBe('Registration successful');
        expect(result.userId).toBe('123');
      });
  
      it('should throw an error when registration fails', async () => {
        global.fetch = jest.fn().mockRejectedValueOnce(new Error('Registration failed'));
        try {
          await register('test@example.com', 'password', 'John Doe');
        } catch (error) {
          expect(error.message).toBe('Registration failed');  // Проверка сообщения ошибки
        }
      });
    });
  
    describe('login function', () => {
      it('should return user data on successful login', async () => {
        const mockResponse = { message: 'Login successful', userId: '123' };
        global.fetch = jest.fn().mockResolvedValueOnce({
          json: () => mockResponse,
          ok: true,
        });
  
        const result = await login({ email: 'test@example.com', password: 'password' });
        expect(result.message).toBe('Login successful');
        expect(result.userId).toBe('123');
      });
  
      it('should throw an error when login fails', async () => {
        global.fetch = jest.fn().mockRejectedValueOnce(new Error('Login failed'));
        try {
          await login({ email: 'test@example.com', password: 'password' });
        } catch (error) {
          expect(error.message).toBe('Login failed');  // Сравниваем свойство message
        }
      });
      
    });
  });
  