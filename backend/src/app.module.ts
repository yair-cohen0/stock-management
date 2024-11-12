import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';
import stocksConfig from './config/stocks';
import baseConfig from './config/base';
import mongoDbConfig from './config/mongoDb';
import { MongooseConnectionModule } from './mongoose/mongoose.module';
import { PortfoliosModule } from './portfolios/portfolios.module';

@Module({
  imports: [
    StocksModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, stocksConfig, mongoDbConfig],
    }),
    MongooseConnectionModule,
    PortfoliosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
