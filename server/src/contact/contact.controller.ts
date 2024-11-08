import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  async getAll() {
    return this.contactService.findAll();
  }

  @Get('/:id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.findOne(id);
  }

  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }
}
