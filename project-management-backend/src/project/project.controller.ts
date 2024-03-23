
import {Controller, Get, Post, Param, Put, Delete , Body} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project';

@Controller('projects') 
export class ProjectController {
    constructor (private readonly projectService: ProjectService) {}

    @Get()
    findAll(): Promise<Project[]> {
        return this.projectService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Project> {
        return this.projectService.findOne(+id);
    }

    @Post()
    create(@Body() projectData: Partial<Project>) : Promise<Project> {
        return this.projectService.create(projectData);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() projectData:Partial<Project>) : Promise<Project> {
        return this.projectService.update(+id, projectData);
    }

    @Delete('id') 
    remove(@Param('id') id: string) : Promise<void> {
        return this.projectService.remove(+id);
    }
}
