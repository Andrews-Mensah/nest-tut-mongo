import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemsSchema } from './schemas/item.schema'; 

@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemsSchema}])],
  controllers: [ItemsController],
  providers: [ ItemsService],
})
export class ItemsModule {}