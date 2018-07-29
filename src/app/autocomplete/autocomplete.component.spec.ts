import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import User from '../interfaces/user';
import { AutocompleteService } from './autocomplete.service';
import { of } from '../../../node_modules/rxjs/internal/observable/of';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;
  let service: AutocompleteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AutocompleteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should use userSelected(event emitter) upon using select user', () => {
    // arange
    let user: User = { "id": 126, "first_name": "Roy", "last_name": "Russell", "username": "rrussell1", "email": "rrussell1@arstechnica.com", "city": "Jatibonico", "country": "Cuba", "fav_color": "#6c71fb", "blog": "http://mapy.cz/dolor/morbi/vel/lectus.xml?ligula=adipiscing&in=molestie&lacus=hendrerit&curabitur=at&at=vulputate&ipsum=vitae&ac=nisl&tellus=aenean&semper=lectus&interdum=pellentesque&mauris=eget&ullamcorper=nunc&purus=donec&sit=quis&amet=orci&nulla=eget&quisque=orci&arcu=vehicula&libero=condimentum&rutrum=curabitur&ac=in&lobortis=libero&vel=ut&dapibus=massa&at=volutpat&diam=convallis&nam=morbi&tristique=odio&tortor=odio&eu=elementum", "title": "IV" }
    spyOn(component.userSelected, 'emit');

    // act
    component.selectUser(user)
    fixture.detectChanges();

    // assert 
    expect(component.userSelected.emit).toHaveBeenCalledWith(user);
  });

  it('should use searchUser method in service', <any>fakeAsync(() => {
    // arrange
    let user: User = { "id": 126, "first_name": "Roy", "last_name": "Russell", "username": "rrussell1", "email": "rrussell1@arstechnica.com", "city": "Jatibonico", "country": "Cuba", "fav_color": "#6c71fb", "blog": "http://mapy.cz/dolor/morbi/vel/lectus.xml?ligula=adipiscing&in=molestie&lacus=hendrerit&curabitur=at&at=vulputate&ipsum=vitae&ac=nisl&tellus=aenean&semper=lectus&interdum=pellentesque&mauris=eget&ullamcorper=nunc&purus=donec&sit=quis&amet=orci&nulla=eget&quisque=orci&arcu=vehicula&libero=condimentum&rutrum=curabitur&ac=in&lobortis=libero&vel=ut&dapibus=massa&at=volutpat&diam=convallis&nam=morbi&tristique=odio&tortor=odio&eu=elementum", "title": "IV" }
    spyOn(service, 'searchUser').and.returnValue(of([user]));

    // act
    component.searchText.setValue('smith');
    tick(300)
    fixture.detectChanges();

    // assert
    expect(service.searchUser).toHaveBeenCalled();
  }))
});
