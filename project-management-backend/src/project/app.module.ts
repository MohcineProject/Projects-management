// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity'; // Import your entity
import { ProjectService } from './project.service'; // Import your service
import { ProjectController } from './project.controller'; // Import your controller

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host : 'localhost' , 
            port : 5432 ,
            username : 'Mohcine' , 
            password : 'Mohcine' , 
            database : 'project_management' , 
            entities: [Project], 
            synchronize: true

        }),
        TypeOrmModule.forFeature([Project]) , 
    ], 
    controllers: [ProjectController], 
    providers: [ProjectService],


})
export class AppModule {



}
