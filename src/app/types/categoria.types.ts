import { Produto } from "./produto.types";

export type CategoriaType = { 
    id : number,
    categoria : string,
    produtos : Produto[],	
};

