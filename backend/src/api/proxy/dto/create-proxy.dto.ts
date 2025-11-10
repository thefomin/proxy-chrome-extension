import { IsString, IsBoolean, IsInt, IsOptional, Min } from 'class-validator';

export class CreateProxyDto {
  @IsString()
  proxy: string;

  @IsString()
  protocol: string;

  @IsString()
  ip: string;

  @IsInt()
  @Min(1)
  port: number;

  @IsBoolean()
  https: boolean;

  @IsString()
  anonymity: string;

  @IsInt()
  @Min(0)
  score: number;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  tag?: string;

  @IsOptional()
  @IsString()
  city?: string;
}
