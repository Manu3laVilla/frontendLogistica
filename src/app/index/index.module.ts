import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MaterialModule } from '../material.module';
import { HeaderModule } from "../header/header.module";


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        MaterialModule,
        HeaderModule
    ]
})
export class IndexModule { }
