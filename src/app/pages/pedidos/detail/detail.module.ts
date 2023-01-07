import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../../header/header.module";


@NgModule({
    declarations: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        DetailRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class DetailModule { }
