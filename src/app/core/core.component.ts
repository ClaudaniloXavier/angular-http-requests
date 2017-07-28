import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UiToolbarService } from 'ng-smn-ui';


@Component({
    selector: 'ar-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
    providers: [UiToolbarService]
})
export class CoreComponent implements AfterViewInit, OnInit {
    public title: String;
    public menuOpen: boolean;
    public user;

    constructor (
        private toolbarService: UiToolbarService
    ) {
        this.toolbarService.change.subscribe(res => {
            this.title = res;
        });

        this.user = {
            nome: 'Bruce Wayne',
            tipo: 'Administrador da porra toda',
            cor: '#FFEB3B'
        };
    }

    ngOnInit() {
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
        this.menuOpen = false;
    }

    ngAfterViewInit() {

    }
}
