import { Injectable } from '@nestjs/common';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  public async findAll() {
    return this.contactRepository.find();
  }

  public async findOne(id: number) {
    return this.contactRepository.findOneBy({ id });
  }

  public async create(createDto: CreateContactDto) {
    const newContact = new Contact(createDto);
    return await this.contactRepository.save(newContact);
    // return createDto;
  }
}
