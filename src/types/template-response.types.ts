/**
 * =============================================================================
 * TEMPLATE RESPONSE TYPES
 * =============================================================================
 *
 * These types describe the data we RECEIVE from the server for templates.
 *
 * The difference from template.types.ts:
 * - Request types (template.types.ts) = What we SEND (no IDs)
 * - Response types (this file) = What we RECEIVE (has IDs from server)
 *
 * =============================================================================
 */

import type { TemplateSectionType } from "./template.types";

/**
 * Calendar
 *
 * A calendar section as returned by the server (has an ID).
 */
export interface Calendar {
  id: string;
  dateTime?: string;
}

/**
 * Contact
 *
 * A contact section as returned by the server.
 */
export interface Contact {
  id: string;
  brideContact?: string;
  groomContact?: string;
}

/**
 * CoupleInfo
 *
 * A couple info section as returned by the server.
 */
export interface CoupleInfo {
  id: string;
  brideName?: string;
  groomName?: string;
}

/**
 * Header
 *
 * A header section as returned by the server.
 */
export interface Header {
  id: string;
  header?: string;
}

/**
 * Map
 *
 * A map section as returned by the server.
 */
export interface Map {
  id: string;
  latitude?: number;
  longitude?: number;
}

/**
 * Paragraph
 *
 * A paragraph section as returned by the server.
 */
export interface Paragraph {
  id: string;
  paragraph?: string;
}

/**
 * RSVP
 *
 * An RSVP section as returned by the server.
 */
export interface RSVP {
  id: string;
  guestName?: string;
  noOfGuest?: number;
  guestContactNo?: string;
}

/**
 * TemplateSection
 *
 * A complete section as returned by the server.
 * This includes the section ID and all possible section data.
 */
export interface TemplateSection {
  /** Unique ID for this section */
  id: string;

  /** What type of section this is */
  sectionType?: TemplateSectionType;

  /** Position in the template (1, 2, 3, etc.) */
  order?: number;

  /** Calendar data (if this is a calendar section) */
  calendar?: Calendar;

  /** Contact data (if this is a contact section) */
  contact?: Contact;

  /** Couple info data (if this is a couple info section) */
  coupleInfo?: CoupleInfo;

  /** Header data (if this is a header section) */
  header?: Header;

  /** Map data (if this is a map section) */
  map?: Map;

  /** Paragraph data (if this is a paragraph section) */
  paragraph?: Paragraph;

  /** RSVP data (if this is an RSVP section) */
  rsvp?: RSVP;
}

/**
 * TemplateResponse
 *
 * A complete template as returned by the server.
 * This is what we display in the template tables.
 *
 * Example from server:
 * {
 *   "id": "tmpl-123-abc",
 *   "title": "Elegant Wedding",
 *   "musicUrl": "https://example.com/music.mp3",
 *   "thumbNailImageUrl": "https://example.com/thumb.jpg",
 *   "sections": [ ... ]
 * }
 */
export interface TemplateResponse {
  /** Unique ID for this template */
  id: string;

  /** Title of the template */
  title?: string;

  /** URL to background music */
  musicUrl?: string;

  /** URL to thumbnail image */
  thumbNailImageUrl?: string;

  /** List of sections in this template */
  sections?: TemplateSection[];
}
