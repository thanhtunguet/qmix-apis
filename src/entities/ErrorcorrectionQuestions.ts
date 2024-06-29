import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Questions } from './Questions';

@Index('errorcorrection_questions_pkey', ['questionid'], { unique: true })
@Entity('errorcorrection_questions', { schema: 'public' })
export class ErrorcorrectionQuestions {
  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

  @Column('text', { name: 'sentence' })
  sentence: string;

  @Column('text', { name: 'errorword' })
  errorword: string;

  @Column('text', { name: 'correctword' })
  correctword: string;

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

  @OneToOne(() => Questions, (questions) => questions.errorcorrectionQuestions)
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;
}
