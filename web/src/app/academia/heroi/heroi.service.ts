import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from 'environments/environment';
import {Heroi} from './hero';

@Injectable()
export class HeroiService {
    public headers;

    constructor(
        private http: Http
    ) {}

    listarHerois(filter) {
        this.loadHeaders();
        let searchParams = new URLSearchParams();
        searchParams.append('pesquisa', filter.filtro);

        return this
            .http
            .get(`${environment.API_HEROIS}heroi`, new RequestOptions({headers: this.headers, params: searchParams}))
            .map(res => res.json());
    }

    listarHeroiPorId(id: number): Promise<Heroi> {
        this.loadHeaders();
        return this
            .http
            .get(`${environment.API_HEROIS}heroi/${id}`, new RequestOptions({headers: this.headers}))
            .toPromise()
            .then(res => res.json());
    }

    cadastrarHeroi(heroi): Promise<Heroi> {
        this.loadHeaders();
        return this
            .http
            .post(`${environment.API_HEROIS}heroi`, JSON.stringify(heroi), new RequestOptions({headers: this.headers}))
            .toPromise()
            .then(res => res.json());
    }

    editarHeroi(heroi): Promise<Heroi> {
        this.loadHeaders();
        return this
            .http
            .put(`${environment.API_HEROIS}heroi/${heroi.id}`, JSON.stringify(heroi), new RequestOptions({headers: this.headers}))
            .toPromise()
            .then(() => heroi);
    }

    deletarHeroi(heroi): Promise<void> {
        this.loadHeaders();
        return this
            .http
            .delete(`${environment.API_HEROIS}heroi/${heroi.id}`, new RequestOptions({headers: this.headers}))
            .toPromise()
            .then(() => null);
    }

    loadHeaders() {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Option': 'ADqIh1Gdv9w',
            // 'Authentication': this.cookie.getCookie(environment.TOKEN_COOKIE_NAME)
        });
    }
}
