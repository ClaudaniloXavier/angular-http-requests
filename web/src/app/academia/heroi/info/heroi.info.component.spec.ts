import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiInfoComponent } from './heroi.info.component';

describe('InfoComponent', () => {
    let component: HeroiInfoComponent;
    let fixture: ComponentFixture<HeroiInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroiInfoComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroiInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
