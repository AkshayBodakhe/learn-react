import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export class UserService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(`${this.baseURL}/users`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }

  async getUserById(id: number): Promise<User> {
    try {
      const response = await axios.get<User>(`${this.baseURL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
  }
}

const userService = new UserService();
export default userService; 