// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * # Summarizer Token Types
 *
 * This file defines the token types used to build summarizer phrases. A summarizer
 * produces natural language descriptions of structured data by evaluating a tree
 * of tokens against the data.
 *
 * ## Design Philosophy
 *
 * Summarizer tokens are designed to be:
 * - **AI-friendly**: Clear, self-documenting JSON that models can generate
 * - **Composable**: Tokens can be nested to build complex phrases
 * - **Conditional**: Any token can be hidden based on data conditions
 * - **Grammatically aware**: Built-in support for lists, plurals, and conjunctions
 *
 * ## Mini Style Guide for Writing Summarizers
 *
 * ### Phrase Structure
 * Phrases are designed to complete "This object ____", so they typically:
 * - Start with a verb: "has", "can", "will", "is", "deals", "takes"
 * - Use present tense for capabilities: "can fly", "deals fire damage"
 * - Use descriptive adjectives: "extremely high", "dangerously low", "moderate"
 *
 * ### Good Examples:
 * - "has extremely high health (500 HP, stronger than an Ender Dragon)"
 * - "will catch fire when exposed to sunlight"
 * - "can teleport when attacked"
 * - "deals 15 damage per hit, which is enough to one-shot most passive mobs"
 * - "has a 25% chance to drop rare loot"
 *
 * ### Avoid:
 * - Starting with articles: "a high health mob" ❌
 * - Sentence fragments: "health: 500" ❌
 * - Just stating values: "has 500 health" (prefer comparisons when possible)
 * - Passive voice when active is clearer: "is damaged by fire" vs "takes fire damage"
 *
 * ### Comparisons Make Data Meaningful
 * Raw numbers often mean little to readers. Use comparisons to known entities:
 * - "stronger than an Iron Golem" (100 HP)
 * - "as fast as a Spider" (0.3 speed)
 * - "more health than an Ender Dragon" (200 HP)
 * - "can one-shot a Zombie" (20 HP)
 *
 * ### When to Use Each Token Type
 *
 * | Token Type | Use When... | Example |
 * |------------|-------------|---------|
 * | literal | Static text that never changes | "has ", "HP", "per second" |
 * | value | Showing the actual field value | "{damage} damage" → "15 damage" |
 * | switch | Describing value in qualitative terms | value>100 → "extremely high" |
 * | list | Multiple conditional items | "can fly, swim, and teleport" |
 * | template | Inserting values into sentences | "deals {damage} {type} damage" |
 * | plural | Singular/plural based on count | "1 item" vs "5 items" |
 * | reference | Comparing to known values | "more than a Zombie's health" |
 * | sample | Using example values from the form | "like the Warden (500 HP)" |
 * | unit | Formatting values with units | "200 ticks (10 seconds)" |
 * | exists | Checking if field is defined | "has custom loot" (if loot_table defined) |
 * | group | Grouping tokens for visibility | Wrap related tokens together |
 */

import ICondition from "./ICondition";

/**
 * Semantic emphasis level for token display.
 *
 * Use semantic emphasis rather than literal styling (bold, italic) so that
 * the rendering can adapt to different themes and contexts.
 *
 * @example
 * // Make a value stand out
 * { "type": "value", "field": "max", "effects": { "emphasis": "strong" } }
 */
export enum SummarizerEmphasis {
  /** Normal text weight, no special styling */
  normal = "normal",
  /** Make text stand out (typically bold or highlighted) */
  strong = "strong",
  /** De-emphasize text (typically lighter/smaller) */
  subtle = "subtle",
}

/**
 * Semantic sentiment for color-coding tokens.
 *
 * Sentiment indicates the "meaning" of a value, allowing the renderer to
 * apply appropriate colors that work across themes.
 *
 * @example
 * // Show high health as positive (green)
 * { "type": "value", "field": "max", "effects": { "sentiment": "positive" } }
 *
 * // Show low health as negative (red)
 * { "type": "literal", "text": "very low health", "effects": { "sentiment": "negative" } }
 */
