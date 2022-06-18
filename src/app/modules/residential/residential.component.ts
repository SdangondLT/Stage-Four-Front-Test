import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storeResidentialData } from '@app-core/store/actions/residential-data.action';
import { AppState } from '@app-core/store/models/app.model';
import { ResidentialInformationInterface } from '@app-models/personal-information.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent {
  residentialInformationForm: FormGroup;
  residentialDataSource: ResidentialInformationInterface;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.residentialDataSource = {
      address: '',
      neighborhood: '',
      apartmentNumber: '',
      city: ''
    };
    this.residentialInformationForm = this.formBuilder.group({
      address: ['', Validators.required],
      neighborhood: ['', Validators.required],
      apartmentNumber: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.store.select("residentialData").subscribe(result => {
      this.residentialDataSource = result.residentialInformation;
      console.log('result de vuelta', this.residentialDataSource )
    })
  }

  get getAddress(){
    return this.residentialInformationForm.get("address");
  }

  get getNeighborhood(){
    return this.residentialInformationForm.get("neighborhood");
  }

  get getApartmentNumber(){
    return this.residentialInformationForm.get("apartmentNumber");
  }

  get getCity(){
    return this.residentialInformationForm.get("city");
  }

  ngOnInit(): void {
  }

  saveResidentialInformation(residentialData: FormGroup){
    console.log('dataResidential', residentialData.value)

    this.store.dispatch(storeResidentialData(
      {
        residentialInformation: residentialData.value
      }
    ))
  }

}