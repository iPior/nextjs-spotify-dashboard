interface Image {
  height: number | null;
  url: string | null;
  width: number | null;
}

export interface SpotifyAlbum{
  album_type: string;
  total_tracks: number;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  artists: Array<SpotifyArtist>;
}

export interface SpotifyArtist{
  followers?: {
    total: number;
  };
  genres?: Array<string>;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  popularity?: number;
  type?: string;
  uri?: string;
}

export interface SpotifyTrack{
  album: SpotifyAlbum;
  artists: Array<SpotifyArtist>;
  href:string;
  id: string;
  name: string;
  popularity: number;
}


export interface cardProps {
  className?: string;
  index?: number;
  image: string;
  name: string;
  artist?: string;
}