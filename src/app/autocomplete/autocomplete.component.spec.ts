import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import User from '../interfaces/user';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

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

});
