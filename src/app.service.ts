import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>){

  }

  getAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['pets']
    }); // Select * From User Join with pet
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(id); // select * from user where id === id
      return user;
    } catch (error) {
      // handle error
      throw error;
    }
    return 
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name }); // const newUser = new user(); newUser.name = name
    return this.usersRepository.save(newUser); // insert
  }
  
  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = name;
    return this.usersRepository.save(user); // update
  }
  
  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);
    return this.usersRepository.remove(user); // delete from user
  }

  // customQuery(): any {
  //   return this.usersRepository.createQueryBuilder("user").select("name");
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
