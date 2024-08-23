import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '#src/core/users/entity/user.entity';

@Entity('families')
export class Family {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(() => UserEntity, (user) => user.family, { nullable: true })
  users?: UserEntity[];
}
