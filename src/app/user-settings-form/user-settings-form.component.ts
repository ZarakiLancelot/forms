import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  sourceUserSettings: UserSettings = {
    name: 'Edwin',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'He aquí algunas notas...',
    password: '',
    color: '',
    date: '',
  };

  userSettings: UserSettings = { ...this.sourceUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

}
