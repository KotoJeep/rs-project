import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputs } from '../components/CardPersonal';

const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
    personalCards: [] as FormInputs[],
  },
  reducers: {
    addFormData: (state, action: PayloadAction<FormInputs>) => {
      state.personalCards.push(action.payload);
    },
  },
});

const { actions, reducer } = formSlice;
export default reducer;
export const { addFormData } = actions;
