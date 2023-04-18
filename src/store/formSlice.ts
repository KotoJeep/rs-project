import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputs } from '../components/CardPersonal';

interface formSliceState {
  personalCards: FormInputs[];
  inputValue: string;
}

const initialState: formSliceState = {
  personalCards: [],
  inputValue: '',
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<FormInputs>) => {
      state.personalCards.push(action.payload);
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

const { actions, reducer } = formSlice;
export default reducer;
export const { addFormData, setInputValue } = actions;
