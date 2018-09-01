import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
        // concat doesn't change the existing array, it creates a new array with the contents addded so it doesn't mutate the state
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ]; //[ city city city] NOT [city [city city]] ... notation flattens array
    }
    return state;
}