import * as mongoose from 'mongoose';

export interface Todo extends mongoose.Document {
  title: string;
  description: string;
  done: boolean;

}