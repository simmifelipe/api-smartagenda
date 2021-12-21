import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Company } from "../../company/entities/Company";

@Entity()
export class Service {

  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  company_id: string;

  @ManyToOne(() => Company)
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
