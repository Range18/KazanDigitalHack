import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomBaseEntity } from '#src/common/base-entity/base.entity';

@Entity()
export class Section extends CustomBaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: true })
  days: string;

  @Column({ nullable: true })
  beginningAt?: Date;

  @Column({ nullable: true })
  endingAt?: Date;

  @Column({ nullable: false })
  category: string;

  @Column({ nullable: false, default: 0 })
  price: number;

  // @OneToOne(() => AssetEntity, {
  //   nullable: true,
  //   onDelete: 'SET NULL',
  // })
  // @JoinColumn({ name: 'image' })
  // image?: AssetEntity;

  image?: string;
}
