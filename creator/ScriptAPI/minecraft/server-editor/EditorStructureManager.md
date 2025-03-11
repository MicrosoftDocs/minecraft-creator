---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.EditorStructureManager Class
description: Contents of the @minecraft/server-editor.EditorStructureManager class.
---
# EditorStructureManager Class

## Methods
- [createFromClipboardItem](#createfromclipboarditem)
- [getExistingTags](#getexistingtags)
- [loadStructure](#loadstructure)
- [saveStructure](#savestructure)
- [searchStructures](#searchstructures)

### **createFromClipboardItem**
`
createFromClipboardItem(item: ClipboardItem, structureName: string): EditorStructure
`

#### **Parameters**
- **item**: [*ClipboardItem*](ClipboardItem.md)
- **structureName**: *string*

**Returns** [*EditorStructure*](EditorStructure.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getExistingTags**
`
getExistingTags(): string[]
`

**Returns** *string*[]
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **loadStructure**
`
loadStructure(location: string, id: string): EditorStructure
`

#### **Parameters**
- **location**: *string*
- **id**: *string*

**Returns** [*EditorStructure*](EditorStructure.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **saveStructure**
`
saveStructure(structure: EditorStructure): void
`

#### **Parameters**
- **structure**: [*EditorStructure*](EditorStructure.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **searchStructures**
`
searchStructures(options?: EditorStructureSearchOptions): EditorStructure[]
`

#### **Parameters**
- **options**?: [*EditorStructureSearchOptions*](EditorStructureSearchOptions.md) = `null`

**Returns** [*EditorStructure*](EditorStructure.md)[]
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
