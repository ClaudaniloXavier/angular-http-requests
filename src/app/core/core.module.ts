import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMNUIModule } from 'ng-smn-ui';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

import { HomeComponent } from './home/home.component';
import { ComercialModule } from 'app/academia/comercial.module';
import { Error404Component } from './error/404/error404.component';

@NgModule({
    imports: [
        CommonModule,
        SMNUIModule,
        ComercialModule,
        CoreRoutingModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [CoreComponent, Error404Component, HomeComponent],
    providers: []
})
export class CoreModule { }
