import { Module } from '@nestjs/common';
import { MemoController } from './memo.controller';
import { MemoService } from './memo.service';
import { Memo } from 'src/entities/memo.entity'; //追加！
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！

@Module({
  controllers: [MemoController],
  imports: [TypeOrmModule.forFeature([Memo])], // 追加！
  providers: [MemoService]
})
export class MemoModule { }
