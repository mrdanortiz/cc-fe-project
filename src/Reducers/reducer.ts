import { InitialState } from '../Store/initialState'
import {
    SET_YEAR_DATA,
    SET_MAKES_DATA,
    SET_SELECTIONS,
    SET_MODELS_DATA,
    SET_BODYSTYLES_DATA,
    SET_VEHICLE_DATA,
    CLEAR_MAKE_MODEL_BODY,
    CLEAR_MODEL_BODY,
    CLEAR_BODY,
    CLEAR_VEHICLE,
} from "../Actions/actions";

export const reducer = (state: InitialState, { type, data }: { type: string, data?: any }): InitialState => {
    switch (type) {
        case SET_YEAR_DATA:
            return { ...state, yearData: data };
        case SET_MAKES_DATA:
            return { ...state, makeData: data };
        case SET_MODELS_DATA:
            return { ...state, modelData: data }
        case SET_BODYSTYLES_DATA:
            return { ...state, bodyData: data }
        case SET_VEHICLE_DATA:
            return { ...state, vehicleData: data }
        case SET_SELECTIONS:
            return {
                ...state,
                selections: {
                    ...state.selections,
                    [data.name]: data.value,
                }
            };
        case CLEAR_MAKE_MODEL_BODY:
            return {
                ...state,
                selections: {
                    ...state.selections,
                    make: "",
                    model: "",
                    body: "",
                },
                makeData: undefined,
                modelData: undefined,
                bodyData: undefined,
            }
        case CLEAR_MODEL_BODY:
            return {
                ...state,
                selections: {
                    ...state.selections,
                    model: "",
                    body: "",
                },
                modelData: undefined,
                bodyData: undefined,
            }
        case CLEAR_BODY:
            return {
                ...state,
                selections: {
                    ...state.selections,
                    body: "",
                },
                bodyData: undefined,
            }
        case CLEAR_VEHICLE:
            return { ...state, vehicleData: undefined }
        default:
            return state;
    }
};
