import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewproductRoutingModule } from './newproduct-routing.module';
import { NewproductComponent } from './newproduct.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../../header/header.module";


@NgModule({
    declarations: [
        NewproductComponent
    ],
    imports: [
        CommonModule,
        NewproductRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class NewproductModule { }
