import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// ↓これをつけるとEntityクラスになり，memoテーブルの定義になる．
@Entity()
export class Memo {
  // auto incrementになる
  @PrimaryGeneratedColumn()
  id: number;

  // ↓カラムの指定
  @Column({ length: 500 })
  name: string;
  // ↓カラムの指定
  @Column('text')
  description: string;
}

// このentityファイルからマイグレーションファイルを生成できる
// `npm run build`で`dist/entities`配下に`memo.entity.js`を出力する
// `npx typeorm migration:generate -d src/migrations -n create-memo`で`create-memo`という名前でマイグレーションファイルを作成する