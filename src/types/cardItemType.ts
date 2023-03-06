export type Tech = {
  id: number;
  name: string;
  title: string;
  imgSrc: string;
}

export type Skill = {
  id: number;
  name: string;
  title: string;
  level: 1|2|3|4|5;
  imgSrc: string;
}

export type Output = {
  id: number,
  name: string;
  title: string;
  techs: string[];
  githubLink?: string;
  siteLink?: string;
  // imgSrc: string;
}