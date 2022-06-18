import { PersonalDataState } from "@app-core/store/models/personal-data.model";
import { ResidentialDataState } from "./residential-data.model";

export interface AppState {
  personalData: PersonalDataState;
  residentialData: ResidentialDataState;
}
