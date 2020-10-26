export class Usuario {
    public usuario_id:number
    public nombre:string
    public apellido:string
    public nombre_usuario:string
    public email:string
    public contrasena:string
    public fotousuario:string
    public status:string

    constructor(usuario_id?:number,nombre?:string,apellido?:string,nombre_usuario?:string,email?:string,contrasena?:string,fotousuario?:string,status?:string)
    {
        this.usuario_id = usuario_id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombre_usuario = nombre_usuario;
        this.email = email;
        this.contrasena = contrasena;
        this.fotousuario = fotousuario;
        this.status = status;
    }
}