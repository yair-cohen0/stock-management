import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './portfolio.scheme';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<Portfolio>,
  ) {}

  async createPortfolio(
    createPortfolioDto: CreatePortfolioDto,
  ): Promise<PortfolioDocument> {
    const newPortfolio = new this.portfolioModel(createPortfolioDto);
    return newPortfolio.save();
  }

  async addStock({
    stock,
    userName,
  }: UpdatePortfolioDto): Promise<PortfolioDocument> {
    let portfolio = await this.portfolioModel.findOne({
      userName: userName,
    });
    if (!portfolio) {
      portfolio = await this.createPortfolio({
        stocks: [],
        userName: userName,
      });
    }
    if (!portfolio.stocks.includes(stock)) {
      portfolio.stocks.push(stock);
    }
    return await portfolio.save();
  }

  removeStock(
    updatePortfolioDto: UpdatePortfolioDto,
  ): Promise<PortfolioDocument> {
    return this.portfolioModel.findOneAndUpdate(
      { userName: updatePortfolioDto.userName },
      { $pull: { stocks: updatePortfolioDto.stock } },
      { new: true },
    );
  }

  getUserData(userName: string): Promise<PortfolioDocument> {
    return this.portfolioModel.findOne({ userName });
  }
}
