import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from './Test';
import { Gender } from './Gender';
import { Role } from './Role';

@Index('User_index_0', ['email', 'username'], {})
@Index('User_pkey', ['id'], { unique: true })
@Entity('User', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'username',
    nullable: true,
    length: 255,
  })
  username: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('timestamp without time zone', { name: 'birthday', nullable: true })
  birthday: Date | null;

  @Column('character varying', { name: 'avatar', nullable: true, length: 2096 })
  avatar: string | null;

  @Column('timestamp with time zone', {
    name: 'createdAt',
    nullable: true,
    default: () => 'now()',
  })
  createdAt: Date | null;

  @Column('timestamp with time zone', {
    name: 'updatedAt',
    nullable: true,
    default: () => 'now()',
  })
  updatedAt: Date | null;

  @Column('timestamp with time zone', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;

  @Column('character varying', {
    name: 'displayName',
    nullable: true,
    length: 255,
  })
  displayName: string | null;

  @OneToMany(() => Test, (test) => test.user)
  tests: Test[];

  @ManyToOne(() => Gender, (gender) => gender.users)
  @JoinColumn([{ name: 'genderId', referencedColumnName: 'id' }])
  gender: Gender;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn([{ name: 'roleId', referencedColumnName: 'id' }])
  role: Role;
}
