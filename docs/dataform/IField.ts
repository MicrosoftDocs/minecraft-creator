// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import ISimpleReference from "./ISimpleReference";
import ICondition from "./ICondition";
import IFormDefinition, { IFormSample } from "./IFormDefinition";

export enum FieldExperienceType {
  text = "text",
  dropdown = "dropdown",
  slider = "slider",
}

export enum FieldVisualExperience {
  normal = "normal",
  deemphasized = "deemphasized",
}

export enum FieldDataType {
  /**
   * Represents a 32-bit integer value.
   */
  int = "int",
  /**
   * Represents a boolean value (true or false).
   */
  boolean = "boolean",
  /**
   * Represents a string value.
   */
  string = "string",
  /**
   * Represents a floating-point number.
   */
  float = "float",
  /**
   * Represents a string that can take on a limited set of values, often used for enumerations.
   */
  stringEnum = "stringEnum",
  /**
   * Represents an integer that can take on a limited set of values, often used for enumerations.
   */
  intEnum = "intEnum",
  /**
   * Represents a boolean value that can be represented as an integer (0 or 1).
   * This is often used for compatibility with systems that expect boolean values as integers.
   */
  intBoolean = "intBoolean",
  /**
   * Represents a numeric value (integer or floating-point).
   */
  number = "number",
  /**
   * Represents a string-based value that is chosen from a typically data-driven set of options (a lookup).
   */
  stringLookup = "stringLookup",

  /**
   * Represents an integer-based value that is chosen from a typically data-driven set of options (a lookup).
   */
  intValueLookup = "intValueLookup",

  /**
   * Represents a long integer value, which is typically a 64-bit integer.
   * This is used for larger numeric values that exceed the range of standard integers.
   */
  long = "long",

  /**
   * Represents a point in 3D space, with x, y, and z coordinates.
   */
  point3 = "point3",
  /**
   * Represents a point in 3D space, with integer x, y, and z coordinates.
   */
  intPoint3 = "intPoint3",
  /**
   * Represents a long-form string, which is typically used for very long text entries.
   * This is often used in contexts where the string may exceed standard length limits.
   */
  longFormString = "longFormString",
  /**
   * Represents a collection of objects where each object is identified by a unique string key.
   * For example, { "foo": {x: 1, z: 3}, "bar": {x:10, y: 4} }
   */
  keyedObjectCollection = "keyedObjectCollection",
  /**
   * Represents an array of objects, where each object can have multiple properties.
   * For example, [ { x: 1, id: "alpha", z: 3}, { x: 1, id: "bravo", z: 3} ]
   */
  objectArray = "objectArray",
  /**
   * Represents a generic object that can have any structure.
   */
  object = "object",
  /**
   * Represents an array of strings, which is often used for lists of text values.
   */
  stringArray = "stringArray",
  /**
   * Represents a range of integers. This can either be represented as a pair of integers on an object with min and max properties, or as a two element array, or as a single integer if the range is collapsed.
   * For example, { "min": 0, "max": 100 } or [0, 100] or 50.
   */
  intRange = "intRange",
  /**
   * Represents a range of floating-point numbers. This can either be represented as a pair of floats on an object with min and max properties, or as a two element array, or as a single float if the range is collapsed.
   * For example, { "min": 0.4, "max": 99.6 } or [0.4, 99.6] or 48.8.
   */
  floatRange = "floatRange",
  /**
   * Represents a filter that is specific to Minecraft, which can be used to filter entities or blocks based on certain criteria.
   * This is fundamentally an object, e.g.,
   * "filters": {
   *   "test": "in_lava", "subject": "self"
   *  }
   */
  minecraftFilter = "minecraftFilter",
  /**
   * Represents a range of floating-point numbers that represent a percentage chance, and the numbers should range between 0.0 and 1.0. This can either be represented as a pair of floats on an object with min and max properties, or as a two element array, or as a single float if the range is collapsed.
   * For example, { "min": 0.04, "max": 0.996 } or [0.04, 0.996] or 0.488.
   */
  percentRange = "percentRange",

