// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import IField from "./IField";
import ISummarizer from "./ISummarizer";

/**
 * Represents a parameter in a command overload.
 * Used to define the structure of command overloads in form definitions.
 */
export interface IFormOverloadParam {
  /**
   * Name of the parameter. Should match the id of a field in the parent form.
   */
  name: string;

  /**
   * The type of the parameter (e.g., "POSITION", "BLOCK", "SELECTION").
   */
  type: string;

  /**
   * Whether this parameter is optional in this overload.
   */
  isOptional?: boolean;
}

/**
 * Represents a command overload - a specific way to call a command with different parameters.
 * Commands can have multiple overloads representing different usage patterns.
 */
export interface IFormOverload {
  /**
   * Unique identifier for this overload.
   */
  id: string;

  /**
   * Human-readable title/header for this overload.
   */
  title?: string;

  /**
   * Description of what this overload does.
   */
  description?: string;

  /**
   * The parameters for this overload, in order.
   */
  params: IFormOverloadParam[];

  /**
   * Example command strings demonstrating this overload in action.
   * Each entry is an object with a command string and an optional description.
   */
  samples?: { command: string; description?: string }[];
}

export interface IFormSample {
  /**
   * Path where the sample is exhibited, or simple description of the sample.
   */
  path: string;
  /**
   * Content of the sample, which can be a JSON object, string, number, or boolean.
   */
  content: object | string | number | boolean;
}

export interface IFormDependency {
  /**
   * Unique identifier for the dependency.
   * This should correspond to the identifier of the data structure or form that this dependency relates to.
   */
  id: string;

  /**
   * A context-specific description of the type of dependency.
   */
  type?: string;

  /**
   * Optional human-readable description of the dependency.
   * This can help clarify the purpose and usage of the dependency.
   */
  description?: string;
}

/**
 * Defines the layout style for grouped fields.
 */
export enum FieldGroupLayout {
  /**
   * Fields are rendered in a horizontal flow, wrapping to new rows as needed.
   */
  flow = "flow",
  /**
   * Fields are rendered in a compact grid layout.
   */
  grid = "grid",
  /**
   * Fields are rendered vertically but with reduced spacing.
   */
  compact = "compact",
}

/**
 * IFieldGroup defines a group of related fields that should be rendered together
 * in a more compact or visually cohesive manner.
 */
export interface IFieldGroup {
  /**
   * Unique identifier for the field group.
   * Fields reference this via their groupId property.
   */
  id: string;

  /**
   * Optional human-readable title for the group.
   * Displayed once for the entire group, not repeated per field.
   */
  title?: string;

  /**
   * Optional human-readable description for the group.
   * Displayed once for the entire group instead of repeating per field.
   */
  description?: string;

  /**
   * Layout style for the grouped fields.
   * Defaults to "flow" which renders fields horizontally with wrapping.
   */
  layout?: FieldGroupLayout;

  /**
   * If true, individual field titles are hidden (only group title is shown).
   * Field titles will still appear as placeholders or tooltips.
   */
  hideFieldTitles?: boolean;

  /**
   * If true, individual field descriptions are hidden (only group description is shown).
   */
  hideFieldDescriptions?: boolean;
}

/**
 * IFormDefinition represents a structured definition of a form that describes a data structure.
 * It includes metadata, fields, dependencies, and other relevant information about the form.
 * This interface is used to define the schema and structure of forms in the dataform system.
 * For example, JSON documents can be represented at the top level as an IFormDefinition.
 */
export default interface IFormDefinition {
  /**
   * Unique identifier for the form definition. Typically, this will correspond to the identifier of the data structure being described.
   */
  id?: string;

  /**
   * Optional human-readable name for the form definition.
   */
  title?: string;

  /**
   * Optional human-readable description of the form definition.
   * This should provide context and details about the form's purpose and usage.
   */
  description?: string;

  /**
   * Optional human-readable description of technical details of the form definition.
   * In practice, this is not shown in tools but is shown in technical documentation.
   * This should provide context and details about the form's purpose and usage.
   */
  technicalDescription?: string;

  /**
   * Optional version of the form definition.
   * This corresponds to the version of the data structure being described, if available.
   */
  dataVersion?: string;

  /**
   * Optional list of fields that are part of the form definition.
   * Each field should conform to the IField interface.
   * This is the fundamental structure of the form definition, detailing the data it can contain.
   */
  fields: IField[];

  /**
   * Optional list of field groups that define how related fields should be rendered together.
   * Fields reference groups via their groupId property.
   */
  fieldGroups?: IFieldGroup[];

  /**
   * A base definition of the data in this form that can be used as foundation for any annotations or modifications.
   * The generated_doNotEdit and generatedFromSchema_doNotEdit properties are filled out using external build tools,
   * so they should not be modified directly. Rather, if you want to modify, say, a field and its title and description,
   * you should copy that field instance from generated_doNotEdit.fields or generatedFromSchema_doNotEdit.fields into
   * the root .fields property. Any property of the  generated_doNotEdit?: IFormDefinition can be overridden in this
   * way, by duplicating and modifying it into the root IFormDefinition.
   */
  generated_doNotEdit?: IFormDefinition;

  /**
   * A base definition of the data in this form that can be used as foundation for any annotations or modifications.
   * The generated_doNotEdit and generatedFromSchema_doNotEdit properties are filled out using external build tools,
   * so they should not be modified directly. Rather, if you want to modify, say, a field and its title and description,
   * you should copy that field instance from generated_doNotEdit.fields or generatedFromSchema_doNotEdit.fields into
   * the root .fields property. Any property of the  generated_doNotEdit?: IFormDefinition can be overridden in this
   * way, by duplicating and modifying it into the root IFormDefinition.
   */
  generatedFromSchema_doNotEdit?: IFormDefinition;

