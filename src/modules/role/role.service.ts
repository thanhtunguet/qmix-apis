import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../entities';
import { Repository } from 'typeorm';
import { QueryFilter } from '../../core/QueryFilter';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly userRepository: Repository<Role>,
  ) {}

  async list(filter: QueryFilter): Promise<Role[]> {
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

  async getById(id: number, relations: string[] = []): Promise<Role> {
    return this.userRepository.findOne({
      where: { id },
      relations,
    });
  }

  async create(user: Partial<Role>): Promise<Role> {
    const newRole = this.userRepository.create(user);
    return this.userRepository.save(newRole);
  }

  async update(id: number, user: Partial<Role>): Promise<Role> {
    await this.userRepository.update(id, user);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
