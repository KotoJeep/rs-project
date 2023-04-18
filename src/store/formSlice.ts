import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputs } from '../components/CardPersonal';

interface formSliceState {
  personalCards: FormInputs[];
  searchQuery: string;
}

const initialState: formSliceState = {
  personalCards: [],
  searchQuery: '',
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<FormInputs>) => {
      state.personalCards.push(action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

const { actions, reducer } = formSlice;
export default reducer;
export const { addFormData, setSearchQuery } = actions;
