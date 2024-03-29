"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// app.module.ts
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./project.entity"); // Import your entity
const project_service_1 = require("./project.service"); // Import your service
const project_controller_1 = require("./project.controller"); // Import your controller
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'Mohcine',
                password: 'Mohcine',
                database: 'project_management',
                entities: [project_entity_1.Project],
                synchronize: true
            }),
            typeorm_1.TypeOrmModule.forFeature([project_entity_1.Project]),
        ],
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService],
    })
], AppModule);
exports.AppModule = AppModule;
