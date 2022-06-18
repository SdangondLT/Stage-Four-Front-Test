import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app-core/store/models/app.model';
import { Store } from '@ngrx/store';
import { storePersonalData } from '@app-core/store/actions/personal-data.action';
import { PersonalInformationInterface } from '@app-models/personal-information.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  personalInformationForm: FormGroup;
  personalDataSource: PersonalInformationInterface;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.personalDataSource = {
      name: '',
      lastName: '',
      age: '',
      email: '',
      cellphone: ''
    };

    this.personalInformationForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', Validators.required]
    })

    this.store.select("personalData").subscribe(result => {
      this.personalDataSource = result.personalInformation;
      console.log('result de vuelta', this.personalDataSource )

      this.getName.setValue(this.personalDataSource.name)
      this.getLastName.setValue(this.personalDataSource.lastName)
      this.getAge.setValue(this.personalDataSource.age)
      this.getEmail.setValue(this.personalDataSource.email)
      this.getCellphone.setValue(this.personalDataSource.cellphone)
    })
  }

  get getName(){
    return this.personalInformationForm.get("name");
  }

  get getLastName(){
    return this.personalInformationForm.get("lastName");
  }

  get getAge(){
    return this.personalInformationForm.get("age");
  }

  get getEmail(){
    return this.personalInformationForm.get("email");
  }

  get getCellphone(){
    return this.personalInformationForm.get("cellphone");
  }

  ngOnInit(): void {
  }

  savePersonalInformation(personalDatavalue: FormGroup){
    this.store.dispatch(
      storePersonalData({ personalInformation: personalDatavalue.value}
    ))
  }
}
