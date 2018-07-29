import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { detectChanges } from '../../node_modules/@angular/core/src/render3';
import User from './interfaces/user';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AutocompleteComponent,
        UserCardComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should properly set selectedUser property after calling userSelected', () => {
    // arrange
    let user: User = { "id": 126, "first_name": "Roy", "last_name": "Russell", "username": "rrussell1", "email": "rrussell1@arstechnica.com", "city": "Jatibonico", "country": "Cuba", "fav_color": "#6c71fb", "blog": "http://mapy.cz/dolor/morbi/vel/lectus.xml?ligula=adipiscing&in=molestie&lacus=hendrerit&curabitur=at&at=vulputate&ipsum=vitae&ac=nisl&tellus=aenean&semper=lectus&interdum=pellentesque&mauris=eget&ullamcorper=nunc&purus=donec&sit=quis&amet=orci&nulla=eget&quisque=orci&arcu=vehicula&libero=condimentum&rutrum=curabitur&ac=in&lobortis=libero&vel=ut&dapibus=massa&at=volutpat&diam=convallis&nam=morbi&tristique=odio&tortor=odio&eu=elementum", "title": "IV" };

    // act
    component.userSelected(user);

    // assert
    expect(component.selectedUser).toEqual(user);

  });
});
