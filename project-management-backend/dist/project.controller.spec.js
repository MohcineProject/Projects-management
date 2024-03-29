"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const project_controller_1 = require("./project.controller");
const project_service_1 = require("./project.service");
describe('ProjectController', () => {
    let controller;
    let service;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            controllers: [project_controller_1.ProjectController],
            providers: [
                {
                    provide: project_service_1.ProjectService,
                    useValue: {
                        // Mock the methods of the service that the controller uses
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        create: jest.fn(),
                        update: jest.fn(),
                        remove: jest.fn(),
                    },
                },
            ],
        }).compile();
        controller = module.get(project_controller_1.ProjectController);
        service = module.get(project_service_1.ProjectService);
    }));
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
