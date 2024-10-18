export interface Project {
  id: number;
  name: string;
  logos: string[];
  subtitle: string;
  image1: string;
  image2: string;
  image3: string;
  start: string;
  end: string;
  details: string;
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
