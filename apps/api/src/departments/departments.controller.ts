import { Controller, Get, Post, Body } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  async findAll() {

    const allDepartment = await this.departmentsService.findAllDepartments();

    console.log('service triggered, find all returns.');
    console.dir(allDepartment);

    return allDepartment;
  }
}