export interface Project {
  id: number;
  priority: number;
  start_date: string;
  end_date: string;
  title: string;
  created_for: string;
  role: string;
  card_bg: string;
  color_main: string;
  color_off: string;
  card_description_en: string;
  technologies: string[];
  github: string | null;
  youtube: Link | null;
  web_link: Link | null;
  google_play: string | null;
  app_store: string | null;
  images: string[];
  description: string;
}

interface Link {
  title: string;
  link: string;
}

export interface SkillType {
  name: string;
  category: string;
  image: string;
}

export interface WorkType {
  id: number;
  name: string;
  title: string;
  startDate: string;
  endDate: string | null;
  description: string;
}
