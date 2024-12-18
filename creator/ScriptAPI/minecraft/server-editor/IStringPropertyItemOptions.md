---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IStringPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IStringPropertyItemOptions class.
---
# IStringPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for String property item

## Properties

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. If undefined, the label will be visible by default.

Type: *boolean*

### **onChange**
`onChange: (newValue: string, oldValue: string) => void;`

This callback is called when UI control value is changed.

Type: *(newValue: string, oldValue: string) => void*

### **regexPattern**
`regexPattern: string;`

Optional regular expression pattern to validate string.

Type: *string*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*
