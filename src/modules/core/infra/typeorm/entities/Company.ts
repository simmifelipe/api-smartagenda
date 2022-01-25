import { User } from "@modules/account/infra/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class Company {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}