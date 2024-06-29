import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Questions } from './Questions';

@Index('fillinblanks_questions_pkey', ['questionid'], { unique: true })
@Entity('fillinblanks_questions', { schema: 'public' })
export class FillinblanksQuestions {
  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

  @Column('text', { name: 'questiontext' })
  questiontext: string;

  @Column('text', { name: 'correctanswer' })
  correctanswer: string;

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

  @OneToOne(() => Questions, (questions) => questions.fillinblanksQuestions)
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;
}
