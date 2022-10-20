import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Lista } from "../entities/lista.entity";


@Injectable()
export class ListaService {
    constructor(
        @InjectRepository(Lista)
        private listaRepository: Repository<Lista>
    ) { }
    async findAll(): Promise<Lista[]> {
        return await this.listaRepository.find({});
    }
    async findById(id: number): Promise<Lista> {
        const lista = await this.listaRepository.findOne({
            where: {
                id,
            },
        });
        if (!lista)
            throw new HttpException('Lista não encontrada', HttpStatus.NOT_FOUND);
        return lista;
    }
    async findByTitulo(titulo: string): Promise<Lista[]> {
        return await this.listaRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`),
            },
        });
    }
    async create(lista: Lista): Promise<Lista> {
        return await this.listaRepository.save(lista);
    }
    async update(lista: Lista): Promise<Lista> {
        const buscarLista = await this.findById(lista.id);

        if (!buscarLista || !lista.id)
            throw new HttpException('Lista não encontrada!', HttpStatus.NOT_FOUND);

        return await this.listaRepository.save(lista);
    }
    async delete(id: number): Promise<DeleteResult>{
        const buscarLista = await this.findById(id);

        if(!buscarLista)
        throw new HttpException('Lista não encontrada!', HttpStatus.NOT_FOUND);
        return await this.listaRepository.delete(id);
    }





}