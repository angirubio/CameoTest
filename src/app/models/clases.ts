export class Clases {
    public clases_id: number
    public titulo: string 
    public descripcion: string 
    public precio: number
    public tema: string
    public habilidad: string
    public fecha: Date
    public plataforma: string
    public foto: string
    public usuario_id: number

    constructor(clases_id?:number,titulo?:string,descripcion?:string,precio?:number,tema?:string,habilidad?:string, fecha?:Date, plataforma?:string, foto?:string, usuario_id?: number)
    {
        this.clases_id = clases_id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tema = tema;
        this.habilidad = habilidad;
        this.fecha = fecha;
        this.plataforma = plataforma;
        this.foto = foto;
        this.usuario_id = usuario_id;
    }

}
