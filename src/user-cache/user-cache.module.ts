import { Module, CacheModule } from '@nestjs/common';
import { UserCacheService } from './user-cache.service';

@Module({
  imports: [CacheModule],
  // @alt: imports: [forwardRef(() => CacheModule)],
  providers: [UserCacheService],
  exports: [UserCacheService],
})
export class UserCacheModule {}
