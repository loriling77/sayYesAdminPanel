/**
 * =============================================================================
 * TEMPLATES API
 * =============================================================================
 *
 * Everything for communicating with the server about templates.
 * Works exactly like the users API - see users/api/index.ts for details.
 *
 * AVAILABLE HOOKS:
 * ----------------
 * - useTemplates()      → Fetch all templates
 * - useCreateTemplate() → Create a new template
 *
 * EXAMPLE:
 * --------
 *   import { useTemplates } from '@/features/templates/api';
 *
 *   const { data: templates, isLoading } = useTemplates();
 *
 * =============================================================================
 */

export * from "./use-templates";
export * from "./template-service";
