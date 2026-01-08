// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export enum ComparisonType {
  equals = "=",
  lessThan = "<",
  lessThanOrEqualTo = "<=",
  greaterThan = ">",
  greaterThanOrEqualTo = ">=",
  isDefined = "defined",
  isLiterallyDefined = "literallyDefined",
  isNonEmpty = "nonempty",
  matchesPattern = "pattern",
}

/**
 * Represents a condition that can be evaluated against data.
 *
 * Conditions are used to determine visibility of fields, validity of data,
 * and for summarizer token switching logic.
 *
 * @example
 * // Check if a field equals a specific value
 * { "field": "max", "comparison": "=", "value": 100 }
 *
 * @example
 * // Check if a boolean field is true
 * { "field": "can_fly", "comparison": "=", "value": true }
 *
 * @example
 * // Check if a numeric field is greater than a threshold
 * { "field": "health", "comparison": ">", "value": 50 }
 *
 * @example
 * // Check if a field is defined (not undefined/null)
 * { "field": "loot_table", "comparison": "defined" }
 */
export default interface ICondition {
  /**
   * The field path to check. Supports dot notation for nested fields.
   * @example "max", "damage.min", "components.health"
   */
  field?: string;

  /**
   * The comparison operation to perform.
   */
  comparison: ComparisonType | string;

  /**
   * The value to compare against.
   * Supports numbers, strings, and booleans.
   */
  value?: number | string | boolean;

  /**
   * Alternative: match if the field value equals ANY of these values.
   * Useful for enum-like checks.
   */
  anyValues?: number[] | string[] | boolean[];
}
