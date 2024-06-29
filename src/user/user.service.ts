import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async list(filter): Promise<Users[]> {
    const options = {
      skip: filter.skip,
      take: filter.take,
      order: {
        [filter.orderBy]: filter.orderType,
      },
      where: filter.where,
    };
    return this.userRepository.find(options);
  }

  async count(filter): Promise<number> {
    return this.userRepository.count({ where: filter.where });
  }

  async getById(id: number, relations: string[] = []): Promise<Users> {
    return this.userRepository.findOne({
      where: { userid: id },
      relations,
    });
  }

  async create(user: Partial<Users>): Promise<Users> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async update(id: number, user: Partial<Users>): Promise<Users> {
    await this.userRepository.update(id, user);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
