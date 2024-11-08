import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  fullname: string;

  @ValidateIf((o) => !o.phone) // Validate if phone is empty or undefined
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  country: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  message: string;
}
