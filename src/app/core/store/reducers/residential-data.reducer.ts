import { Action, createReducer, on } from "@ngrx/store";
import { storeResidentialData } from "@app-core/store/actions/residential-data.action";
import { ResidentialDataState } from "@app-core/store/models/residential-data.model";

const initialState: ResidentialDataState = {
  residentialInformation: {
    address: '',
    neighborhood: '',
    apartmentNumber: '',
    city: ''
  }
};

const _residentialDataReducer = createReducer(
  initialState,
  on(storeResidentialData, (state, { residentialInformation }) => ({
    ...state,
    residentialInformation: residentialInformation
  }))
);

export function residentialDataReducer(state: ResidentialDataState, action: Action) {
  return _residentialDataReducer(state, action);
}
