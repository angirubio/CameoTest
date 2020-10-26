export class Chat {
    public mensaje_id:number
    public usuario_id:number
    public receptor_id:number
    public mensaje:string

    constructor(mensaje_id?:number,usuario_id?:number,receptor_id?:number,mensaje?:string)
    {
        this.mensaje_id = mensaje_id;
        this.usuario_id = usuario_id;
        this.receptor_id = receptor_id;
        this.mensaje = mensaje;
    }
}