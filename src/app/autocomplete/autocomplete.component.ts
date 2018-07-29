import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutocompleteService } from './autocomplete.service';
import User from '../interfaces/user';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Output() userSelected = new EventEmitter();
  displayResults = false;
  userResults: User[] = [];
  searchText = new FormControl('');
  constructor(private autocompleteService: AutocompleteService) {
  }

  ngOnInit() {
    this.searchText.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => this.autocompleteService.searchUser(term))
    ).subscribe(result => {
      this.userResults = result;
    });
  }

  selectUser(user) {
    this.userSelected.emit(user);
    this.userResults = [];
    this.searchText.setValue('');
  }


}
