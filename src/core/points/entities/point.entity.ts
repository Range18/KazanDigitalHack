import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Path } from '#src/core/paths/entities/path.entity';

@Entity('points')
export class Point {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @Column({ nullable: false })
  longitude: string;

  @Column({ nullable: false })
  latitude: string;

  @Column({ nullable: true })
  address?: string;

  @ManyToOne(() => Path, (path) => path.points, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  path: Path;
}
