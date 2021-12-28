import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Company } from "./Company";

@Entity()
export class Service {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column({ name: "company_id" })
  company_id: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: "company_id" })
  company: Company;

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
