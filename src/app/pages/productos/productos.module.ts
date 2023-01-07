import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../header/header.module";


@NgModule({
    declarations: [
        ProductosComponent
    ],
    imports: [
        CommonModule,
        ProductosRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class ProductosModule { }
