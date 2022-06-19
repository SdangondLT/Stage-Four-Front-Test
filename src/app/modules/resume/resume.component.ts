import { Component } from '@angular/core';
import { AppState } from '@app-core/store/models/app.model';
import { getPersonalInformation } from '@app-core/store/selectors/personal-data.selector';
import { getResidentialInformation } from '@app-core/store/selectors/residential-data.selector';
import { PersonalInformationInterface, ResidentialInformationInterface } from '@app-models/personal-information.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  personalDataSource: PersonalInformationInterface;
  residentialDataSource: ResidentialInformationInterface;

  constructor(private store: Store<AppState>) {

    this.personalDataSource = {
      name: '',
      lastName: '',
      age: '',
      email: '',
      cellphone: ''
    };

    this.residentialDataSource = {
      address: '',
      neighborhood: '',
      apartmentNumber: '',
      city: ''
    };

    this.store.select(getPersonalInformation).subscribe((result) => {
      this.personalDataSource = result;
    });

    this.store.select(getResidentialInformation).subscribe((result) => {
      this.residentialDataSource = result;
    })
   }

  ngOnInit(): void {
  }

  editPersonalInformation(personal: PersonalInformationInterface){
    console.log('personal', personal)
    this.personalDataSource = personal;
  }

  editResidentialInformation(residential: ResidentialInformationInterface){
    console.log('residential', residential)
  }
}
