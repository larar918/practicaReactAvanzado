import {AUTH_LOGIN, AUTH_LOGOUT, ADS_CREATED, ADS_LOADED, ADS_DELETED} from './types.js'

const defaultState = {
    auth: false,
    ads : []
}

export function auth(state=defaultState.auth, action){  // Recibe como parámetro del estado solo state.auth y es con lo que trabaja
    switch(action.type){
        case AUTH_LOGIN:
            return true;
        case AUTH_LOGOUT:
            return false;
        default:
            return state;
    }
}

export function ads(state=defaultState.ads, action){ // Recibe como parámetro del estado solo state.ads y es con lo que trabaja
    switch(action.type){
        case ADS_LOADED:
            return action.payload;
        case ADS_DELETED:
            return state.filter(ad => ad.id !== action.payload); // Creamos un array nuevo sin el anuncio eliminado
        case ADS_CREATED:
            return [...state, action.payload]; // Añadimos el ad creado al listado
        default:
            return state;
    }
}

