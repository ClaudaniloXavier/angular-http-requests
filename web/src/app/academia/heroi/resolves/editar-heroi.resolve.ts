import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HeroiService } from 'app/academia/heroi/heroi.service';

@Injectable()
export class EditarHeroiResolve implements Resolve<any> {

    constructor(private heroiService: HeroiService) {}

    resolve(route: ActivatedRouteSnapshot) {
        let obj = route.params.id;
        return this.heroiService.listarHeroiPorId(obj);
    }
}
