import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroiListaComponent } from './lista/heroi.lista.component';
import { HeroiInfoComponent } from './info/heroi.info.component';

import { HeroiService } from './heroi.service';
import { CoreComponent } from '../../core/core.component';

const routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: 'meus-herois',
                children: [
                    {
                        path: '',
                        component: HeroiListaComponent,
                    },
                    {
                        path: 'novo',
                        component: HeroiInfoComponent,
                    },
                    {
                        path: ':id',
                        component: HeroiInfoComponent,
                    }
                ]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        HeroiService
    ]
})

export class HeroiRoutingModule {}

