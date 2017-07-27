import { Component, AfterViewInit, OnDestroy, OnInit, ElementRef } from '@angular/core';
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
    novoCadastro: boolean;
    // carregando = true;
    salvando: boolean;

    constructor(
        private toolbarService: UiToolbarService,
        private heroiService: HeroiService,
        private router: Router,
        private route: ActivatedRoute,
        private element: ElementRef
    ) {}

    ngOnInit(): void {
        if (this.route.snapshot.params.id) {
            this.heroi = this.route.snapshot.data['heroi'];
        }
    }

    ngAfterViewInit() {
        if (this.route.snapshot.params['id']) {
            // this.toolbarService.set('Alterar grupo empresarial');
            // setTimeout(() => {
            //     this.novoCadastro = false;
            // });
            // this.listarPorId();
        } else {
            // this.toolbarService.set('Novo grupo empresarial');
            // setTimeout(() => {
            //     this.novoCadastro = true;
            //     this.carregando = false;
            // })
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

    editarHeroi(heroi): void {

    }

    cadastrarHeroi(heroi): void {

    }
}
