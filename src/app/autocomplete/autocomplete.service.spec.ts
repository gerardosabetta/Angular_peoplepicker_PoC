import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AutocompleteService } from './autocomplete.service';
import User from '../interfaces/user';

describe('AutocompleteService', () => {
  let service: AutocompleteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutocompleteService]
    });
    service = TestBed.get(AutocompleteService);
    httpMock = TestBed.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  }) 
  
  it('should be created', inject([AutocompleteService], (service: AutocompleteService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET data from the endpoint', () => {
    let mockedResponse: User[] = [{ "id": 222, "first_name": "Louise", "last_name": "Smith", "username": "lsmith17", "email": "lsmith17@hubpages.com", "city": "Hassi Messaoud", "country": "Algeria", "fav_color": "#0e7b42", "blog": "http://apple.com/vestibulum/quam/sapien/varius/ut.json?in=ultrices&faucibus=phasellus&orci=id&luctus=sapien&et=in&ultrices=sapien&posuere=iaculis&cubilia=congue&curae=vivamus&duis=metus&faucibus=arcu&accumsan=adipiscing&odio=molestie&curabitur=hendrerit&convallis=at&duis=vulputate&consequat=vitae&dui=nisl&nec=aenean&nisi=lectus&volutpat=pellentesque&eleifend=eget&donec=nunc&ut=donec&dolor=quis&morbi=orci&vel=eget&lectus=orci&in=vehicula&quam=condimentum&fringilla=curabitur&rhoncus=in&mauris=libero&enim=ut&leo=massa&rhoncus=volutpat&sed=convallis&vestibulum=morbi&sit=odio&amet=odio&cursus=elementum&id=eu&turpis=interdum&integer=eu&aliquet=tincidunt&massa=in&id=leo&lobortis=maecenas&convallis=pulvinar&tortor=lobortis&risus=est&dapibus=phasellus&augue=sit&vel=amet&accumsan=erat&tellus=nulla&nisi=tempus&eu=vivamus&orci=in&mauris=felis&lacinia=eu&sapien=sapien&quis=cursus&libero=vestibulum&nullam=proin&sit=eu&amet=mi&turpis=nulla&elementum=ac&ligula=enim", "title": "IV" }, { "id": 215, "first_name": "Angela", "last_name": "Smith", "username": "asmith29", "email": "asmith29@amazon.co.uk", "city": "Kuchinarai", "country": "Thailand", "fav_color": "#ac3aeb", "blog": "https://seesaa.net/sit/amet/sem/fusce.png?tincidunt=id&in=lobortis&leo=convallis&maecenas=tortor&pulvinar=risus&lobortis=dapibus&est=augue&phasellus=vel&sit=accumsan&amet=tellus&erat=nisi&nulla=eu&tempus=orci&vivamus=mauris&in=lacinia&felis=sapien&eu=quis&sapien=libero&cursus=nullam&vestibulum=sit&proin=amet&eu=turpis&mi=elementum&nulla=ligula&ac=vehicula&enim=consequat&in=morbi&tempor=a&turpis=ipsum&nec=integer&euismod=a&scelerisque=nibh&quam=in&turpis=quis", "title": "Sr" }]
    service.searchUser('smith').subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockedResponse);
    });

    const req = httpMock
      .expectOne(`${service.URL}/users?searchText=smith`);

    expect(req.request.method).toBe('GET');
    req.flush(mockedResponse);

  });
});
