import { PersonalDataState } from "@app-core/store/models/personal-data.model";
import { Action, createReducer, on } from "@ngrx/store";
import { storePersonalData } from "@app-core/store/actions/personal-data.action";

const initialState: PersonalDataState = {
  personalInformation: {
    name: '',
    lastName: '',
    age: '',
    email: '',
    cellphone: ''
  }
};

const _personalDataReducer = createReducer(
  initialState,
  on(storePersonalData, (state, { personalInformation }) => ({
    ...state,
    personalInformation: personalInformation
  }))
);

export function personalDataReducer(state: PersonalDataState, action: Action) {
  return _personalDataReducer(state, action);
}
