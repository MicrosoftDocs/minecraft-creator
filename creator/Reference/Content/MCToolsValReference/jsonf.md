---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:jsonf"
description: "Describes the minecraft:jsonf mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:jsonf

Validates JSON files against Minecraft documentation-derived form schemas. These schemas define the expected structure, types, and constraints for Minecraft content files like entity definitions, block definitions, spawn rules, etc. The validator checks type compatibility, value ranges, string lengths, required fields, enum values, and more based on metadata in form.json files.

This validator uses DataFormValidator to check JSON data against IFormDefinition schemas loaded from the public/data/forms/ directory. Forms are matched to content types via ProjectItemUtilities.getFormPathForType(). The validator recursively checks nested objects and keyed collections.

> [!Note]
> Form schemas are derived from Minecraft Creator documentation and may not cover all valid content patterns. Some Minecraft features support multiple value formats (e.g., damage can be a number or a range) that may not be fully represented in the schema alternates.

> [!Note]
> The unexpectedProperty (120) check is disabled by default since Minecraft content formats generally allow additional properties not explicitly defined in documentation.


## JSON Form Structure Validation Validation Rules


### JSONF101: Unexpected String Where Object Expected

**Rule ID:** `JSONF101`

**Severity:** Error

**What it checks:** A string value was found where an object was expected. The form schema expects this field to be an object with properties, not a scalar string.

**How to fix:** Replace the string value with an object containing the expected properties. Check the Minecraft Creator documentation for the correct structure.


### JSONF102: Unexpected Boolean Where Object Expected

**Rule ID:** `JSONF102`

**Severity:** Error

**What it checks:** A boolean value was found where an object was expected. The form schema expects this field to be an object with properties, not a true/false value.

**How to fix:** Replace the boolean value with an object containing the expected properties. Check the Minecraft Creator documentation for the correct structure.


### JSONF103: Unexpected Number Where Object Expected

**Rule ID:** `JSONF103`

**Severity:** Error

**What it checks:** A number value was found where an object was expected. The form schema expects this field to be an object with properties, not a numeric value.

**How to fix:** Replace the numeric value with an object containing the expected properties. Check the Minecraft Creator documentation for the correct structure.


### JSONF110: Data Type Mismatch

**Rule ID:** `JSONF110`

**Severity:** Warning

**What it checks:** The data type of a field does not match what the schema expects. For example, a string was provided where a number was expected, or an array was provided where an object was expected.

**How to fix:** Check the expected type in the Minecraft Creator documentation and update your value accordingly. Common type issues include: using strings for numeric values, using numbers for version strings, or using single values where arrays are expected.

**Technical details:** This is triggered when DataFormValidator.getDataMismatchError() finds the JavaScript typeof the data doesn't match any of the expected FieldDataType values for the field or its alternates.


### JSONF111: Value Below Minimum

**Rule ID:** `JSONF111`

**Severity:** Warning

**What it checks:** A numeric value is below the minimum allowed value defined in the schema. The field has a minValue constraint that this value violates.

**How to fix:** Increase the value to at least the minimum allowed. Check the Minecraft Creator documentation for valid value ranges.

**Technical details:** Triggered when field.minValue is defined and the data value is less than minValue.


### JSONF112: Value Above Maximum

**Rule ID:** `JSONF112`

**Severity:** Warning

**What it checks:** A numeric value exceeds the maximum allowed value defined in the schema. The field has a maxValue constraint that this value violates.

**How to fix:** Decrease the value to at most the maximum allowed. Check the Minecraft Creator documentation for valid value ranges.

**Technical details:** Triggered when field.maxValue is defined and the data value is greater than maxValue.


### JSONF113: String Too Short

**Rule ID:** `JSONF113`

**Severity:** Warning

**What it checks:** A string value is shorter than the minimum length required by the schema. The field has a minLength constraint that this value violates.

**How to fix:** Provide a longer string value that meets the minimum length requirement.

**Technical details:** Triggered when field.minLength is defined and data.length is less than minLength.


### JSONF114: String Too Long

**Rule ID:** `JSONF114`

**Severity:** Warning

**What it checks:** A string value exceeds the maximum length allowed by the schema. The field has a maxLength constraint that this value violates.

**How to fix:** Shorten the string value to meet the maximum length requirement. Very long strings may cause issues in Minecraft.

**Technical details:** Triggered when field.maxLength is defined and data.length is greater than maxLength.


### JSONF115: Value Not in Choices

