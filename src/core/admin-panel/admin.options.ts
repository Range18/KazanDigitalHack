import { authenticate } from '#src/core/admin-panel/admin-authenticate';
import { UserEntity } from '#src/core/users/entity/user.entity';
import { adminConfig } from '#src/common/configs/admin.config';
import { Section } from '#src/core/sections/entities/section.entity';
import { Ground } from '#src/core/grounds/entities/ground.entity';
import { Event } from '#src/core/events/entities/event.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

export const adminOptions = {
  adminJsOptions: {
    rootPath: '/admin',
    resources: [UserEntity, Section, Ground, Event, AssetEntity],
  },
  auth: {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: adminConfig.adminPanelSecret,
  },
  sessionOptions: {
    resave: true,
    saveUninitialized: true,
    secret: adminConfig.adminPanelSecret,
  },
};