export enum SummarizerSentiment {
  /** No special color treatment */
  neutral = "neutral",
  /** Good/desirable value (typically green) */
  positive = "positive",
  /** Bad/dangerous value (typically red) */
  negative = "negative",
  /** Caution/attention needed (typically yellow/orange) */
  warning = "warning",
  /** Informational highlight (typically blue) */
  info = "info",
}

/**
 * Semantic role for consistent styling of different token types.
 *
 * This provides a way to ensure consistent styling for similar content
 * across different summarizers.
 *
 * @example
 * // Style as a value (might be monospace or highlighted)
 * { "type": "value", "field": "damage", "effects": { "role": "value" } }
 */
export enum SummarizerRole {
  /** Plain text, no special role */
  text = "text",
  /** A data value (number, identifier) */
  value = "value",
  /** A unit label (HP, blocks, seconds) */
  unit = "unit",
  /** A label or category name */
  label = "label",
  /** A comparison or reference */
  comparison = "comparison",
}

/**
 * Visual effects that can be applied to tokens for richer display.
 *
 * Effects are OPTIONAL and purely for enhanced rendering. The summarizer
 * will always produce valid plain text output regardless of effects.
 *
 * ## Design Philosophy
 *
 * Effects use SEMANTIC values (positive/negative, strong/subtle) rather than
 * literal styling (red, bold) so that:
 * - They adapt to light/dark themes
 * - They work with accessibility requirements
 * - They degrade gracefully to plain text
 *
 * ## When to Use Effects
 *
 * - **emphasis: "strong"** - For key values you want to stand out
 * - **emphasis: "subtle"** - For parenthetical context or units
 * - **sentiment: "positive"** - High health, good stats, buffs
 * - **sentiment: "negative"** - Low health, weaknesses, debuffs
 * - **sentiment: "warning"** - Dangerous abilities, caution needed
 * - **badge: true** - For categories, tags, or short labels
 * - **icon** - For visual flair (emoji work well)
 *
 * @example
 * // A token with multiple effects
 * {
 *   "type": "value",
 *   "field": "max",
 *   "effects": {
 *     "emphasis": "strong",
 *     "sentiment": "positive",
 *     "icon": "❤️"
 *   }
 * }
 */
export interface ISummarizerEffects {
  /**
   * Emphasis level for the token.
   * @default "normal"
   */
  emphasis?: SummarizerEmphasis | string;

  /**
   * Semantic sentiment for color-coding.
   * @default "neutral"
   */
  sentiment?: SummarizerSentiment | string;

  /**
   * Semantic role for consistent styling.
   * @default "text"
   */
  role?: SummarizerRole | string;

  /**
   * Render as a badge/pill shape.
   * Good for short categories or tags like "ranged", "explosive", "boss".
   * @default false
   */
  badge?: boolean;

  /**
   * Optional icon to display before the token text.
   * Can be an emoji (❤️, ⚔️, 🏃) or an icon identifier.
   *
   * @example
   * // Emoji icon
   * { "icon": "❤️" }
   *
   * // Named icon (for icon font integration)
   * { "icon": "heart" }
   */
  icon?: string;

  /**
   * Position of the icon relative to the text.
   * @default "before"
   */
  iconPosition?: "before" | "after";
}

/**
 * Enumeration of all summarizer token types.
 *
 * @example
 * // A simple literal token
 * { "type": "literal", "text": "has " }
 *
 * @example
 * // A switch token for qualitative descriptions
 * {
 *   "type": "switch",
 *   "cases": [
 *     { "conditions": [{ "field": "max", "comparison": ">", "value": 100 }],
 *       "tokens": [{ "type": "literal", "text": "extremely high health" }] }
 *   ]
 * }
 */
export enum SummarizerTokenType {
  /**
   * Outputs a static text string. The most basic token type.
   * @example { "type": "literal", "text": "has " }
   */
  literal = "literal",

  /**
   * Inserts the value of a field from the data object.
   * @example { "type": "value", "field": "max", "format": "number" }
   */
  value = "value",

