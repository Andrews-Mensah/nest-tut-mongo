import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { Response, Request } from 'express';
import { ItemsService } from './items.service';
import { item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService:ItemsService){

    }
  // @Get()
  // findAll(@Req() req:Request, @Res() res: Response):Response{
  //     return  res.send("this.findAll")
  // }

  @Get()
 findAll(): Promise<item[]> {
    return this.itemsService.findAll()
  }

  // @Post()
  // create(@Body() createItemDto: CreateItemDto, @Req() req:Request, @Res() res: Response):Response{
  //     return res.send({createItemDto})
  // }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<item> {
    return this.itemsService.create(createItemDto)
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<item> {
    return await this.itemsService.findOne(id); 
  }

  @Put(':id')
  updateOne(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id): Promise<string>{
    return this.itemsService.delete(id)
  }
}
