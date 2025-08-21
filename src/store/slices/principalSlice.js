import { createSlice } from '@reduxjs/toolkit';

export const principalSlice = createSlice({
  name: 'principal',
  initialState: {
     combos: [],
     combo: {},
     isLoading:false,
     fakeId:1
  },
  reducers: {
    startLoading: (state, /* action */ ) => {
       state.isLoading=true
    },
    setCombo:(state,action) =>{
        state.isLoading=false;
        state.combo={...action.payload,fakeId:state.fakeId};
        console.log(action.payload);
        state.combos = [...state.combos,state.combo];
    },
   
  }
});
export const { 
  setCombo,
  startLoading,
 } = principalSlice.actions;