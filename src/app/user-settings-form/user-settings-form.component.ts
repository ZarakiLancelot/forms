import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  sourceUserSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: '',
    subscriptionType: '',
    notes: 'He aquí algunas notas...',
    password: '',
    color: '',
    date: '',
  };

  userSettings: UserSettings = { ...this.sourceUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid);
  }

}
