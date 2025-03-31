import { Arquivos } from "./arquivos.types";

export type Produto = {
    id: number;
    nome: string;
    valor: number;
    desconto: number;
    estoque: number;
    arquivos: Arquivos[];
};