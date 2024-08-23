import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { backendServer } from '#src/common/configs/config';

export class GetFileRdo {
  readonly id: number;

  readonly name: string;

  readonly mimetype: string;

  readonly url: string;

  readonly updatedAt: Date;

  readonly createAt: Date;

  constructor(file: AssetEntity) {
    this.id = file.id;
    this.name = file.name;
    this.mimetype = file.mimetype;
    this.url = `${backendServer.urlValue}/api/assets/${file.id}/file`;
    this.createAt = file.createdAt;
    this.updatedAt = file.updatedAt;
  }
}
