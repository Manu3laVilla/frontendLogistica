import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewclienteRoutingModule } from './newcliente-routing.module';
import { NewclienteComponent } from './newcliente.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderModule } from "../../../header/header.module";


@NgModule({
    declarations: [
        NewclienteComponent
    ],
    imports: [
        CommonModule,
        NewclienteRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class NewclienteModule { }
