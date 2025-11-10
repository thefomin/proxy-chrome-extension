import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { CreateProxyDto } from './dto/create-proxy.dto';
import { Auth } from '@/shared/auth.decorator';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProxy(@Body() dto: CreateProxyDto) {
    return this.proxyService.createProxy(dto);
  }

  @Auth()
  @Get()
  @HttpCode(HttpStatus.OK)
  public async getAllProxy() {
    return this.proxyService.getAllProxy()
  }

  @Auth()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async getProxyById(@Param('id') id: string){
    return this.proxyService.getProxyById(id)
  }

}