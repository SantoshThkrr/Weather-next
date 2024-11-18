export interface WordPressTag {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    meta: string[];
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      'wp:post_type': { href: string }[];
    };
  }

  export interface WeatherPost {
    link: string;
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    featured_media: number;
    jetpack_featured_media_url: string;
    slug: string;
  }

  // Define types for your station data
export interface Station {
    AQI: string | null;
    Today_Max_temp: string | null;
    Todays_Forecast_Min_temp: string | null;
    Todays_Forecast_Max_Temp: string | null;
    Sunset_time: string | null;
    Sunrise_time: string | null;
    Todays_Forecast: string | null;
    Past_24_hrs_Rainfall: string | null;
    Relative_Humidity_at_0830: string | null;
    Station_Name: string;
  }
  
  // Define the context value type
  export interface StationContextType {
    selectedStation: Station | null;
    selectStation: (stationName: string) => void;
  }
  