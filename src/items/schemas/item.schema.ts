import * as mongoose from 'mongoose';

export const ItemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    price: Number
});