  /**
   * Selects one of several token arrays based on conditions.
   * Essential for qualitative descriptions ("low", "medium", "high").
   * @example See ISwitchToken for full example
   */
  switch = "switch",

  /**
   * Renders a grammatically correct list of items.
   * Handles "a", "a and b", "a, b, and c" automatically.
   * @example See IListToken for full example
   */
  list = "list",

  /**
   * String interpolation with named placeholders.
   * Useful for complex phrases with multiple values.
   * @example { "type": "template", "template": "deals {damage} {type} damage" }
   */
  template = "template",

  /**
   * Handles singular/plural forms based on a numeric field.
   * @example "1 heart" vs "5 hearts"
   */
  plural = "plural",

  /**
   * Pulls a sample value from the form definition to use as a reference.
   * Encourages AI to use real-world examples from the data.
   * @example { "type": "sample", "samplePath": "entities/warden", "field": "max" }
   */
  sample = "sample",

  /**
   * Formats a value with units and optional conversion.
   * @example "200 ticks (10 seconds)"
   */
  unit = "unit",

  /**
   * Outputs tokens only if a field is defined (or undefined).
   * @example "has a custom loot table" (only if loot_table exists)
   */
  exists = "exists",

  /**
   * Groups tokens together, useful for applying visibility to multiple tokens.
   * @example Wrap "(stronger than X)" in a group with visibility condition
   */
  group = "group",

  /**
   * Joins child token arrays with a conjunction ("and", "or", "but").
   * @example "can fly and swim" or "immune to fire but weak to water"
   */
  conjunction = "conjunction",
}

/**
 * Algorithms for making values more human-readable.
 *
 * @example
 * // In a value token:
 * { "type": "value", "field": "entity_type", "humanify": "minecraft" }
 * // Converts "minecraft:zombie_pigman" → "Zombie Pigman"
 */
export enum SummarizerHumanifyType {
  /**
   * No transformation, output the raw value.
   */
  none = "none",

  /**
   * General humanification: underscores to spaces, title case.
   * "my_cool_thing" → "My Cool Thing"
   */
  general = "general",

  /**
   * Minecraft-specific humanification: removes namespace, converts to title case.
   * "minecraft:zombie_pigman" → "Zombie Pigman"
   * "custom:my_entity" → "My Entity"
   */
  minecraft = "minecraft",

  /**
   * Capitalize first letter only.
   * "hello world" → "Hello world"
   */
  sentence = "sentence",
}

/**
 * Base interface for all summarizer tokens.
 *
 * Every token can have:
 * - Conditional visibility (appears only when conditions are met)
 * - Priority for truncation (lower number = more important)
 *
 * @example
 * // A token that only appears when health > 100
 * {
 *   "type": "literal",
 *   "text": " (that's really tanky!)",
 *   "visibility": [{ "field": "max", "comparison": ">", "value": 100 }]
 * }
 */
export interface ISummarizerTokenBase {
  /**
   * The type of token. Determines how the token is evaluated.
   */
  type: SummarizerTokenType | string;

  /**
   * Optional conditions that must ALL be true for this token to appear.
   * Uses the same ICondition format as field visibility in forms.
   *
   * @example
   * // Only show when health is defined and greater than 100
   * "visibility": [
   *   { "field": "max", "comparison": "defined" },
   *   { "field": "max", "comparison": ">", "value": 100 }
   * ]
   */
  visibility?: ICondition[];

  /**
   * Priority for truncation when space is limited.
   * Lower numbers are more important and will be kept.
   * - Priority 1: Essential information, always show
   * - Priority 2: Important details
   * - Priority 3: Nice-to-have comparisons
   * - Priority 4+: Optional flavor text
   *
   * @default 2
   */
  priority?: number;

