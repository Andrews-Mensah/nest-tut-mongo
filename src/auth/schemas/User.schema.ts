import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    displayName: String,
    email: String,
});