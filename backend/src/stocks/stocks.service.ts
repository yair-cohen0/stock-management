import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StocksService {
  constructor(private readonly configService: ConfigService) {}

  private axiosClient = axios.create({
    baseURL: 'https://financialmodelingprep.com/api/v3',
    timeout: 10000,
  });

  private API_KEY = `?apikey=${this.configService.get('stocks.apiKey')}`;

  async getStockPrice(symbol: string) {
    const { data } = await this.axiosClient.get(
      `/quote/${symbol}${this.API_KEY}`,
    );
    return data;
  }

  async searchStockByName(
    name: string,
    limit: number = 10,
    exchange: string = 'NASDAQ',
  ) {
    const { data } = await this.axiosClient.get(
      `/search${this.API_KEY}&query=${name}&limit=${limit}&exchange=${exchange}`,
    );
    return data;
  }
}
