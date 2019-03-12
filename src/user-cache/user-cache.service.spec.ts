import { Test, TestingModule } from '@nestjs/testing';
import { UserCacheService } from './user-cache.service';
import { CacheModule, CACHE_MANAGER } from '@nestjs/common';
import { UserCacheModule } from './user-cache.module';

describe('UserCacheService', () => {
  let service: UserCacheService;
  let cacheManager: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register({}), UserCacheModule],
    }).compile();

    service = module.get<UserCacheService>(UserCacheService);
    cacheManager = module.get<any>(CACHE_MANAGER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('cache manager should be available', () => {
    expect(cacheManager).toBeDefined();
  });
});
