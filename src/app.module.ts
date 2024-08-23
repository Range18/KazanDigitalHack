import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '#src/core/users/user.module';
import { AuthModule } from '#src/core/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '#src/common/configs/database.config';
import { SectionsModule } from '#src/core/sections/sections.module';
import { EventsModule } from '#src/core/events/events.module';
import { GroundsModule } from '#src/core/grounds/grounds.module';
import { AssetsModule } from '#src/core/assets/assets.module';
import { PointsModule } from '#src/core/points/points.module';
import { PathsModule } from '#src/core/paths/paths.module';
import { FamiliesModule } from '#src/core/families/families.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    AuthModule,
    SectionsModule,
    EventsModule,
    GroundsModule,
    AssetsModule,
    PathsModule,
    PointsModule,
    FamiliesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
