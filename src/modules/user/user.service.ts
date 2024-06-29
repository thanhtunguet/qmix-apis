import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { QueryFilter } from '../../core/QueryFilter';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async list(filter: QueryFilter): Promise<User[]> {
    const options = {
      skip: filter.skip,
      take: filter.take,
      order: {
        [filter.orderBy]: filter.orderType,
      },
    };
    return this.userRepository.find(options);
  }

  async count(filter: QueryFilter): Promise<number> {
    return this.userRepository.count({});
  }

  async getById(id: number, relations: string[] = []): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations,
    });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
