import { Injectable, Inject, forwardRef, CACHE_MANAGER } from '@nestjs/common';

@Injectable()
export class UserCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: any) {}

  // Alt:
  // constructor(
  //   @Inject(forwardRef(() => CACHE_MANAGER)) private readonly cache: any,
  // ) {}
}
