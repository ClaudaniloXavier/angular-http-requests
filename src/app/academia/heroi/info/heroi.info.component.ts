import { Component, AfterViewInit, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UiToolbarService, UiSnackbar } from 'ng-smn-ui';
import { HeroiService } from 'app/academia/heroi/heroi.service';
import { Heroi } from '../hero';

@Component({
    selector: 'heroi-info',
    templateUrl: './heroi.info.component.html',
    styleUrls: ['./heroi.info.component.scss']
})
export class HeroiInfoComponent implements AfterViewInit, OnDestroy, OnInit {
    heroi: Heroi = new Heroi();
    cores: any;
    poderes: any;
    novoCadastro: boolean;
    carregando = true;
    salvando: boolean;

    constructor(
        private toolbarService: UiToolbarService,
        private heroiService: HeroiService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        if (this.route.snapshot.params.id) {
            this.heroi = this.route.snapshot.data['herois'][0];
            this.carregando = false;
        }

        this.listaCor();
        this.listaPoder();
    }

    ngAfterViewInit() {
        if (this.route.snapshot.params['id']) {
            this.toolbarService.set('Alterar herói');
            setTimeout(() => {
                this.novoCadastro = false;
            });
        } else {
            this.toolbarService.set('Novo heroi');
            setTimeout(() => {
                this.novoCadastro = true;
                this.carregando = false;
            });
        }
        this.toolbarService.activateExtendedToolbar();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    confirmar(): void {
        if (this.heroi.id) {
            this.editarHeroi(this.heroi);
        } else {
            this.cadastrarHeroi(this.heroi);
        }
    }

    // Método responsavel por editar um herói;
    editarHeroi(heroi): void {
        let info = heroi;
        this.heroiService.editarHeroi(info)
            .then(res => {
                UiSnackbar.show({
                    text: heroi.nome + ' editado com sucesso'
                });
                this.voltar();
            });
    }

    // Método responsavel por cadastradar um herói;
    cadastrarHeroi(heroi): void {
        let info = heroi;
        this.heroiService.cadastrarHeroi(info)
            .then(res => {
                UiSnackbar.show({
                    text: heroi.nome + ' cadastrado com sucesso'
                });
                this.voltar();
            });
    }

    // Método responsavel por carregar o dropdown de cor;
    listaCor() {
        this.heroiService.listarCor().then(res => {
            this.cores = res;
        });
    }

    // Método responsavel por carregar o dropdown de poderes;
    listaPoder() {
        this.heroiService.listarPoder().then(res => {
            this.poderes = res;
        });
    }

    voltar(): void {
        this.location.back();
    }

}
