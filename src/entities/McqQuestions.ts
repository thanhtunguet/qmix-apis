import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Questions } from './Questions';

@Index('mcq_questions_pkey', ['questionid'], { unique: true })
@Entity('mcq_questions', { schema: 'public' })
export class McqQuestions {
  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

  @Column('text', { name: 'questiontext' })
  questiontext: string;

  @Column('text', { name: 'optiona' })
  optiona: string;

  @Column('text', { name: 'optionb' })
  optionb: string;

  @Column('text', { name: 'optionc' })
  optionc: string;

  @Column('text', { name: 'optiond' })
  optiond: string;

  @Column('character', { name: 'correctoption', length: 1 })
  correctoption: string;

  @Column('timestamp without time zone', {
    name: 'createdat',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdat: Date | null;

  @Column('timestamp without time zone', {
    name: 'updatedat',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedat: Date | null;

  @Column('timestamp without time zone', { name: 'deletedat', nullable: true })
  deletedat: Date | null;

  @OneToOne(() => Questions, (questions) => questions.mcqQuestions)
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;
}
