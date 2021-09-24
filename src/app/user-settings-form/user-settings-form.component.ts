import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
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

  singleModel = "On";
  startDate!: Date;
  startTime!: Date;
  userRating = 0;
  maxRating = 10;

  userSettings: UserSettings = { ...this.sourceUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes = new Observable<string[]>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
    this.startTime = new Date();
  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm){
    // console.log('in onSubmit: ', form.value);
    console.log('in onSubmit: ', form.valid);

    if(form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => console.error('error: ', error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Corregir los errores del formulario';
    }
  }

}
