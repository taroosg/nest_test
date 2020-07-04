import { Injectable } from '@nestjs/common';
import { Memo } from 'src/entities/memo.entity'; //追加！
import { Repository } from 'typeorm'; //追加！
import { InjectRepository } from '@nestjs/typeorm'; //追加！

@Injectable()
export class MemoService {
  constructor(
    @InjectRepository(Memo) //追加！
    private readonly memoRepository: Repository<Memo> //追加！
  ) { }

  // サービスの実装 / メモの追加
  addMemo(name: string, description: string) {
    const memo = new Memo()
    memo.name = name;
    memo.description = description;
    return this.memoRepository.insert(memo);
  }

  // メモの取得
  getMemoList() {
    return this.memoRepository.find();
  }

}