  /**
   * Visual effects for enhanced rendering.
   *
   * Effects are optional and purely for display enhancement.
   * The summarizer always produces valid plain text regardless of effects.
   *
   * @example
   * // Make a value stand out with icon and positive sentiment
   * {
   *   "type": "value",
   *   "field": "max",
   *   "effects": {
   *     "emphasis": "strong",
   *     "sentiment": "positive",
   *     "icon": "❤️"
   *   }
   * }
   */
  effects?: ISummarizerEffects;
}

/**
 * Literal token: outputs static text.
 *
 * @example
 * // Simple text
 * { "type": "literal", "text": "has " }
 *
 * @example
 * // With conditional visibility - only show parenthetical for high values
 * {
 *   "type": "literal",
 *   "text": " (that's incredibly powerful!)",
 *   "visibility": [{ "field": "damage", "comparison": ">", "value": 50 }],
 *   "priority": 3
 * }
 */
export interface ILiteralToken extends ISummarizerTokenBase {
  type: "literal";

  /**
   * The literal text to output.
   */
  text: string;
}

/**
 * Value token: inserts a field value from the data object.
 *
 * @example
 * // Simple value insertion
 * { "type": "value", "field": "max" }
 * // With data { "max": 100 } → "100"
 *
 * @example
 * // With humanification for Minecraft identifiers
 * { "type": "value", "field": "entity_type", "humanify": "minecraft" }
 * // With data { "entity_type": "minecraft:zombie" } → "Zombie"
 *
 * @example
 * // With number formatting
 * { "type": "value", "field": "chance", "format": "percent" }
 * // With data { "chance": 0.25 } → "25%"
 */
export interface IValueToken extends ISummarizerTokenBase {
  type: "value";

  /**
   * The field path to get the value from.
   * Supports dot notation for nested fields: "damage.min"
   */
  field: string;

  /**
   * Optional format for the value.
   * - "number": Format as locale number (1,000)
   * - "percent": Multiply by 100 and add % (0.25 → "25%")
   * - "decimal:N": Round to N decimal places
   */
  format?: string;

  /**
   * Algorithm to make the value more human-readable.
   * @default "none"
   */
  humanify?: SummarizerHumanifyType | string;

  /**
   * Fallback text if the field is undefined.
   * @default "" (empty string)
   */
  fallback?: string;
}

/**
 * A single case in a switch token.
 *
 * @example
 * {
 *   "conditions": [{ "field": "max", "comparison": ">", "value": 200 }],
 *   "tokens": [{ "type": "literal", "text": "extremely high health" }]
 * }
 */
export interface ISwitchCase {
  /**
   * Conditions that must ALL be true for this case to be selected.
   */
  conditions: ICondition[];

  /**
   * Tokens to output when this case is selected.
   */
  tokens: ISummarizerToken[];
}

/**
 * Switch token: selects tokens based on conditions.
 *
 * Cases are evaluated in order, and the first matching case is used.
 * If no case matches, the default tokens are used (if provided).
 *
 * ## Best Practice: Order Cases from Most to Least Specific
 *
 * @example
 * // Describing health levels with rich comparisons
 * {
 *   "type": "switch",
 *   "cases": [
 *     {
 *       "conditions": [{ "field": "max", "comparison": ">", "value": 500 }],
 *       "tokens": [{ "type": "literal", "text": "god-tier health, rivaling a Wither" }]
 *     },
 *     {
 *       "conditions": [{ "field": "max", "comparison": ">", "value": 200 }],
 *       "tokens": [{ "type": "literal", "text": "extremely high health, tougher than an Ender Dragon" }]
 *     },
 *     {
 *       "conditions": [{ "field": "max", "comparison": ">", "value": 100 }],
 *       "tokens": [{ "type": "literal", "text": "high health, like an Iron Golem" }]
 *     },
 *     {
 *       "conditions": [{ "field": "max", "comparison": ">", "value": 40 }],
 *       "tokens": [{ "type": "literal", "text": "above-average health" }]
 *     },
 *     {
 *       "conditions": [{ "field": "max", "comparison": "<", "value": 10 }],
 *       "tokens": [{ "type": "literal", "text": "very fragile, weaker than a Chicken" }]
 *     }
 *   ],
 *   "default": [{ "type": "literal", "text": "typical health for a mob" }]
 * }
 */
