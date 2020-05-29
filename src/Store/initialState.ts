import { CCAPI$ResponseType, CCAPI$VehicleResponseType } from '../Services/vehicle/http';

export type InitialState = {
    bodyData: CCAPI$ResponseType | undefined;
    isAppLoading: boolean;
    makeData: CCAPI$ResponseType | undefined;
    modelData: CCAPI$ResponseType | undefined;
    yearData: CCAPI$ResponseType | undefined;
    selections: {
        year: string,
        make: string,
        model: string,
        body: string,
    };
    vehicleData: CCAPI$VehicleResponseType | undefined;
}

export const initialState: InitialState = {
    bodyData: undefined,
    isAppLoading: false,
    makeData: undefined,
    modelData: undefined,
    selections: {
        year: "",
        make: "",
        model: "",
        body: "",
    },
    vehicleData: undefined,
    yearData: undefined,
};
