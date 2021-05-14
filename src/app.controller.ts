import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getCities')
  getCities() {
    return [
      {
        name: 'USA',
        children: [
          {
            name: 'NY',
            children: [
              {
                name: 'Queens',
                children: [
                  {
                    name: 'BR',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Mexico',
        children: [
          {
            name: 'Cancun',
            children: [
              {
                name: 'Chupita',
                children: [],
              },
            ],
          },
        ],
      },
    ];
  }
}
