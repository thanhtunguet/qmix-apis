import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Index('Role_pkey', ['id'], { unique: true })
@Entity('Role', { schema: 'public' })
export class Role {
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

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