  /**
   * Any additional English descriptions about notes for this data of this form definition.
   * .note vs. .note2 vs. .note3 are expected to be different "topics" for notes.
   */
  note?: string;

  /**
   * Any additional English descriptions about notes for this data of this form definition.
   * .note vs. .note2 vs. .note3 are expected to be different "topics" for notes.
   */
  note2?: string;

  /**
   * Any additional English descriptions about notes for this data of this form definition.
   * .note vs. .note2 vs. .note3 are expected to be different "topics" for notes.
   */
  note3?: string;

  /**
   * For the data object being described, the version that this schema was introduced in.
   */
  versionIntroduced?: string;

  /**
   * For the data object being described, the version that this schema was no longer maintained or supported.
   */
  versionDeprecated?: string;

  /**
   * Optional list of dependencies that this form definition requires.
   * The concept of "requires" is context-specific and can vary based on the form's purpose.
   */
  requires?: IFormDependency[];

  /**
   * A set of topical annotations for this form definition.
   */
  tags?: string[];

  /**
   * Optional list of dependencies that this form definition requires.
   * The concept of "restrictions" is context-specific and can vary based on the form's purpose.
   */
  restrictions?: IFormDependency[];

  /**
   * Optional boolean indicating if the form definition is deprecated and no longer recommended for use.
   */
  isDeprecated?: boolean;

  /**
   * Optional boolean indicating if the form definition is internal and not intended for public use.
   */
  isInternal?: boolean;

  /**
   * Optional boolean indicating if the form definition is experimental and may change or may be removed in future versions.
   */
  isExperimental?: boolean;

  /**
   * Optional string indicating the name of the experiment that this form definition is associated with.
   */
  requiredExperiment?: string;

  /**
   * In some schemas, this object may be represented with a simpler scalar value, like a number or a string. This field
   * identifies a subfield that provides schema representation of that scalar value.
   * For example, in some schemas you can represent a object reference as either
   * {
   *  "model": "geometry:skeleton"
   * }
   * OR
   * {
   *  "model": { "id": "geometry:skeleton", "priority" : 3 }
   * }
   * In this example a form representing the structure of the { id, priority } model reference object, the scalarFieldUpgradeName would be "id"
   * since that field is the scalar representation of the object.
   */

  scalarFieldUpgradeName?: string;

  /**
   * In some schemas, this object may be represented with a simpler scalar value, like a number or a string. This field
   * provides a definition for what the simpler "scalar" representation should be.
   */
  scalarField?: IField;

  /**
   * An optional set of samples that can be used to illustrate the form definition.
   */
  samples?: { [path: string]: IFormSample[] };

  /**
   * If this object has an open schema and supports arbitrary fields, this field can be used to define the format of those arbitrary fields.
   */
  customField?: IField;

  /**
   * Optional list of form definition IDs that this form is an alias of.
   * When this form is essentially the same as another form, this property can reference the canonical form(s).
   * Useful for command parameter types that have multiple names for the same underlying type.
   */
  aliasOf?: string[];

  /**
   * Optional format hint string showing the expected syntax or pattern for data of this form.
   * For example, "@a, @e, @p, @r, @s" for entity selectors, or "x y z" for positions.
   */
  formatHint?: string;

  /**
   * For command forms, the list of command overloads representing different ways to call the command.
   * Each overload has a specific set of parameters.
   */
  overloads?: IFormOverload[];

  /**
   * For command forms, a list of alias names for this command.
   * For example, "teleport" has an alias "tp".
   * Note: This is different from `aliasOf` which points to other forms this is an alias of.
   */
  aliases?: string[];

  /**
   * For command forms, the permission level required to execute the command.
   * 0 = any, 1 = game directors, 2 = admin, 3 = host, 4 = owner.
   */
  permissionLevel?: number;

  /**
   * For command forms, whether cheats must be enabled to use this command.
   */
  requiresCheats?: boolean;

  /**
   * For command forms, example command strings demonstrating the command in action.
   * These are rendered in an "Examples" section at the bottom of the command doc page.
   */
  commandSamples?: { command: string; description?: string }[];

  /**
   * Controls whether the validator should flag unexpected properties that are not defined in the form's fields.
   * If true, the validator will report any properties that are not in the schema as validation errors.
   * If false or undefined, unexpected properties will be allowed (default behavior for Minecraft content).
   */
  strictAdditionalProperties?: boolean;

  /**
   * Optional summarizer definition for generating natural language descriptions.
   * When present, a summary card will be displayed at the top of the form showing
   * a human-readable description of the current data values.
   *
   * Summarizers can be:
   * - Inline: Full ISummarizer object embedded in the form
   * - External: Loaded from a .summarizer.json file alongside the form
   *
   * @example
   * // Inline summarizer
   * {
   *   "summarizer": {
   *     "phrases": [
   *       { "tokens": [{ "type": "literal", "text": "has " }, { "type": "value", "field": "max" }, { "type": "literal", "text": " HP" }] }
   *     ]
   *   }
   * }
   */
  summarizer?: ISummarizer;

  /**
   * ID of an external summarizer definition file.
   * If provided, the summarizer will be loaded from this path.
   * Format: \"category/name\" - always relative to the forms folder.
   * Does NOT include the .summarizer.json suffix.
   *
   * @example \"entity/minecraft_health\"
   */
  summarizerId?: string;

  /**
   * Optional noun to use in summarizer output.
   * When present, the summarizer will prepend "This <noun>" to the summary.
   * If not provided and no prefix is specified at render time, the first letter
   * of the summary will be capitalized.
   *
   * @example "feature rule" → "This feature rule defines..."
   * @example "entity" → "This entity has..."
   */
  summarizerNoun?: string;
}