export interface ISwitchToken extends ISummarizerTokenBase {
  type: "switch";

  /**
   * Ordered list of cases. First matching case wins.
   */
  cases: ISwitchCase[];

  /**
   * Tokens to output if no case matches.
   */
  default?: ISummarizerToken[];
}

/**
 * List token: renders items as a grammatically correct list.
 *
 * Automatically handles:
 * - Empty list: outputs emptyText or nothing
 * - Single item: just the item
 * - Two items: "A and B"
 * - Three+ items: "A, B, and C"
 *
 * Only items whose tokens produce non-empty output are included.
 *
 * @example
 * // List of capabilities
 * {
 *   "type": "list",
 *   "items": [
 *     {
 *       "visibility": [{ "field": "can_fly", "comparison": "=", "value": true }],
 *       "tokens": [{ "type": "literal", "text": "fly" }]
 *     },
 *     {
 *       "visibility": [{ "field": "can_swim", "comparison": "=", "value": true }],
 *       "tokens": [{ "type": "literal", "text": "swim" }]
 *     },
 *     {
 *       "visibility": [{ "field": "can_teleport", "comparison": "=", "value": true }],
 *       "tokens": [{ "type": "literal", "text": "teleport" }]
 *     }
 *   ],
 *   "prefix": [{ "type": "literal", "text": "can " }],
 *   "emptyText": "has no special movement abilities"
 * }
 * // With can_fly=true, can_teleport=true → "can fly and teleport"
 * // With all three true → "can fly, swim, and teleport"
 */
export interface IListToken extends ISummarizerTokenBase {
  type: "list";

  /**
   * Each item is an object with optional visibility and required tokens.
   */
  items: IListItem[];

  /**
   * Separator between items (except the last two).
   * @default ", "
   */
  separator?: string;

  /**
   * Separator before the last item when there are 3+ items.
   * @default ", and "
   */
  finalSeparator?: string;

  /**
   * Separator when there are exactly 2 items.
   * @default " and "
   */
  twoItemSeparator?: string;

  /**
   * Text to output when no items are visible.
   * If not provided, the entire list token outputs nothing.
   */
  emptyText?: string;

  /**
   * Tokens to output before the list (only if list is non-empty).
   */
  prefix?: ISummarizerToken[];

  /**
   * Tokens to output after the list (only if list is non-empty).
   */
  suffix?: ISummarizerToken[];
}

/**
 * A single item in a list token.
 */
export interface IListItem {
  /**
   * Conditions for this item to be included in the list.
   */
  visibility?: ICondition[];

  /**
   * Tokens that make up this list item.
   */
  tokens: ISummarizerToken[];
}

/**
 * Template token: string interpolation with named placeholders.
 *
 * Placeholders use {name} syntax and are replaced with evaluated token arrays.
 *
 * @example
 * {
 *   "type": "template",
 *   "template": "deals {damage} {damageType} damage per hit",
 *   "values": {
 *     "damage": [{ "type": "value", "field": "damage" }],
 *     "damageType": [{ "type": "value", "field": "damage_type", "humanify": "minecraft" }]
 *   }
 * }
 * // With { damage: 15, damage_type: "minecraft:fire" }
 * // → "deals 15 Fire damage per hit"
 */
export interface ITemplateToken extends ISummarizerTokenBase {
  type: "template";

  /**
   * Template string with {placeholder} syntax.
   */
  template: string;

  /**
   * Map of placeholder names to token arrays.
   */
  values: { [key: string]: ISummarizerToken[] };
}

