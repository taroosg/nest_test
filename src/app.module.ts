import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！
import { MemoModule } from './memo/memo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// この設定により、全てのモジュールからTypeORMの機能を呼び出せるようになる．