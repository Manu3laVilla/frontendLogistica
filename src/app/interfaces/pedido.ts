import { Almacen } from "./almacen";
import { Ciudad } from "./ciudad";
import { Cliente } from "./cliente";
import { Logistica } from "./logistica";
import { Producto } from "./producto";
import { Vehiculo } from "./vehiculo";

export interface Pedido {

  idPlan: number;
  idCliente: Cliente;
  idProducto: Producto;
  idLogistica: Logistica;
  idVehiculo: Vehiculo;
  idCiudad: Ciudad;
  idCentro: Almacen;
  cantidad: number;
  costoEnvio: number;
  costoPagar: number;
  fechaRegistro: string;
  fechaEntrega: string;
  guia: string;

}
