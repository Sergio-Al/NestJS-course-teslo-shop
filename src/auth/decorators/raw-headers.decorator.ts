import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RawHeaders = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest().rawHeaders;
  },
);