  /**
   * Represents a single Minecraft event trigger, which can be used to specify the identifier and context for an action that should fire.
   */
  minecraftEventTrigger = "minecraftEventTrigger",
  /**
   * Represents an array of long-form string that can contain multiple lines of text, often used for detailed descriptions or notes.
   */
  longFormStringArray = "longFormStringArray",
  /**
   * Represents a collection of key-value pairs where each key is a string and the value is also a string.
   * For example, { "foo": "blah", "barg" : "borg" }
   */
  keyedStringCollection = "keyedStringCollection",
  /**
   * Represents a version, which can either be a semantic version string (e.g., "1.2.3") or a simple version number or an array of three numbers, for major, minor, and patch version.
   */
  version = "version",
  /**
   * Represents a universally unique identifier (UUID), which is a 128-bit number used to uniquely identify information in computer systems.
   * This is typically represented as a string in the format "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".
   */
  uuid = "uuid",
  /**
   * Represents a collection of key-value pairs where each key is a string and the value is a boolean.
   * For example, { "foo": true, "blah": false }
   */
  keyedBooleanCollection = "keyedBooleanCollection",
  /**
   * Represents a collection of key-value pairs where each key is a string and the value is an array of strings.
   * For example, { "foo": ["blah", "alpha"], "barg" : ["borg"] }
   */
  keyedStringArrayCollection = "keyedStringArrayCollection",
  /**
   * Represents an array of keyed string collections, where each element is a collection of key-value pairs.
   * For example, [ { "blah": "alpha", "blaz": "blay" }, {"barg": "borg"} ]
   */
  arrayOfKeyedStringCollection = "arrayOfKeyedStringCollection",
  /**
   * Represents a collection of key-value pairs where each key is a string and the value is by itself a keyed string collection of an array of strings.
   * For example, { "alpha":  { "foo": ["blah", "alpha"], "barg" : ["borg"] } }
   */
  keyedKeyedStringArrayCollection = "keyedKeyedStringArrayCollection",
  /**
   * Represents a collection of key-value pairs where each key is a string and the value is a number.
   * For example, { "foo": 17, "blah": 43 }
   */
  keyedNumberCollection = "keyedNumberCollection",
  /**
   * Represents an array of numbers.
   */
  numberArray = "numberArray",
  /**
   * Represents a checkbox list that is represented as an array of strings.
   */
  checkboxListAsStringArray = "checkboxListAsStringArray",
  /**
   * Represents a Molang expression in string form, which is a Minecraft-specific language used for data-driven content.
   */
  molang = "molang",
  /**
   * Represents an array of Molang expressions (an array of strings), which can be used to define multiple data-driven behaviors or properties in Minecraft.
   */
  molangArray = "molangArray",
  /**
   * Represents a point in 2D space, with x and y coordinates.
   * This is often used for 2D graphical representations or spatial calculations.
   */
  point2 = "point2",
  /**
   * Represents a localizable string, which is a string that is a token that is a refence to a localized string in a resource file. Or it can be a string literal (unlocalized)
   */
  localizableString = "localizableString",
  /**
   * Represents a keyed collection of numbers, where each key is a string and the value is an array of numbers.
   * For example, { "foo": [255, 0.0, 2555], "barg" : [128, 0, 0] }
   */
  keyedNumberArrayCollection = "keyedNumberArrayCollection",
  /**
   * Represents a reference to a Minecraft event, which can be used to specify the identifier and context for an action that should fire.
   */
  minecraftEventReference = "minecraftEventReference",
  /**
   * Represents a location in 3D space, with x, y, and z coordinates but that is intended to be a location in a Minecraft world.
   */
  location = "location",
  /**
   * Represents a location in 3D space, with x, y, and z coordinates but that is intended to be a location offset adjustment in a Minecraft world.
   */
  locationOffset = "locationOffset",
  /**
   * Represents an array of Minecraft event triggers, which can be used to specify multiple identifiers and contexts for actions that should fire.
   */
  minecraftEventTriggerArray = "minecraftEventTriggerArray",
  /**
   * Represents a two dimensional string array, i.e.., string[][], e.g., [ ["a", "b"], ["c", "d"] ]
   */
  twoDStringArray = "twoDStringArray",
  /**
   * Represents an array where each item can be either a string or an object.
   * This is commonly used for animation references like ["animation.walk", { "animation.jump": "query.is_jumping" }]
   * Each item in the array can be a simple string reference OR an object with conditional properties.
   */
  stringOrObjectArray = "stringOrObjectArray",
  /**
   * Represents an array of tuples where each tuple is [string, number].
   * This is used for weighted lists like generate_for_climates: [["medium", 1], ["cold", 2]]
   */
  stringNumberTupleArray = "stringNumberTupleArray",
  /**
   * Represents a single item that can be either a string or an object (not an array).
   * Used when a field accepts "animation_name" OR { "animation_name": "condition" }
   */
  stringOrObject = "stringOrObject",
  /**
   * Represents a two dimensional array where each inner array contains Molang values (string OR number).
   * This is used for gradient colors like: [[1.0, 0.5, 0.5, 1.0], ["variable.color", 0.5, 0.5, 1.0]]
   * Schema: Array<Array<string | number>>
   */
  twoDMolangArray = "twoDMolangArray",
}

