import { getAd } from '../selectors';

describe('getTweet', () => {
  const adId = 'id1';
  const ads = [{ id: adId }];
  const state = { ads: ads };

  test('should return an ad by adId', () => {
    expect(getAd(adId)(state)).toBe(ads[0]);
  });

});