import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StockInfo, StockPrice } from './stocks.type';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('price/:symbol')
  async getStockPrice(@Param('symbol') symbol: string): Promise<StockPrice> {
    try {
      return await this.stocksService.getStockPrice(symbol);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error fetching stock price',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('search/:name')
  async searchStockByName(@Param('name') name: string): Promise<StockInfo[]> {
    try {
      return await this.stocksService.searchStockByName(name);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error searching stock by name',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
