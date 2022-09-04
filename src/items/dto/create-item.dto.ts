import { IsString, IsNotEmpty, MaxLength, Min, IsInt } from 'class-validator' 
import { Type } from 'class-transformer'
export class CreateItemDto {
  // id: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}