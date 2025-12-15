export interface Project {
  id: number;
  name: string;
  logos: string[];
  subtitleEn: string;
  subtitleFi: string;
  mobileImages: boolean;
  images: string[];
  durationEn: string;
  detailsEn: string;
  durationFi: string;
  detailsFi: string;
  employer: string;
  backDrop: string;
  link: string;
  linkTitle: string;
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
  titleEn: string;
  titleFi: string;
  startDate: string;
  endDateEn: string;
  endDateFi: string;
  descriptionEn: string;
  descriptionFi: string;
}