/**
 * Describes the way field values should be converted to a more human-readable format.
 */
export enum FieldValueHumanify {
  none = "none",
  general = "general",
  minecraft = "minecraft",
}

/**
 * Describes the type of message for validator topic fields.
 * This aligns with InfoItemType but is simplified for form field definitions.
 */
export enum FieldMessageType {
  /**
   * Informational message - neutral status or aggregated data.
   */
  info = "info",
  /**
   * Warning message - potential issue that should be reviewed.
   */
  warning = "warning",
  /**
   * Error message - a definite problem that should be fixed.
   */
  error = "error",
  /**
   * Recommendation message - a suggestion for improvement.
   */
  recommendation = "recommendation",
}

export default interface IField {
  /**
   * Unique identifier for the field.
   */
  id: string;
  /**
   * Optional alternate identifier for the field.
   */
  altId?: string;
  /*
   * Optional group identifier for the field.
   */
  groupId?: string;
  /**
   * Optional human-readable title for the field.
   * If the title is functionally equivalent to its Id, the title can be omitted.
   */
  title?: string;
  /**
   * Optional human-readable description for the field.
   * If the description is functionally equivalent to its title, the description can be omitted.
   */
  description?: string;

  /**
   * For command form fields, the type of command parameter this field represents
   * (e.g., "SELECTION", "POSITION", "BLOCKPOS", "SET", "INT", "BOOLEAN").
   * Used by the command documentation generator to map fields to parameter types.
   */
  commandType?: string;

  /**
   * Optional human-readable guidance on how to use or fix issues related to this field.
   * For validation rules, this contains tips for how to resolve validation errors or warnings.
   */
  howToUse?: string;

  /**
   * Optional human-readable description of technical details of the field - for example, any notes
   * on how the field is persisted in JSON, or other technical details.
   * In practice, this is not shown in tools but is shown in technical documentation.
   */
  technicalDescription?: string;

  /**
   * Optional hint for diagnostic providers to locate this issue in a document.
   * Contains a JSON token or pattern to search for when highlighting this issue.
   * Examples: "format_version", "identifier", "minecraft:entity"
   */
  suggestedLineToken?: string;

  /**
   * If true, the diagnostic provider should also search for the ProjectInfoItem.data
   * value on the same line as suggestedLineToken. This helps pinpoint the exact line
   * when the data contains a specific value like a version string or identifier.
   */
  suggestedLineShouldHaveData?: boolean;

  /**
   * Any additional English descriptions about notes for this data of this field definition.
   * .note vs. .note2 vs. .note3 are expected to be different "topics" for notes.
   */
  note?: string;
  /**
   * Any additional English descriptions about notes for this data of this field definition.
   * .note vs. .note2 vs. .note3 are expected to be different "topics" for notes.
   */
  note2?: string;
  /**
   * Any additional English descriptions about notes for this data of this field definition.
   * .note vs. .note2 vs. .note3 are expected to be different "topics" for notes.
   */
  note3?: string;
  /**
   * Whether this field should be defined if it's functionally empty (e.g., an empty string or a 0 item array).
   */
  retainIfEmptyOrDefault?: boolean;

