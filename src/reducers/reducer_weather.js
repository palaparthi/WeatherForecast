/**
 * Created by Palaparthi on 8/24/17.
 */
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:
            // es5
            //return  state.concat([action.payload.data]);
            //es6
            return [action.payload.data, ...state];

    }
    return state;
}
