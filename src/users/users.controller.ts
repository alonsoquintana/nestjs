import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-users.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiTags('users')
    @Get('/users')
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/users')
    @ApiTags('users')
    createUser(@Body() user: createUserDto){
        return this.usersService.createUser(user);
    }
}
