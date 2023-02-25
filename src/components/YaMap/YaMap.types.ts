export interface ISuggest {
  displayName: string;
  value: string;
}

interface IMapOptions {
  center: number[];
  zoom: number;
  options: {
    autoFitToViewport: 'always';
  };
}

export type IMapControl =
  | 'geolocationControl'
  | 'searchControl'
  | 'trafficControl'
  | 'typeSelector'
  | 'fullscreenControl'
  | 'rulerControl'
  | 'zoomControl'
  | 'scrollZoom';

export interface IYaMapInstance {
  controls: {
    remove: (control: IMapControl) => void;
  };
}

export interface IYaMap {
  suggest: (location: string) => Promise<ISuggest[]>;
  geocode: (location: string | number[]) => any;
  Map: (id: string, options: IMapOptions) => IYaMapInstance;
}
