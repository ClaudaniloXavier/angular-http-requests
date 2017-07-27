import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HeroiService } from '../heroi.service';
import { UiToolbarService, UiSnackbar } from 'ng-smn-ui';
import { Heroi } from '../hero';

@Component({
    selector: 'heroi-lista',
    templateUrl: './heroi.lista.component.html',
    styleUrls: ['./heroi.lista.component.scss'],
})
export class HeroiListaComponent implements AfterViewInit, OnDestroy, OnInit {
    herois: any [];
    filtro: string;
    heroiParaDeletar: any;

    private termosBusca = new Subject<string>();

    constructor (
        private toolbarService: UiToolbarService,
        private heroiService: HeroiService,
    ) { }

    buscar(busca: string): void {
        this.termosBusca.next(busca);
    }

    ngOnInit() {
        this.termosBusca
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                this.listarHerois();
            });
    }

    ngAfterViewInit() {
        this.toolbarService.set('Meus heróis');
        this.toolbarService.activateExtendedToolbar();

        // Lista todos os heróis ao entrar na pagina;
        this.listarHerois();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    // Método para fazer a listagem de heróis;
    listarHerois(): void {
        const filter = {
            filtro: this.filtro || ''
        };
        this.heroiService
            .listarHerois(filter)
            .subscribe((res) => {
                this.herois = res;
            });
    }

    // Método para deletar um heroi da lista de heróis
    deletarHeroi(heroi: Heroi): void {
        this.heroiService.deletarHeroi(heroi)
            .then(() => {
                this.herois = this.herois.filter(obj => obj !== heroi);
                this.listarHerois();

                UiSnackbar.hide();
                UiSnackbar.show({
                    text: heroi.nome + ' excluído com sucesso'
                });
            }, (err) => {
                let error = JSON.parse(err._body);

                if (error.executionCode !== 0) {
                    UiSnackbar.show({
                        text: error.message
                    });
                }
            });
    }

    prepareToDelete(heroi): void {
        this.heroiParaDeletar = heroi;
    }
}
