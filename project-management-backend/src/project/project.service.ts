import { Injectable } from '@nestjs/common';
import  {InjectRepository} from '@nestjs/typeorm' ; 
import {Repository} from 'typeorm' ;
import {Project} from'./project';

@Injectable()
export class ProjectService {

constructor  (
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
) {}

async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
}

async findOne(id:number) : Promise<Project>{
    return this.projectRepository.findOne(id);

}

async create(projectData: Partial<Project>): Promise<Project> {
    const project = this.projectRepository.create(projectData); 
    return this.projectRepository.save(project);
}

async update(id:number , projectData:Partial<Project> ) : Promise<Project> {
    await this.projectRepository.update(id, projectData);
    return this.projectRepository.findOne(id); 
}

async remove(id:number) : Promise<void> {
await this.projectRepository.delete(id);
}

}
