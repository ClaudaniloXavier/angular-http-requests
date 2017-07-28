import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SMNUIModule } from 'ng-smn-ui';

import { RouterModule } from '@angular/router';
import { HeroiRoutingModule } from './heroi-routing.module';

import { HeroiInfoComponent } from './info/heroi.info.component';
import { HeroiListaComponent } from './lista/heroi.lista.component';

@NgModule({
    imports: [
        CommonModule,
        SMNUIModule,
        FormsModule,
        HeroiRoutingModule,
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        HeroiInfoComponent,
        HeroiListaComponent
    ]
})
export class HeroiModule { }
