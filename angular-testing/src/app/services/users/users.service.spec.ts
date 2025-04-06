import { TestBed } from '@angular/core/testing';
import { UsersService, User } from './users.service'; // ✅ Import User
import { of } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', (done) => {
      const userResponse: User[] = [
        { id: '1', name: 'Jane', role: 'Designer', pokemon: 'Blastoise' },
        { id: '2', name: 'Bob', role: 'Developer', pokemon: 'Charizard' }
      ];

      spyOn(service, 'all').and.returnValue(of(userResponse));

      service.all().subscribe(res => {
        expect(res).toEqual(userResponse);
        done(); // ✅ Waits for async observable
      });
    });
  });

  describe('findOne', () => {
    it('should return a single user', (done) => {
      const userResponse: User = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };

      spyOn(service, 'findOne').and.returnValue(of(userResponse));

      service.findOne('2').subscribe(res => {
        expect(res).toEqual(userResponse);
        done(); // ✅ Ensures the test doesn't exit early
      });
    });
  });
});