  /**
   * If this field references an object (e.g., has a dataType of 16 - object or 15 - object Array), this describes the structure of that object.
   */
  subForm?: IFormDefinition;

  /**
   * Used in override files to request merging of generated subForm content into the override's subForm.
   * When set to true, the generated subForm fields will be merged into the override's existing subForm.
   * Use this when you want to keep your override's subForm fields AND add generated fields.
   * Contrast with having just subForm without mergeSubForm, which replaces the generated subForm entirely.
   */
  mergeSubForm?: boolean;

  /*
   * If this field references an object (e.g., has a dataType of 16 - object or 15 - object Array), this is an the identifier of that sub-form.
   * This is typically a "<folder>/<file>", which maps to folder/file.form.json relative to the form directory root.
   */
  subFormId?: string;

  /*
   * In certain contexts, allowedKeys provides a list of keys that are allowed in the keyedObjectCollection or keyedStringCollection.
   */
  allowedKeys?: string[];

  /**
   * Optional version that this field was introduced in the respective object's data structure.
   */
  versionIntroduced?: string;

  /**
   * Optional version that this field was deprecated and no longer supported, maintained, or recommended in the respective object's data structure.
   */
  versionDeprecated?: string;

  /** Describes an override set of subFields for the sub form. This should only be supplied in rare cases. */
  subFields?: { [keyName: string]: IField };
  /**
   * If this field references an array of objects, this is the key that maps the array to its corresponding sub-field.
   */
  objectArrayToSubFieldKey?: string;
  /**
   * If this field references an array of objects, this is the key that maps the array to its corresponding title field.
   */
  objectArrayTitleFieldKey?: string;
  /**
   * If this field references an array of objects, this is the key that maps the array length to its sub field length.
   */
  matchObjectArrayLengthToSubFieldLength?: boolean;
  /**
   * If this field references an array of objects, this specifies that objects in the array should map to its corresponding sub-field.
   */
  matchObjectArrayToSubFieldKey?: boolean;
  /**
   * For array types, this specifies that the sub-field should be an array of objects of a fixed length.
   */
  fixedLength?: number;
  /**
   * Description of the field that is used for human-readable purposes.
   * This is typically used to provide a more user-friendly description of the key of this field.
   */
  keyDescription?: string;
  /**
   * Context-specfic identifier for data set to use for lookups for the field.
   */
  lookupId?: string;
  /**
   * If the field is a string related, the minimum length of the string.
   */
  minLength?: number;
  /**
   * If the field is a string related, the maximum length of the string.
   */
  maxLength?: number;
  /**
   * Prototype example of the data structure for new items that are created
   */
  newItemPrototype?: any;
  /**
   * Human-readable name for the field, which is used in the UI to display the field.
   */
  noun?: string;
  /**
   * When sorting this field amongst other fields, this is the priority of the field.
   * Lower numbers are sorted first, and higher numbers are sorted last.
   * If two numbers are tied, then fields are alphabetically sorted by their id.
   */
  priority?: number;
  /**
   * If this field is an array or keyed set, whether new items can be created or existing items can be deleted.
   */
  allowCreateDelete?: boolean;
  /**
   * Whether to display this field as read only.
   */
  readOnly?: boolean;
  /**
   * When displaying the field in a user interface, whether to display the title for the field.
   */
  displayTitle?: boolean;
  /**
   * Whether to force the field to be treated as a string, even if it appears to be another type.
   */
  forceString?: boolean;
  /**
   * If the field is a number, float, or integer, this specifies the minimum value that the field can take.
   */
  minValue?: number;
  /**
   * If the field is a number, float, or integer, this specifies the maximum value that the field can take.
   */
  maxValue?: number;
  /**
   * If the field is a range, this describes the standard step between numbers in the range.
   * This is typically used for sliders or other input methods that allow users to select a value within a range.
   * For example, a step of 5 between 0 and 100 would allow values like 0, 5, 10, ..., 100.
   */
  step?: number;
  /**
   * A placeholder for internal content build processes to signify that this field should NOT be merged in via automatic processes and should not really exist
   * in the final schema.
   */
  isRemoved?: boolean;