**Rule ID:** `JSONF115`

**Severity:** Warning

**What it checks:** The value is not one of the allowed choices defined in the schema. The field has a fixed set of valid values and the provided value is not among them.

**How to fix:** Use one of the allowed values listed in the error message. Check the Minecraft Creator documentation for the complete list of valid options for this field.

**Technical details:** Triggered when field.choices is defined, field.mustMatchChoices is not false, and the value is not found in the choices array.


### JSONF116: Pattern Mismatch

**Rule ID:** `JSONF116`

**Severity:** Warning

**What it checks:** A string value does not match the required pattern defined in the schema. The field has a validity condition with a regex pattern that the value must match.

**How to fix:** Update the string to match the required format. Common patterns include namespace:identifier format (e.g., 'minecraft:zombie'), version strings, or specific naming conventions.

**Technical details:** Triggered when field.validity contains a condition with comparison=ComparisonType.matchesPattern and the regex test fails.


### JSONF117: Array Length Mismatch

**Rule ID:** `JSONF117`

**Severity:** Warning

**What it checks:** An array has a different number of elements than required by the schema. The field has a fixedLength constraint specifying exactly how many elements are expected.

**How to fix:** Add or remove elements from the array to match the required length.

**Technical details:** Triggered when field.fixedLength is defined and the array length doesn't match.


### JSONF118: Point/Range Size Mismatch

**Rule ID:** `JSONF118`

**Severity:** Warning

**What it checks:** A point or range array has the wrong number of elements. Point2 requires exactly 2 elements [x, y], Point3 requires exactly 3 elements [x, y, z], and ranges require exactly 2 elements [min, max].

**How to fix:** Ensure the array has the correct number of elements for the point or range type.

**Technical details:** Triggered when the field dataType is point2 (expects 2), point3 (expects 3), floatRange (expects 2), or intRange (expects 2) and the array length doesn't match.


### JSONF119: Key Not Allowed

**Rule ID:** `JSONF119`

**Severity:** Warning

**What it checks:** A key in a keyed collection is not in the allowed keys list. The schema defines a specific set of valid keys for this collection.

**How to fix:** Use one of the allowed keys. Check the Minecraft Creator documentation for valid key names for this component or property collection.

**Technical details:** Triggered when field.allowedKeys is defined for a keyed collection (keyedObjectCollection, keyedStringCollection, etc.) and a key in the data is not in the allowedKeys array.


### JSONF120: Unexpected Property

**Rule ID:** `JSONF120`

**Severity:** Warning

**What it checks:** An object contains a property that is not defined in the schema. This may indicate a typo, deprecated property, or use of an undocumented feature.

**How to fix:** Check the property name for typos. If intentional, this may be a custom or experimental property that works but is not officially documented.

**Technical details:** Triggered when form.strictAdditionalProperties is true and the data object contains a key not defined in form.fields. By default, this check is disabled for Minecraft content since many formats allow additional properties.


### JSONF121: Missing Required Field

**Rule ID:** `JSONF121`

**Severity:** Warning

**What it checks:** A required field is missing from the object. The schema indicates this field must be present for the content to work correctly.

**How to fix:** Add the missing required field with an appropriate value. Check the Minecraft Creator documentation for the expected format and valid values.

**Technical details:** Triggered when field.isRequired is true and the data for this field is undefined or null.


### JSONF401: JSON Parse Error

**Rule ID:** `JSONF401`

**Severity:** Error

**What it checks:** Error when a JSON file could not be parsed for form validation. The file may have syntax errors such as missing commas, unquoted keys, trailing commas, or invalid escape sequences.

**How to fix:** Open the file in an editor with JSON validation to find and fix syntax errors. Common issues include: missing commas between properties, trailing commas after the last property, unquoted property names, and invalid Unicode escape sequences.

**Technical details:** Triggered when StorageUtilities.getJsonObject() returns null due to a JSON.parse() failure.


### JSONF402: Form Not Found

**Rule ID:** `JSONF402`

**Severity:** Info

**What it checks:** No documentation form schema was found for this JSON file type. The file format may not yet be documented in form.json files, or this project item type may not have a form path mapping.

**How to fix:** This is informational only. The file may still be valid - it just couldn't be validated against documentation-based form schemas. JSON Schema validation may still apply separately.

**Technical details:** Triggered when Database.ensureFormLoadedByPath() returns undefined for the form path returned by ProjectItemUtilities.getFormPathForType().
