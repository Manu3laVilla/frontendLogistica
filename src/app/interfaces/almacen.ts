import { Ciudad } from "./ciudad";
import { Logistica } from "./logistica";

export interface Almacen {
  idAlmacen: number;
  nombreAlmacen: string;
  idLogisticaAlmacen: Logistica;
  idCiudadAlmacen: Ciudad;
}
