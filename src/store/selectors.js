export const getAds = state => state.ads

export const getAd = adId => state => getAds(state).find(ad => ad.id === adId)