import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewvehiculomaritimoRoutingModule } from './newvehiculomaritimo-routing.module';
import { NewvehiculomaritimoComponent } from './newvehiculomaritimo.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../../header/header.module";


@NgModule({
    declarations: [
        NewvehiculomaritimoComponent
    ],
    imports: [
        CommonModule,
        NewvehiculomaritimoRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class NewvehiculomaritimoModule { }
