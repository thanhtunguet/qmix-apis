import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender } from '../../entities';
import { Repository } from 'typeorm';
import { QueryFilter } from '../../core/QueryFilter';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private readonly userRepository: Repository<Gender>,
  ) {}

  async list(filter: QueryFilter): Promise<Gender[]> {
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

  async getById(id: number, relations: string[] = []): Promise<Gender> {
    return this.userRepository.findOne({
      where: { id },
      relations,
    });
  }

  async create(user: Partial<Gender>): Promise<Gender> {
    const newGender = this.userRepository.create(user);
    return this.userRepository.save(newGender);
  }

  async update(id: number, user: Partial<Gender>): Promise<Gender> {
    await this.userRepository.update(id, user);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
