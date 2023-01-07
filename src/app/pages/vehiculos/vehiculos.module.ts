import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculosComponent } from './vehiculos.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../header/header.module";


@NgModule({
    declarations: [
        VehiculosComponent
    ],
    imports: [
        CommonModule,
        VehiculosRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class VehiculosModule { }
