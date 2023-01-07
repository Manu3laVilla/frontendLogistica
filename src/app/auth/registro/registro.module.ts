import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../header/header.module";


@NgModule({
    declarations: [
        RegistroComponent
    ],
    imports: [
        CommonModule,
        RegistroRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class RegistroModule { }
