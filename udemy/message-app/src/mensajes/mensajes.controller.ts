import { Controller, Post,Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import {CreateMensajeDto} from './dto/create-mensaje-dto'
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {

    constructor(
        private mensajesServices:MensajesService
    ){}

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response){
        this.mensajesServices.createMensaje(createMensajeDto).then(
            mensaje =>{
                response.status(HttpStatus.CREATED).json(mensaje)
            }
        ).catch(
            ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje : 'error en la creacion del mensaje'});
            }
        );
    }

    @Get()
    getAll(@Res() response){
        this.mensajesServices.getAll().then(
            mensajeList =>{
                response.status(HttpStatus.OK).json(mensajeList)
            }
        ).catch(
            ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje : 'error en la optencion de mensajes'});
            }
        );
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje){
        this.mensajesServices.updateMensaje(idMensaje, updateMensajeDto).then(
            mensaje =>{
                response.status(HttpStatus.OK).json(mensaje)
            }
        ).catch(
            ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje : 'error en la edicion de mensajes'});
            }
        );
    }

    @Delete(':id')
    delete( @Res() response, @Param('id') idMensaje){
        this.mensajesServices.deleteMensaje(idMensaje).then(
            mensaje =>{
                response.status(HttpStatus.OK).json(mensaje)
            }
        ).catch(
            ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje : 'error en la eliminacion de mensajes'});
            }
        );
    }
}
