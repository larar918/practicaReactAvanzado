// Funciones que generan acciones. Actions creators.

import { AUTH_LOGIN, AUTH_LOGOUT, ADS_LOADED,  ADS_DELETED, ADS_CREATED } from "./types"


export const authLogin = () => ({
    type: AUTH_LOGIN
});

export const authLogout = () => ({
    type: AUTH_LOGOUT
});


export const adsLoaded = (ads) => ({
    type: ADS_LOADED,
    payload: ads
});

export const adDeleted = (ad) => ({
    type: ADS_DELETED,
    payload: ad
});

export const adCreated = (ad) => ({
    type: ADS_CREATED,
    payload: ad,
});




