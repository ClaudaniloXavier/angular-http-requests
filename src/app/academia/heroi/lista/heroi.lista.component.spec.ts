import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEmpresarialListaComponent } from './grupo-empresarial.lista.component';

describe('GrupoEmpresarialPesquisaComponentt', () => {
    let component: GrupoEmpresarialListaComponent;
    let fixture: ComponentFixture<GrupoEmpresarialListaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GrupoEmpresarialListaComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GrupoEmpresarialListaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
