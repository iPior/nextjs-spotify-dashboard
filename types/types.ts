
interface Image {
  height: number | null;
  url: string | null;
  width: number | null;
}

export interface SpotifyArtist{
  followers?: {
    total: number;
  };
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  popularity: number;
  type?: string;
  uri?: string;
}

export interface cardProps {
  image: string;
  name: string;
}