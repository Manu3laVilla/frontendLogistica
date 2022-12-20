import { Logistica } from "./logistica";

export interface Producto {
  id: number;
  nombreProducto: string;
  idLogisticaProducto: Logistica;
}
