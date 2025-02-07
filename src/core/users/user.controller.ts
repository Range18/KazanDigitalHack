import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '#src/core/users/user.service';
import { ApiTags } from '@nestjs/swagger';
import { type UserRequest } from '#src/common/types/user-request.type';
import { User } from '#src/common/decorators/User.decorator';
import { AuthGuard } from '#src/common/decorators/guards/auth-guard.decorator';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.formatToRdo(await this.userService.find({}));
  }

  @AuthGuard()
  @Get('me')
  async getUserMe(@User() user: UserRequest) {
    return this.userService.formatToRdo(
      await this.userService.findOne({
        where: { id: user.id },
      }),
    );
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.formatToRdo(
      await this.userService.findOne(
        {
          where: { id },
        },
        true,
      ),
    );
  }
}
