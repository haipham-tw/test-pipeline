import { getFeatures, isActive, Feature } from './FeatureManager';
import * as api from '../api/Api';
import { API_CONFIG } from '../../api-config';

describe('FeatureManager Test', () => {
  let spy: jest.SpyInstance;

  const myFeatureToggles: Feature[] = [
    {
      name: 'MY_FEATURE_1',
      enabled: true,
    },
    {
      name: 'MY_FEATURE_2',
      enabled: false,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    spy = jest.spyOn(api, 'get');
    spy.mockResolvedValue(myFeatureToggles);
  });

  it('should return my feature toggles', async () => {
    const features = await getFeatures();

    expect(features).toEqual(myFeatureToggles);
    expect(spy).toHaveBeenCalledWith(API_CONFIG.featureManager.url, [api.HttpStatus.OK]);
  });

  it('should return true when a feature is active', async () => {
    const featureIsActive = await isActive('MY_FEATURE_1');

    expect(featureIsActive).toBeTruthy();
  });

  it('should return false when a feature is not active', async () => {
    const featureIsActive = await isActive('MY_FEATURE_2');

    expect(featureIsActive).toBeFalsy();
  });

  it('should return false when feature is not found', async () => {
    const featureIsActive = await isActive('NON_EXISTING_FEATURE');

    expect(featureIsActive).toBeFalsy();
  });
});
