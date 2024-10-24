export interface Project {
  id: number;
  name: string;
  logos: string[];
  subtitle: string;
  mobileImages: boolean;
  images: string[];
  duration: string;
  details: string;
  employer: string;
  backDrop: string;
}

export interface Skill {
  id: number;
  image: string;
  width: number;
  height: number;
  color1: string;
  color2: string;
  link: string;
  glow: string;
  tag: string;
}

export interface Work {
  id: number;
  logo: string;
  name: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}
