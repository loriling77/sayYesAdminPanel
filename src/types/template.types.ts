export type TemplateSectionType =
  | 'IMG'
  | 'PARAGRAPH'
  | 'HEADER'
  | 'RSVP'
  | 'MAP'
  | 'CALENDAR'
  | 'CONTACT'
  | 'COUPLE_INFO';

export interface CalendarDto {
  dateTime?: string;
}

export interface ContactDto {
  brideContact?: string;
  GroomContact?: string;
}

export interface CoupleInfoDto {
  brideName?: string;
  groomName?: string;
}

export interface HeaderDto {
  header?: string;
}

export interface MapDto {
  latitude?: number;
  longitude?: number;
}

export interface ParagraphDto {
  paragraph?: string;
}

export interface RSVPDto {
  guestName?: string;
  noOfGuest?: number;
  guestContactNo?: string;
}

export interface TemplateSectionDto {
  order?: number;
  templateSectionType?: TemplateSectionType;
  calendar?: CalendarDto;
  contact?: ContactDto;
  coupleInfo?: CoupleInfoDto;
  header?: HeaderDto;
  map?: MapDto;
  paragraph?: ParagraphDto;
  rsvp?: RSVPDto;
}

export interface CreateTemplateRequest {
  title: string;
  musicUrl?: string;
  thumbNailImageUrl?: string;
  sections?: TemplateSectionDto[];
}
