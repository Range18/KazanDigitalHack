import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomBaseEntity } from '#src/common/base-entity/base.entity';
import { Point } from '#src/core/points/entities/point.entity';

@Entity('paths')
export class Path extends CustomBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @OneToMany(() => Point, (point) => point.path, { nullable: true })
  points: Point[];
}
