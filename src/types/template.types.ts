/**
 * =============================================================================
 * TEMPLATE TYPES (Request/Input Types)
 * =============================================================================
 *
 * These types describe the data we SEND to the server when creating templates.
 * Templates are things like wedding invitations, MVs (music videos), and posters.
 *
 * A template has "sections" - different parts like headers, paragraphs, maps, etc.
 *
 * =============================================================================
 */

/**
 * TemplateSectionType
 *
 * This is a list of all possible section types a template can have.
 * Each section type shows different content.
 */
export type TemplateSectionType =
  | "IMG" // An image
  | "PARAGRAPH" // A block of text
  | "HEADER" // A title/heading
  | "RSVP" // RSVP form (for guests to respond)
  | "MAP" // A location map
  | "CALENDAR" // A date/time display
  | "CONTACT" // Contact information
  | "COUPLE_INFO"; // Information about the couple

/**
 * CalendarDto
 *
 * Data for a calendar section (shows a date and time).
 * "Dto" means "Data Transfer Object" - it's the format for sending data.
 */
export interface CalendarDto {
  /** The date and time (ISO format like "2024-06-15T14:00:00Z") */
  dateTime?: string;
}

/**
 * ContactDto
 *
 * Data for a contact section (phone numbers).
 */
export interface ContactDto {
  /** Bride's phone number */
  brideContact?: string;

  /** Groom's phone number */
  GroomContact?: string;
}

/**
 * CoupleInfoDto
 *
 * Data for couple information section.
 */
export interface CoupleInfoDto {
  /** Bride's name */
  brideName?: string;

  /** Groom's name */
  groomName?: string;
}

/**
 * HeaderDto
 *
 * Data for a header/title section.
 */
export interface HeaderDto {
  /** The header text */
  header?: string;
}

/**
 * MapDto
 *
 * Data for a map section (shows a location).
 */
export interface MapDto {
  /** Latitude coordinate (north-south position) */
  latitude?: number;

  /** Longitude coordinate (east-west position) */
  longitude?: number;
}

/**
 * ParagraphDto
 *
 * Data for a paragraph/text section.
 */
export interface ParagraphDto {
  /** The paragraph text */
  paragraph?: string;
}

/**
 * RSVPDto
 *
 * Data for an RSVP section (guest response form).
 */
export interface RSVPDto {
  /** Name of the guest */
  guestName?: string;

  /** Number of guests attending */
  noOfGuest?: number;

  /** Guest's phone number */
  guestContactNo?: string;
}

/**
 * TemplateSectionDto
 *
 * Describes one section of a template.
 * A template can have many sections in a specific order.
 *
 * Example: A wedding invitation might have:
 * 1. Header section (title)
 * 2. CoupleInfo section (names)
 * 3. Calendar section (date)
 * 4. Map section (venue location)
 * 5. RSVP section (response form)
 */
export interface TemplateSectionDto {
  /** Position of this section (1, 2, 3, etc.) */
  order?: number;

  /** What type of section this is */
  templateSectionType?: TemplateSectionType;

  /** Data if this is a calendar section */
  calendar?: CalendarDto;

  /** Data if this is a contact section */
  contact?: ContactDto;

  /** Data if this is a couple info section */
  coupleInfo?: CoupleInfoDto;

  /** Data if this is a header section */
  header?: HeaderDto;

  /** Data if this is a map section */
  map?: MapDto;

  /** Data if this is a paragraph section */
  paragraph?: ParagraphDto;

  /** Data if this is an RSVP section */
  rsvp?: RSVPDto;
}

/**
 * CreateTemplateRequest
 *
 * The data we send to create a new template.
 *
 * Example:
 * {
 *   "title": "Elegant Wedding Invitation",
 *   "musicUrl": "https://example.com/music.mp3",
 *   "thumbNailImageUrl": "https://example.com/thumb.jpg",
 *   "sections": [
 *     { "order": 1, "templateSectionType": "HEADER", "header": { "header": "You're Invited!" } },
 *     { "order": 2, "templateSectionType": "COUPLE_INFO", "coupleInfo": { "brideName": "Jane", "groomName": "John" } }
 *   ]
 * }
 */
export interface CreateTemplateRequest {
  /** Required: Title of the template */
  title: string;

  /** Optional: URL to background music */
  musicUrl?: string;

  /** Optional: URL to thumbnail image */
  thumbNailImageUrl?: string;

  /** Optional: List of sections in the template */
  sections?: TemplateSectionDto[];
}
