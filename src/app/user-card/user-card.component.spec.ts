import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let userCardInput = { "id": 126, "first_name": "Roy", "last_name": "Russell", "username": "rrussell1", "email": "rrussell1@arstechnica.com", "city": "Jatibonico", "country": "Cuba", "fav_color": "#6c71fb", "blog": "http://mapy.cz/dolor/morbi/vel/lectus.xml?ligula=adipiscing&in=molestie&lacus=hendrerit&curabitur=at&at=vulputate&ipsum=vitae&ac=nisl&tellus=aenean&semper=lectus&interdum=pellentesque&mauris=eget&ullamcorper=nunc&purus=donec&sit=quis&amet=orci&nulla=eget&quisque=orci&arcu=vehicula&libero=condimentum&rutrum=curabitur&ac=in&lobortis=libero&vel=ut&dapibus=massa&at=volutpat&diam=convallis&nam=morbi&tristique=odio&tortor=odio&eu=elementum", "title": "IV" }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = userCardInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
