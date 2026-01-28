---
author: mammerla
ms.author: mikeam
title: "Validation Rules - JSON Form Structure Validation"
description: "Documentation for JSON Form Structure Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# JSON Form Structure Validation Validation Rules
Validates JSON files against Minecraft documentation-derived form schemas. These schemas define the expected structure, types, and constraints for Minecraft content files like entity definitions, block definitions, spawn rules, etc. The validator checks type compatibility, value ranges, string lengths, required fields, enum values, and more based on metadata in form.json files.
> [!TIP]
> **Technical Details**: This validator uses DataFormValidator to check JSON data against IFormDefinition schemas loaded from the public/data/forms/ directory. Forms are matched to content types via ProjectItemUtilities.getFormPathForType(). The validator recursively checks nested objects and keyed collections.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [JSONF101](#jsonf101) | Unexpected String Where Object Expected | 🔴 Error |  |
| [JSONF102](#jsonf102) | Unexpected Boolean Where Object Expected | 🔴 Error |  |
| [JSONF103](#jsonf103) | Unexpected Number Where Object Expected | 🔴 Error |  |
| [JSONF110](#jsonf110) | Data Type Mismatch | 🟡 Warning |  |
| [JSONF111](#jsonf111) | Value Below Minimum | 🟡 Warning |  |
| [JSONF112](#jsonf112) | Value Above Maximum | 🟡 Warning |  |
| [JSONF113](#jsonf113) | String Too Short | 🟡 Warning |  |
| [JSONF114](#jsonf114) | String Too Long | 🟡 Warning |  |
| [JSONF115](#jsonf115) | Value Not in Choices | 🟡 Warning |  |
| [JSONF116](#jsonf116) | Pattern Mismatch | 🟡 Warning |  |
| [JSONF117](#jsonf117) | Array Length Mismatch | 🟡 Warning |  |
| [JSONF118](#jsonf118) | Point/Range Size Mismatch | 🟡 Warning |  |
| [JSONF119](#jsonf119) | Key Not Allowed | 🟡 Warning |  |
| [JSONF120](#jsonf120) | Unexpected Property | 🟡 Warning |  |
| [JSONF121](#jsonf121) | Missing Required Field | 🟡 Warning |  |
| [JSONF401](#jsonf401) | JSON Parse Error | 🔴 Error |  |
| [JSONF402](#jsonf402) | Form Not Found | ℹ️ Info |  |

---
## Rule Details

### JSONF101
**🔴 Unexpected String Where Object Expected**  
**Severity**: Error

#### What This Checks
A string value was found where an object was expected. The form schema expects this field to be an object with properties, not a scalar string.

#### How to Fix
Replace the string value with an object containing the expected properties. Check the Minecraft Creator documentation for the correct structure.

### JSONF102
**🔴 Unexpected Boolean Where Object Expected**  
**Severity**: Error

#### What This Checks
A boolean value was found where an object was expected. The form schema expects this field to be an object with properties, not a true/false value.

#### How to Fix
Replace the boolean value with an object containing the expected properties. Check the Minecraft Creator documentation for the correct structure.

### JSONF103
**🔴 Unexpected Number Where Object Expected**  
**Severity**: Error

#### What This Checks
A number value was found where an object was expected. The form schema expects this field to be an object with properties, not a numeric value.

#### How to Fix
Replace the numeric value with an object containing the expected properties. Check the Minecraft Creator documentation for the correct structure.

### JSONF110
**🟡 Data Type Mismatch**  
**Severity**: Warning

#### What This Checks
The data type of a field does not match what the schema expects. For example, a string was provided where a number was expected, or an array was provided where an object was expected.

#### How to Fix
Check the expected type in the Minecraft Creator documentation and update your value accordingly. Common type issues include: using strings for numeric values, using numbers for version strings, or using single values where arrays are expected.

#### Technical Details
This is triggered when DataFormValidator.getDataMismatchError() finds the JavaScript typeof the data doesn't match any of the expected FieldDataType values for the field or its alternates.

### JSONF111
**🟡 Value Below Minimum**  
**Severity**: Warning

#### What This Checks
A numeric value is below the minimum allowed value defined in the schema. The field has a minValue constraint that this value violates.

#### How to Fix
Increase the value to at least the minimum allowed. Check the Minecraft Creator documentation for valid value ranges.

#### Technical Details
Triggered when field.minValue is defined and the data value is less than minValue.

### JSONF112
**🟡 Value Above Maximum**  
**Severity**: Warning

#### What This Checks
A numeric value exceeds the maximum allowed value defined in the schema. The field has a maxValue constraint that this value violates.

#### How to Fix
Decrease the value to at most the maximum allowed. Check the Minecraft Creator documentation for valid value ranges.

#### Technical Details
Triggered when field.maxValue is defined and the data value is greater than maxValue.

### JSONF113
**🟡 String Too Short**  
**Severity**: Warning

#### What This Checks
A string value is shorter than the minimum length required by the schema. The field has a minLength constraint that this value violates.

#### How to Fix
Provide a longer string value that meets the minimum length requirement.

#### Technical Details
Triggered when field.minLength is defined and data.length is less than minLength.

### JSONF114
**🟡 String Too Long**  
**Severity**: Warning

#### What This Checks
A string value exceeds the maximum length allowed by the schema. The field has a maxLength constraint that this value violates.

#### How to Fix
Shorten the string value to meet the maximum length requirement. Very long strings may cause issues in Minecraft.

#### Technical Details
Triggered when field.maxLength is defined and data.length is greater than maxLength.

### JSONF115
**🟡 Value Not in Choices**  
**Severity**: Warning

#### What This Checks
The value is not one of the allowed choices defined in the schema. The field has a fixed set of valid values and the provided value is not among them.

#### How to Fix
Use one of the allowed values listed in the error message. Check the Minecraft Creator documentation for the complete list of valid options for this field.

#### Technical Details
Triggered when field.choices is defined, field.mustMatchChoices is not false, and the value is not found in the choices array.

### JSONF116
**🟡 Pattern Mismatch**  
**Severity**: Warning

#### What This Checks
A string value does not match the required pattern defined in the schema. The field has a validity condition with a regex pattern that the value must match.

#### How to Fix
Update the string to match the required format. Common patterns include namespace:identifier format (e.g., 'minecraft:zombie'), version strings, or specific naming conventions.

#### Technical Details
Triggered when field.validity contains a condition with comparison=ComparisonType.matchesPattern and the regex test fails.

### JSONF117
**🟡 Array Length Mismatch**  
**Severity**: Warning

#### What This Checks
An array has a different number of elements than required by the schema. The field has a fixedLength constraint specifying exactly how many elements are expected.

#### How to Fix
Add or remove elements from the array to match the required length.

#### Technical Details
Triggered when field.fixedLength is defined and the array length doesn't match.

### JSONF118
**🟡 Point/Range Size Mismatch**  
**Severity**: Warning

#### What This Checks
A point or range array has the wrong number of elements. Point2 requires exactly 2 elements [x, y], Point3 requires exactly 3 elements [x, y, z], and ranges require exactly 2 elements [min, max].

#### How to Fix
Ensure the array has the correct number of elements for the point or range type.

#### Technical Details
Triggered when the field dataType is point2 (expects 2), point3 (expects 3), floatRange (expects 2), or intRange (expects 2) and the array length doesn't match.

### JSONF119
**🟡 Key Not Allowed**  
**Severity**: Warning

#### What This Checks
A key in a keyed collection is not in the allowed keys list. The schema defines a specific set of valid keys for this collection.

#### How to Fix
Use one of the allowed keys. Check the Minecraft Creator documentation for valid key names for this component or property collection.

#### Technical Details
Triggered when field.allowedKeys is defined for a keyed collection (keyedObjectCollection, keyedStringCollection, etc.) and a key in the data is not in the allowedKeys array.

### JSONF120
**🟡 Unexpected Property**  
**Severity**: Warning

#### What This Checks
An object contains a property that is not defined in the schema. This may indicate a typo, deprecated property, or use of an undocumented feature.

#### How to Fix
Check the property name for typos. If intentional, this may be a custom or experimental property that works but is not officially documented.

#### Technical Details
Triggered when form.strictAdditionalProperties is true and the data object contains a key not defined in form.fields. By default, this check is disabled for Minecraft content since many formats allow additional properties.

### JSONF121
**🟡 Missing Required Field**  
**Severity**: Warning

#### What This Checks
A required field is missing from the object. The schema indicates this field must be present for the content to work correctly.

#### How to Fix
Add the missing required field with an appropriate value. Check the Minecraft Creator documentation for the expected format and valid values.

#### Technical Details
Triggered when field.isRequired is true and the data for this field is undefined or null.

### JSONF401
**🔴 JSON Parse Error**  
**Severity**: Error

#### What This Checks
Error when a JSON file could not be parsed for form validation. The file may have syntax errors such as missing commas, unquoted keys, trailing commas, or invalid escape sequences.

#### How to Fix
Open the file in an editor with JSON validation to find and fix syntax errors. Common issues include: missing commas between properties, trailing commas after the last property, unquoted property names, and invalid Unicode escape sequences.

#### Technical Details
Triggered when StorageUtilities.getJsonObject() returns null due to a JSON.parse() failure.

### JSONF402
**ℹ️ Form Not Found**  
**Severity**: Info

#### What This Checks
No documentation form schema was found for this JSON file type. The file format may not yet be documented in form.json files, or this project item type may not have a form path mapping.

#### How to Fix
This is informational only. The file may still be valid - it just couldn't be validated against documentation-based form schemas. JSON Schema validation may still apply separately.

#### Technical Details
Triggered when Database.ensureFormLoadedByPath() returns undefined for the form path returned by ProjectItemUtilities.getFormPathForType().
