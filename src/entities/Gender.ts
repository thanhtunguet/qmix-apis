import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Index('Gender_pkey', ['id'], { unique: true })
@Entity('Gender', { schema: 'public' })
export class Gender {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('character varying', { name: 'code', nullable: true, length: 255 })
  code: string | null;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 400,
  })
  description: string | null;

  @OneToMany(() => User, (user) => user.gender)
  users: User[];
}
