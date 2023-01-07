import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../header/header.module";


@NgModule({
    declarations: [
        ClientesComponent
    ],
    imports: [
        CommonModule,
        ClientesRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class ClientesModule { }
