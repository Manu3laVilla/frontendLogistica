import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenesRoutingModule } from './almacenes-routing.module';
import { AlmacenesComponent } from './almacenes.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../header/header.module";


@NgModule({
    declarations: [
        AlmacenesComponent
    ],
    imports: [
        CommonModule,
        AlmacenesRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class AlmacenesModule { }
