import { Dispatch } from 'react';
import {
    getBodyStylesByModelYearMake,
    getMakesByYear,
    getModelsByMakeYear,
    getVehicle,
    getYears,
} from "../Services/vehicle";

export const CLEAR_BODY = "CLEAR_BODY";
export const CLEAR_MAKE_MODEL_BODY = "CLEAR_MAKE_MODEL_BODY";
export const CLEAR_MODEL_BODY = "CLEAR_MODEL_BODY";
export const CLEAR_VEHICLE = "CLEAR_VEHICLE";
export const SET_BODYSTYLES_DATA = "SET_BODYSTYLES_DATA";
export const SET_MAKES_DATA = "SET_MAKES_DATA";
export const SET_MODELS_DATA = "SET_MODELS_DATA";
export const SET_SELECTIONS = "SET_SELECTIONS"
export const SET_VEHICLE_DATA = "SET_VEHICLE_DATA";
export const SET_YEAR_DATA = "SET_YEAR_DATA";

export const getYearData = async (dispatch: Dispatch<any>) => {
    const data = await getYears();
    dispatch({ type: SET_YEAR_DATA, data });
};

export const getMakesData = async (dispatch: Dispatch<any>, year: string) => {
    const data = await getMakesByYear(year);
    dispatch({ type: SET_MAKES_DATA, data });
};

export const getModelsData = async (
    dispatch: Dispatch<any>,
    { year, make }: { year: string, make: string }
) => {
    const data = await getModelsByMakeYear(year, make);
    dispatch({ type: SET_MODELS_DATA, data });
};

export const getBodyStylesData = async (
    dispatch: Dispatch<any>,
    { year, make, model }: { year: string, make: string, model: string }
) => {
    const data = await getBodyStylesByModelYearMake(year, make, model);
    dispatch({ type: SET_BODYSTYLES_DATA, data });
};

export const getVehicleData = async (
    dispatch: Dispatch<any>,
    { year, make, model, body }: { year: string, make: string, model: string, body: string }
) => {
    const data = await getVehicle(year, make, model, body);
    dispatch({ type: SET_VEHICLE_DATA, data });
};

export const updateSelection = (
    dispatch: Dispatch<any>,
    data: { name: string, value: string }
) => dispatch({
    type: SET_SELECTIONS,
    data,
});

export const clearMakeModelBody = (dispatch: Dispatch<any>) => dispatch({ type: CLEAR_MAKE_MODEL_BODY });
export const clearModelBody = (dispatch: Dispatch<any>) => dispatch({ type: CLEAR_MODEL_BODY });
export const clearBody = (dispatch: Dispatch<any>) => dispatch({ type: CLEAR_BODY });
export const clearVehicle = (dispatch: Dispatch<any>) => dispatch({ type: CLEAR_VEHICLE });
