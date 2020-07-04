import { Controller, Get, Post, Query } from '@nestjs/common';
import { MemoService } from './memo.service';

@Controller('memo')
export class MemoController {
  constructor(private readonly service: MemoService) { }

  // GetリクエストでサービスのgetMemoListを呼び出す
  @Get()
  getMemoList() {
    return this.service.getMemoList();
  }

  // PostリクエストでサービスのaddMemoを呼び出す
  @Post()
  addMemo(@Query() query: { name: string, description: string }) {
    return this.service.addMemo(query.name, query.description);
  }
}
