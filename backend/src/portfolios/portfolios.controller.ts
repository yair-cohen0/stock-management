import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Put('add-stock')
  addStock(@Body() updatePortfolioDto: UpdatePortfolioDto) {
    return this.portfoliosService.addStock(updatePortfolioDto);
  }

  @Put('remove-stock')
  removeStock(@Body() updatePortfolioDto: UpdatePortfolioDto) {
    return this.portfoliosService.removeStock(updatePortfolioDto);
  }

  @Get('user/:username')
  getUserData(@Param('username') username: string) {
    return this.portfoliosService.getUserData(username);
  }
}
