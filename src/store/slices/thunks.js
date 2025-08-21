import { startLoading,setCombo } from "./principalSlice"

export const nuevaEntrada = (entrada) => {
    return (dispatch,getState) => {
        dispatch(startLoading());
        dispatch(setCombo(entrada));

    }
}