import { createAction, props } from "@ngrx/store";
import { ResidentialInformationInterface } from "@app-models/personal-information.model";

export const storeResidentialData = createAction(
  "[Residential Data] Store residential information",
  props<{ residentialInformation: ResidentialInformationInterface }>()
);
