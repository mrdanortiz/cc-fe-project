import React, { useEffect, useContext, FunctionComponent } from 'react';
import { Box, InputLabel, MenuItem, Select, Container, FormControl } from '@material-ui/core';
import {
    clearBody,
    clearMakeModelBody,
    clearModelBody,
    clearVehicle,
    getBodyStylesData,
    getMakesData,
    getModelsData,
    getVehicleData,
    getYearData,
    updateSelection,
} from '../Actions/actions';
import { AppContext } from '../Store/AppContext';

export const DropDownContainer: FunctionComponent = () => {
    const { state, dispatch } = useContext(AppContext);
    const { yearData, selections, makeData, modelData, bodyData } = state;
    useEffect(() => {
        getYearData(dispatch);
    }, [dispatch]);

    return (
        <Container maxWidth='lg' style={{ padding: '80px' }}>
            <Box display='flex' justifyContent='space-around' flexWrap='wrap'>

                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel>Year</InputLabel>
                    <Select
                        name='year'
                        disabled={!yearData}
                        value={selections?.year || ''}
                        onChange={({ target }) => {
                            updateSelection(dispatch, { name: target.name as string, value: target.value as string })
                            getMakesData(dispatch, target.value as string);
                            clearMakeModelBody(dispatch);
                            clearVehicle(dispatch);
                        }}
                    >
                        {yearData?.map((item, i) => <MenuItem key={i} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel>Make</InputLabel>
                    <Select
                        name='make'
                        disabled={!makeData}
                        value={selections?.make || ''}
                        onChange={({ target }) => {
                            const { year } = selections;
                            updateSelection(dispatch, { name: target.name as string, value: target.value as string })
                            getModelsData(dispatch, { year: year as string, make: target.value as string })
                            clearModelBody(dispatch);
                            clearVehicle(dispatch);
                        }}
                    >
                        {makeData?.map((item, i) => <MenuItem key={i} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel>Model</InputLabel>
                    <Select
                        name='model'
                        disabled={!modelData}
                        value={selections?.model || ''}
                        onChange={({ target }) => {
                            const { year, make } = selections;
                            updateSelection(dispatch, { name: target.name as string, value: target.value as string })
                            getBodyStylesData(dispatch, { year, make, model: target.value as string })
                            clearBody(dispatch);
                            clearVehicle(dispatch);
                        }}
                    >
                        {modelData?.map((item, i) => <MenuItem key={i} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel>Body</InputLabel>
                    <Select
                        name='body'
                        disabled={!bodyData}
                        value={selections?.body || ''}
                        onChange={({ target }) => {
                            const { year, make, model } = selections;
                            updateSelection(dispatch, { name: target.name as string, value: target.value as string })
                            getVehicleData(dispatch, { year, make, model, body: target.value as string })
                        }}
                    >
                        {bodyData?.map((item, i) => <MenuItem key={i} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                </FormControl>

            </Box>
        </Container>
    )
};
