import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomBaseEntity } from '#src/common/base-entity/base.entity';

@Entity('events')
export class Event extends CustomBaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false, default: 0 })
  price: number;

  @Column({ nullable: true })
  beginningAt?: Date;

  @Column({ nullable: true })
  endingAt?: Date;

  // @OneToOne(() => AssetEntity, {
  //   nullable: true,
  //   onDelete: 'SET NULL',
  // })
  // @JoinColumn({ name: 'image' })
  // image?: AssetEntity;

  image?: string;

  @Column({ nullable: false })
  category: string;
}
