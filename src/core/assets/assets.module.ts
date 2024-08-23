import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from '#src/core/assets/multer-config.service';
import { SectionsModule } from '#src/core/sections/sections.module';
import { EventsModule } from '#src/core/events/events.module';
import { GroundsModule } from '#src/core/grounds/grounds.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssetEntity]),
    MulterModule.registerAsync({ useClass: MulterConfigService }),
    SectionsModule,
    EventsModule,
    GroundsModule,
  ],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
