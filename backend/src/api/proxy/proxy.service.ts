import { PrismaService } from '@/infra/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProxyDto } from './dto/create-proxy.dto';

@Injectable()
export class ProxyService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  public async createProxy(dto: CreateProxyDto) {
  let geolocationData: { connectOrCreate?: any } | undefined = undefined;

  if (dto.country || dto.tag || dto.city) {
    geolocationData = {
      connectOrCreate: {
        where: {
          country_tag_city: {  // составной уникальный ключ
            country: dto.country ?? '',
            tag: dto.tag ?? '',
            city: dto.city ?? '',
          },
        },
        create: {
          country: dto.country,
          tag: dto.tag,
          city: dto.city,
        },
      },
    };
  }

  const proxy = await this.prismaService.proxy.create({
    data: {
      proxy: dto.proxy,
      protocol: dto.protocol,
      ip: dto.ip,
      port: dto.port,
      https: dto.https,
      anonymity: dto.anonymity,
      score: dto.score,
      geolocation: geolocationData,
    },
    include: {
      geolocation: true,
    },
  });

  return proxy;
}


  public async getAllProxy(){
   return await this.prismaService.proxy.findMany({
    include: {
      geolocation: true,
    }
   })
  }

  public async getProxyById(id:string){
    const proxy = await this.prismaService.proxy.findUnique({
      where: {id},
      include: {
        geolocation: true
      }
    })

    if(!proxy){
      throw new NotFoundException(
        'Прокси с таким id не существует'
      )
    }

    return proxy
  }
}