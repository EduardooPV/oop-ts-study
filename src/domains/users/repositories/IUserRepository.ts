import { IPaginatedResponse } from '../../../shared/interfaces/IPaginatedResponse';
import { User } from '../entities/User';

interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(user: User): Promise<void>;
  deleteById(id: string): Promise<void>;
  updateById(id: string, userData: Partial<User>): Promise<void>;
  findAllPaginated(
    page: number,
    perPage: number,
    name?: string,
    email?: string,
    orderBy?: string,
    orderDirection?: 'asc' | 'desc',
  ): Promise<IPaginatedResponse<User>>;
}

export { IUsersRepository };
