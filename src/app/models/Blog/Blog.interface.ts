import { Types } from 'mongoose';

export interface IBlog {
  id?: string;
  title: string;
  content: string;
  author?: Types.ObjectId;
  isPublished: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
