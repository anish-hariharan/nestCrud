/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDTO } from './dto/dto';
import { Student } from './interface/interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  async getStudent(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async getOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }

  async createStudent(data: StudentDTO): Promise<Student> {
    const student = new this.studentModel(data);
    return await student.save();
  }

  async updateStudent(id: string, data: StudentDTO): Promise<Student> {
    // eslint-disable-next-line prettier/prettier
    return await this.studentModel.findByIdAndUpdate({_id: id}, data , {new: true}).exec()
  }

  async deleteStudent(id: string): Promise<Student> {
    return await this.studentModel.findByIdAndDelete({_id: id}).exec()
  }
}