/**
 * Plural token: handles singular/plural forms based on a count.
 *
 * @example
 * {
 *   "type": "plural",
 *   "countField": "item_count",
 *   "singular": [{ "type": "literal", "text": "item" }],
 *   "plural": [{ "type": "literal", "text": "items" }],
 *   "includeCount": true
 * }
 * // With { item_count: 1 } → "1 item"
 * // With { item_count: 5 } → "5 items"
 *
 * @example
 * // Without including the count
 * {
 *   "type": "plural",
 *   "countField": "heart_count",
 *   "singular": [{ "type": "literal", "text": "heart" }],
 *   "plural": [{ "type": "literal", "text": "hearts" }],
 *   "zero": [{ "type": "literal", "text": "no hearts" }],
 *   "includeCount": false
 * }
 */
export interface IPluralToken extends ISummarizerTokenBase {
  type: "plural";

  /**
   * Field containing the count value.
   */
  countField: string;

  /**
   * Tokens for singular form (count === 1).
   */
  singular: ISummarizerToken[];

  /**
   * Tokens for plural form (count !== 1).
   */
  plural: ISummarizerToken[];

  /**
   * Tokens for zero count. If not provided, uses plural.
   */
  zero?: ISummarizerToken[];

  /**
   * Whether to prepend the count value.
   * @default true
   */
  includeCount?: boolean;
}

/**
 * Sample token: pulls a sample value from form.json to use as a reference.
 *
 * This encourages AI to create rich comparisons using real examples from the data.
 * The form.json can contain samples like:
 * ```json
 * {
 *   "samples": {
 *     "entities/warden": { "max": 500, "value": 500 },
 *     "entities/zombie": { "max": 20, "value": 20 }
 *   }
 * }
 * ```
 *
 * @example
 * {
 *   "type": "sample",
 *   "samplePath": "entities/warden",
 *   "field": "max",
 *   "template": [
 *     { "type": "literal", "text": "like a Warden (" },
 *     { "type": "value", "field": "__sampleValue" },
 *     { "type": "literal", "text": " HP)" }
 *   ]
 * }
 * // → "like a Warden (500 HP)"
 */
export interface ISampleToken extends ISummarizerTokenBase {
  type: "sample";

  /**
   * Path to the sample in the form's samples collection.
   * e.g., "entities/warden", "items/diamond_sword"
   */
  samplePath: string;

  /**
   * Field within the sample to extract.
   */
  field: string;

  /**
   * Tokens to output. Use { "type": "value", "field": "__sampleValue" }
   * to insert the extracted sample value.
   */
  template: ISummarizerToken[];

  /**
   * Humanify algorithm for the sample name (derived from samplePath).
   * @default "minecraft"
   */
  humanifySampleName?: SummarizerHumanifyType | string;
}

/**
 * Unit token: formats a value with units and optional conversion.
 *
 * @example
 * // Simple unit display
 * {
 *   "type": "unit",
 *   "field": "health",
 *   "unit": "HP"
 * }
 * // With { health: 100 } → "100 HP"
 *
 * @example
 * // With unit conversion
 * {
 *   "type": "unit",
 *   "field": "duration",
 *   "unit": "ticks",
 *   "conversion": {
 *     "targetUnit": "seconds",
 *     "factor": 0.05
 *   },
 *   "showBoth": true
 * }
 * // With { duration: 200 } → "200 ticks (10 seconds)"
 *
 * @example
 * // Blocks/meters conversion
 * {
 *   "type": "unit",
 *   "field": "range",
 *   "unit": "blocks",
 *   "pluralize": true
 * }
 * // With { range: 1 } → "1 block"
 * // With { range: 5 } → "5 blocks"
 */
export interface IUnitToken extends ISummarizerTokenBase {
  type: "unit";

  /**
   * Field containing the numeric value.
   */
  field: string;

  /**
   * The unit name (e.g., "HP", "blocks", "ticks", "seconds").
   */
  unit: string;

  /**
   * Plural form of the unit (e.g., "block" → "blocks").
   * If not provided and pluralize is true, adds "s".
   */
  unitPlural?: string;

  /**
   * Whether to pluralize the unit based on the value.
   * @default false
   */
  pluralize?: boolean;