  /**
   * Specifies whether values of this field should be transformed via an algorithm to be more human-readable and "friendly".
   */
  humanifyValues?: FieldValueHumanify;

  /**
   * Specifies whether the samples for this field should be hidden in the target source (UI or documentation).
   * This is typically used for fields whether the samples are not interesting. Eg., "priority": 2 as an sample of a priority field.
   */
  hideSamples?: boolean;

  /**
   * If the field is a number, float, or integer, this specifies a soft, recommended minimum value that the field can take.
   */
  suggestedMinValue?: number;

  /**
   * If the field is a number, float, or integer, this specifies a soft, recommended maximum value that the field can take.
   */
  suggestedMaxValue?: number;

  /**
   * References another sibling field by ID whose current value should be used as this field's effective maximum.
   * For example, a "value" field with maxValueField: "max" will be clamped to the current value of the "max" field.
   */
  maxValueField?: string;

  /**
   * References another sibling field by ID whose current value should be used as this field's effective minimum.
   */
  minValueField?: string;

  /**
   * A set of context dependent tag strings that can be used to filter or categorize the field.
   */
  tags?: string[];
  /**
   * Specifies whether this field is required to have a value.
   */
  isRequired?: boolean;
  /**
   * Specifies whether this field is deprecated and should not be used in new code.
   */
  isDeprecated?: boolean;
  /**
   * Specifies whether this field is internal and not intended for public use.
   */
  isInternal?: boolean;
  /*
   * Specifies a set of conditions that can be expressed to validate whehter examples of data are correctly formed.
   */
  validity?: ICondition[];
  /*
   * Specifies a set of conditions that can be expressed to validate whehter this field should show, or not.
   */
  visibility?: ICondition[];
  /**
   * Specifies what the default value of this field should be if it's not specified in the data.
   */
  defaultValue?: string | number | boolean | number[] | string[] | object | object[] | null;
  /**
   * Specifies whether visual presentations of this data should have any additional indents
   */
  additionalIndent?: number;
  /**
   * Specifies the visual experience for the field.
   */
  visualExperience?: FieldVisualExperience;
  /**
   * Specifies a particular visual experiene for the field.
   */
  experienceType?: FieldExperienceType;
  /**
   * Specifies the data type of the field, which determines how the data is interpreted and validated.
   */
  dataType: FieldDataType;
  /**
   * Specifies a list of alternate representation for data for this field. For example, a field that is a string can have an alternate representation as a number, and would have an alternate field for it.
   */
  alternates?: IField[];
  /**
   * Specifies whether the data for this field must match the set of defined choices or lookup values.
   */
  mustMatchChoices?: boolean;
  /**
   * Specifies a fixed list of choices for this field.
   */
  choices?: ISimpleReference[];
  /**
   * Specifies a simple list of enum values for stringEnum or intEnum fields.
   * This is a shorthand alternative to choices when you don't need labels/descriptions.
   * If both enumValues and choices are provided, choices takes precedence.
   */
  enumValues?: (string | number)[];
  /**
   * Specifies the data type for additional properties in a keyed collection.
   * When set, this generates additionalProperties schema based on the specified FieldDataType.
   * For example, additionalPropertiesOf: FieldDataType.molangArray would generate
   * additionalProperties with the Molang array schema.
   */
  additionalPropertiesOf?: FieldDataType;
  /**
   * Specifies a set of specific samples of data values for this field.
   */
  samples?: { [path: string]: IFormSample[] };
  /**
   * Specifies a UX variant for how this field should be rendered.
   * This allows different visual experiences for the same data type.
   *
   * Supported variants by data type:
   * - minecraftFilter (dataType 20):
   *   - "biome": Simplified biome tag selector with categorized checkboxes
   *
   * The variant editor should auto-detect if existing data is too complex for the
   * simplified view and fall back to the standard editor. A toggle allows users
   * to switch between simplified and advanced modes.
   */
  uxVariant?: string;
  /**
   * Specifies matched values that reference project updaters. Used in mctoolsval forms
   * to associate topic IDs with their corresponding updaters.
   */
  matchedValues?: { [key: string]: string };
  /**
   * For validator topic fields, specifies the type of message (info, warning, error, recommendation).
   * This helps categorize the severity or nature of validation results.
   */
  messageType?: FieldMessageType;
  /**
   * Per-field summarizer for generating human-readable descriptions of this field's value.
   * Used by JSON editor value decorations to show contextual information inline.
   *
   * This allows fields to define how their values should be visualized and summarized,
   * enabling features like:
   * - Health bars for health values
   * - Color swatches for color values
   * - Speed comparisons for movement values
   * - Probability bars for chance values
   *
   * @example
   * // For a health value field
   * "valueSummarizer": {
   *   "type": "healthBar",
   *   "maxReference": 100,
   *   "unit": "HP"
   * }
   *
   * @example
   * // For a movement speed field
   * "valueSummarizer": {
   *   "type": "comparison",
   *   "references": [
   *     { "value": 0.1, "label": "a Turtle" },
   *     { "value": 0.25, "label": "a Player" },
   *     { "value": 0.3, "label": "a Spider" }
   *   ]
   * }
   */
  valueSummarizer?: IFieldValueSummarizer;

