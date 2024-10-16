export interface Project {
  id: number;
  name: string;
  logos: string[];
  image: string;
  subtitle: string;
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
