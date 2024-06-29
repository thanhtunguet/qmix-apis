import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grade } from './Grade';
import { User } from './User';

@Index('Test_pkey', ['id'], { unique: true })
@Entity('Test', { schema: 'public' })
export class Test {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 255,
  })
  description: string | null;

  @Column('bigint', { name: 'level', nullable: true })
  level: string | null;

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

  @ManyToOne(() => Grade, (grade) => grade.tests)
  @JoinColumn([{ name: 'gradeId', referencedColumnName: 'id' }])
  grade: Grade;

  @ManyToOne(() => User, (user) => user.tests)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;
}
