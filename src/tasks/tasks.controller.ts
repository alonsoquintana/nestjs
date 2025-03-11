import { Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query
} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { query } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {
    constructor(private tasksService: TasksService) {}

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTasks(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id));
    }
    
    @Post()
    @ApiOperation({summary: 'Create a task'})
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    @Patch()
    UpdateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}
