import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalDataState } from "../models/personal-data.model";

const personalDataSelector = createFeatureSelector<PersonalDataState>("personalData");

export const getName = createSelector(
  personalDataSelector,
  (state: PersonalDataState) => state.personalInformation.name
);

export const getLastName = createSelector(
  personalDataSelector,
  (state: PersonalDataState) => state.personalInformation.lastName
);

export const getAge = createSelector(
  personalDataSelector,
  (state: PersonalDataState) => state.personalInformation.age
);

export const getEmail = createSelector(
  personalDataSelector,
  (state: PersonalDataState) => state.personalInformation.email
);

export const getCellphone = createSelector(
  personalDataSelector,
  (state: PersonalDataState) => state.personalInformation.cellphone
);

export const getPersonalInformation = createSelector(
  personalDataSelector,
  (state: PersonalDataState) => state.personalInformation
);

