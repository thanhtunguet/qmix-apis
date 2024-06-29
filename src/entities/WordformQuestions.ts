import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Questions } from './Questions';

@Index('wordform_questions_pkey', ['questionid'], { unique: true })
@Entity('wordform_questions', { schema: 'public' })
export class WordformQuestions {
  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

  @Column('text', { name: 'sentence' })
  sentence: string;

  @Column('text', { name: 'wordinbrackets' })
  wordinbrackets: string;

  @Column('text', { name: 'correctform' })
  correctform: string;

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

  @OneToOne(() => Questions, (questions) => questions.wordformQuestions)
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;
}
