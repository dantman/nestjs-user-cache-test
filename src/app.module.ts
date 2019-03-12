import { Module } from '@nestjs/common';
import { UserCacheModule } from './user-cache/user-cache.module';

@Module({
  imports: [UserCacheModule],
})
export class AppModule {}
