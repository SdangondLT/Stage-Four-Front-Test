import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { personalDataReducer } from "@app-core/store/reducers/personal-data.reducer";
import { residentialDataReducer } from "./reducers/residential-data.reducer";

export const reducers: ActionReducerMap<AppState> = {
  personalData: personalDataReducer,
  residentialData: residentialDataReducer
};
