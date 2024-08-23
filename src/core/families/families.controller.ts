import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FamiliesService } from './families.service';
import type { UserRequest } from '#src/common/types/user-request.type';
import { User } from '#src/common/decorators/User.decorator';
import { AuthGuard } from '#src/common/decorators/guards/auth-guard.decorator';
import { UserEntity } from '#src/core/users/entity/user.entity';
import { UserService } from '#src/core/users/user.service';

@Controller('families')
export class FamiliesController {
  constructor(
    private readonly familiesService: FamiliesService,
    private readonly userService: UserService,
  ) {}

  @AuthGuard()
  @Post()
  async create(@User() user: UserRequest) {
    const family = await this.familiesService.save({});

    family.users = [{ id: user.id } as UserEntity];

    return await this.familiesService.save(family);
  }

  @AuthGuard()
  @Get('join/:id')
  async getInFamily(
    @User() user: UserRequest,
    @Param('id') id: number,
    @Query('role') role: string,
  ) {
    const family = await this.familiesService.findOne(
      {
        where: { id },
        relations: { users: true },
      },
      true,
    );

    family.users.push({ id: user.id } as UserEntity);
    await this.userService.updateOne({ where: { id: user.id } }, { role });

    return await this.familiesService.save(family);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.familiesService.findOne({
      where: { id },
      relations: { users: true },
    });
  }
}