  /**
   * Optional conversion to another unit.
   */
  conversion?: {
    /**
     * Name of the converted unit.
     */
    targetUnit: string;

    /**
     * Multiply original value by this factor to get converted value.
     */
    factor: number;

    /**
     * Plural form of target unit.
     */
    targetUnitPlural?: string;

    /**
     * Decimal places for converted value.
     * @default 1
     */
    decimals?: number;
  };

  /**
   * If conversion is defined, whether to show both values.
   * @default true
   */
  showBoth?: boolean;

  /**
   * Format for the parenthetical when showBoth is true.
   * @default "({value} {unit})"
   */
  bothFormat?: string;
}

/**
 * Exists token: outputs tokens only if a field is defined (or undefined).
 *
 * Useful for optional fields where presence/absence is meaningful.
 *
 * @example
 * {
 *   "type": "exists",
 *   "field": "loot_table",
 *   "whenDefined": [
 *     { "type": "literal", "text": "has a custom loot table" }
 *   ],
 *   "whenUndefined": [
 *     { "type": "literal", "text": "uses default loot" }
 *   ]
 * }
 *
 * @example
 * // Only show something when defined, nothing otherwise
 * {
 *   "type": "exists",
 *   "field": "on_death_event",
 *   "whenDefined": [
 *     { "type": "literal", "text": "triggers an event on death" }
 *   ]
 * }
 */
export interface IExistsToken extends ISummarizerTokenBase {
  type: "exists";

  /**
   * Field to check for existence.
   */
  field: string;

  /**
   * Tokens to output when the field IS defined.
   */
  whenDefined: ISummarizerToken[];

  /**
   * Tokens to output when the field is NOT defined.
   * If not provided, outputs nothing when undefined.
   */
  whenUndefined?: ISummarizerToken[];

  /**
   * If true, also treat empty strings, empty arrays, and empty objects as "undefined".
   * @default false
   */
  treatEmptyAsUndefined?: boolean;
}

/**
 * Group token: groups tokens together, useful for shared visibility.
 *
 * @example
 * // A parenthetical that only appears under certain conditions
 * {
 *   "type": "group",
 *   "visibility": [{ "field": "max", "comparison": ">", "value": 100 }],
 *   "tokens": [
 *     { "type": "literal", "text": " (" },
 *     { "type": "reference", "field": "max", "referenceId": "iron_golem_health", ... },
 *     { "type": "literal", "text": ")" }
 *   ]
 * }
 */
export interface IGroupToken extends ISummarizerTokenBase {
  type: "group";

  /**
   * Tokens in this group.
   */
  tokens: ISummarizerToken[];
}

/**
 * Conjunction token: joins child token arrays with a conjunction.
 *
 * @example
 * {
 *   "type": "conjunction",
 *   "conjunction": "and",
 *   "items": [
 *     { "tokens": [{ "type": "literal", "text": "can fly" }] },
 *     { "tokens": [{ "type": "literal", "text": "can swim" }] }
 *   ]
 * }
 * // → "can fly and can swim"
 *
 * @example
 * // With "but" for contrasts
 * {
 *   "type": "conjunction",
 *   "conjunction": "but",
 *   "items": [
 *     { "tokens": [{ "type": "literal", "text": "is immune to fire" }] },
 *     { "tokens": [{ "type": "literal", "text": "is weak to water" }] }
 *   ]
 * }
 * // → "is immune to fire but is weak to water"
 */
export interface IConjunctionToken extends ISummarizerTokenBase {
  type: "conjunction";

  /**
   * The conjunction word to use.
   */
  conjunction: "and" | "or" | "but" | string;

  /**
   * Items to join with the conjunction.
   */
  items: IListItem[];
}

/**
 * Union type of all summarizer token types.
 */
export type ISummarizerToken =
  | ILiteralToken
  | IValueToken
  | ISwitchToken
  | IListToken
  | ITemplateToken
  | IPluralToken
  | ISampleToken
  | IUnitToken
  | IExistsToken
  | IGroupToken
  | IConjunctionToken;
