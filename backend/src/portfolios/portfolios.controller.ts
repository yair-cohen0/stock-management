import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { PortfolioDocument } from './portfolio.scheme';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Put('add-stock')
  addStock(
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ): Promise<PortfolioDocument> {
    return this.portfoliosService.addStock(updatePortfolioDto);
  }

  @Put('remove-stock')
  removeStock(
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ): Promise<PortfolioDocument> {
    return this.portfoliosService.removeStock(updatePortfolioDto);
  }

  @Get('user/:userName')
  getUserData(@Param('userName') userName: string): Promise<PortfolioDocument> {
    return this.portfoliosService.getUserData(userName);
  }
}
