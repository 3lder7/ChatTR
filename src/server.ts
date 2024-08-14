import express from "express"; //IMPORTA O MÓDULO EXPRESS PARA A CRIAÇÃO DO SERVIDOR
import http from "http";
import {Server} from "socket.io"; //IMPORTANDO SERVER DO SOCKET.IO
import { Application } from "express-serve-static-core";//


class App{
    private app: Application//O APP É DO TIPO APLICATTION DO EXPRESS
    private http : http.Server
    private io: Server

    constructor(){//O QUE É UM CONSTRUCTOR?
        this.app = express();
        this.http = http.createServer(this.app); //PRÓPRIO HTTP DO NODE VINCULADO AO EXPRESS
        this.io = new Server(this.http)//INICIA UMA INSTÂNCIA DO SERVIDOR DO SOCKET.IO PASSANDO O SERVIDOR DO HTTP
    }
    listenServer(){
        this.http.listen(3000, () => console.log("SERVER RODANDO"));
    }//MÉTODO   
}

const app = new App();//INSTÂNCIA CHAMANDO O MÉTODO
app.listenServer();//INICIANDO SERVIDOR


