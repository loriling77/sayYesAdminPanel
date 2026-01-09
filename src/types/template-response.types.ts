import type { TemplateSectionType } from './template.types';

export interface Calendar {
  id: string;
  dateTime?: string;
}

export interface Contact {
  id: string;
  brideContact?: string;
  groomContact?: string;
}

export interface CoupleInfo {
  id: string;
  brideName?: string;
  groomName?: string;
}

export interface Header {
  id: string;
  header?: string;
}

export interface Map {
  id: string;
  latitude?: number;
  longitude?: number;
}

export interface Paragraph {
  id: string;
  paragraph?: string;
}

export interface RSVP {
  id: string;
  guestName?: string;
  noOfGuest?: number;
  guestContactNo?: string;
}

export interface TemplateSection {
  id: string;
  sectionType?: TemplateSectionType;
  order?: number;
  calendar?: Calendar;
  contact?: Contact;
  coupleInfo?: CoupleInfo;
  header?: Header;
  map?: Map;
  paragraph?: Paragraph;
  rsvp?: RSVP;
}

export interface TemplateResponse {
  id: string;
  title?: string;
  musicUrl?: string;
  thumbNailImageUrl?: string;
  sections?: TemplateSection[];
}
