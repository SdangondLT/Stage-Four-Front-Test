import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResidentialDataState } from "../models/residential-data.model";

const residentialDataSelector = createFeatureSelector<ResidentialDataState>("residentialData");

export const getAddress = createSelector(
  residentialDataSelector,
  (state: ResidentialDataState) => state.residentialInformation.address
);

export const getNeighborhood = createSelector(
  residentialDataSelector,
  (state: ResidentialDataState) => state.residentialInformation.neighborhood
);

export const getApartmentNumber = createSelector(
  residentialDataSelector,
  (state: ResidentialDataState) => state.residentialInformation.apartmentNumber
);

export const getCity = createSelector(
  residentialDataSelector,
  (state: ResidentialDataState) => state.residentialInformation.city
);

export const getResidentialInformation = createSelector(
  residentialDataSelector,
  (state: ResidentialDataState) => state.residentialInformation
);

