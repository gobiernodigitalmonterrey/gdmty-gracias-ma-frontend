export interface DataNominatim {
  lat: string;
  lon: string;
  osm_type: string;
  display_name: string;
  addresstype: string;
}

export interface DataNominatimStore {
  data: DataNominatim[];
}

export interface RespuestaNominatim {
  status: number;
  data: DataNominatim[];
}
