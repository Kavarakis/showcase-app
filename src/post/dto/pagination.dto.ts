import { Type } from 'class-transformer';
import { IsDefined, IsInt } from 'class-validator';

export class PaginationDto {
  @IsDefined({ message: 'limit param needs to be defined' })
  @Type(() => Number)
  @IsInt({ message: 'limit param needs to be number' })
  limit: Number;
}
