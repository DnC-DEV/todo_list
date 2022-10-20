import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Lista } from "../entities/lista.entity";
import { ListaService } from "../services/lista.service";


@Controller('/lista')
export class ListaController {
    constructor(private readonly listaService: ListaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Lista[]> {
        return this.listaService.findAll();
    }
    @Get()
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Lista> {
        return this.listaService.findById(id);
    }
    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(
        @Param('titulo')
        titulo: string,
    ): Promise<Lista[]> {
        return this.listaService.findByTitulo(titulo);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body()
        lista: Lista,
    ): Promise<Lista> {
        return this.listaService.update(lista);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        lista: Lista,
    ): Promise<Lista> {
        return this.listaService.update(lista);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number,
    ) {
        return this.listaService.delete(id);
    }
}