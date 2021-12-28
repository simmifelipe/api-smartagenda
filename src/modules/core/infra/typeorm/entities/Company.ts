import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

import { Address } from "./Address";

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
  address_id: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

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