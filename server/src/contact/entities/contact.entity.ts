import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';

@Entity({ name: 'get_in_touch_dinh_hoang_viet' })
export class Contact {
  constructor(partial: Partial<Contact>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  @Expose()
  fullname: string;

  @Column()
  @Expose()
  email: string;

  @Column()
  @Expose()
  country: string;

  @Column()
  @Expose()
  companyName: string;

  @Column({ length: 500 })
  @Expose()
  message: string;

  @CreateDateColumn()
  @Expose()
  createdAt: Date;
}