  /**
   * Specifies an action to offer on values of this field, such as navigating to a project resource.
   * When set, the data form renderer will add a clickable action button next to each value.
   *
   * Supported actions:
   * - "openProjectItem": Treat the value as a resource path and navigate to the matching project item.
   */
  valueAction?: string;
}

/**
 * Defines how a field value should be summarized for visual display in the JSON editor.
 */
export interface IFieldValueSummarizer {
  /**
   * The type of visualization to use.
   */
  type: FieldValueSummarizerType;

  /**
   * The unit to display after values (e.g., "HP", "blocks/sec", "%").
   */
  unit?: string;

  /**
   * For bar visualizations, the maximum value for scaling.
   */
  maxReference?: number;

  /**
   * For comparison-based summarization, reference values to compare against.
   */
  references?: IFieldValueReference[];

  /**
   * Icon to display (emoji or icon name).
   */
  icon?: string;

  /**
   * Format string for the value (e.g., "{value}x" for scale, "{value}%" for percentages).
   */
  format?: string;

  /**
   * For color values, whether to show a color swatch.
   */
  showColorSwatch?: boolean;

  /**
   * Custom thresholds for qualitative descriptions.
   */
  thresholds?: IFieldValueThreshold[];
}

/**
 * The type of value summarizer visualization.
 */
export enum FieldValueSummarizerType {
  /**
   * Simple text display with optional unit.
   */
  text = "text",

  /**
   * Health bar visualization (hearts or bar).
   */
  healthBar = "healthBar",

  /**
   * Probability bar visualization (0-100% or 0-1).
   */
  probabilityBar = "probabilityBar",

  /**
   * Scale indicator showing percentage of normal size.
   */
  scale = "scale",

  /**
   * Time visualization (ticks converted to seconds).
   */
  time = "time",

  /**
   * Distance visualization with block unit.
   */
  distance = "distance",

  /**
   * Color swatch for color values.
   */
  color = "color",

  /**
   * Comparison against known reference values.
   */
  comparison = "comparison",

  /**
   * Qualitative description based on thresholds.
   */
  qualitative = "qualitative",
}

/**
 * A reference value for comparison-based summarization.
 */
export interface IFieldValueReference {
  /**
   * The reference value.
   */
  value: number;

  /**
   * Human-readable label for this reference (e.g., "a Player", "an Iron Golem").
   */
  label: string;

  /**
   * Optional icon for this reference.
   */
  icon?: string;
}

/**
 * A threshold for qualitative descriptions.
 */
export interface IFieldValueThreshold {
  /**
   * Values at or below this threshold get this description.
   */
  maxValue: number;

  /**
   * The qualitative description (e.g., "very low", "moderate", "extremely high").
   */
  description: string;

  /**
   * Optional sentiment for styling.
   */
  sentiment?: "positive" | "negative" | "neutral" | "warning";

  /**
   * Optional icon for this threshold level.
   */
  icon?: string;
}
