import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomBaseEntity } from '#src/common/base-entity/base.entity';

@Entity()
export class Ground extends CustomBaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: false })
  description: string;

  @Column({ nullable: false })
  category: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  timetable: string;

  @Column({ nullable: false, default: 0 })
  rating: number;

  @Column({ nullable: false })
  longitude: string;

  @Column({ nullable: false })
  latitude: string;

  @Column({ nullable: false, default: 0 })
  price: number;

  // @ManyToOne(() => AssetEntity, {
  //   nullable: true,
  //   onDelete: 'SET NULL',
  // })
  // @JoinColumn({ name: 'image' })
  // readonly image?: AssetEntity;

  image?: string;
}
