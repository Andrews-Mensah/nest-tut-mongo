import { Injectable } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import {item} from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<item>){}

    async findAll(): Promise <item[]> {
        return await this.itemModel.find();
    }

   async findOne(id: string):Promise<item>{
        return this.itemModel.findOne({_id:id})
    }

    async create(item:item):Promise<item>{ 
        const newItem = new this.itemModel(item);

        const savedItem = await newItem.save();

        return savedItem;
    }

    async delete(id:string): Promise<string>{
       await this.itemModel.findByIdAndRemove(id);

       return `Item with id: ${id} has been deleted`;
    }

    async update(id: string, item:item): Promise<item>{
        return await this.itemModel.findByIdAndUpdate(id, item, {
            new:true
        });
    }
}
