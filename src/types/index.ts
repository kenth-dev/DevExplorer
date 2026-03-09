export interface Language {
  id: string;
  label: string;
  filename: string;
  extension: string;
  shikiLanguage: string;
  accentColor: string;
  code: string;
  usedFor: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  languages: string[];
}

export interface Tab {
  id: string;
  label: string;
  closeable: boolean;
}
