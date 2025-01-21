import { API_CONFIG } from '../../api-config';
import { get, HttpStatus } from '../api/Api';

export interface Feature {
  name: string;
  enabled: boolean;
}

export const getFeatures = async (): Promise<Feature[]> => {
  return get<Feature[]>(API_CONFIG.featureManager.url, [HttpStatus.OK]);
};

export const isActive = async (featureName: string): Promise<boolean> => {
  return getFeatures().then((features) => {
    const feature = features.find((f) => f.name === featureName);

    return Boolean(feature?.enabled);
  });
};
