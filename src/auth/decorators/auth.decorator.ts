import { applyDecorators, UseGuards } from '@nestjs/common';
import { RoleProtected } from './role-protected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ValidRoles } from './../interfaces/valid-roles';
import { UserRoleGuard } from './../guards/user-role/user-role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    ApiBearerAuth('access-token'),
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
