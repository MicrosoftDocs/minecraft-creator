---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IButtonPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IButtonPropertyItemOptions class.
---
# IButtonPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Button property item

## Properties

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **icon**
`icon: string;`

Icon image of the property item.

Type: *string*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*

### **variant**
`variant: ButtonPropertyItemVariant;`

The variant for the button. By default it is Primary.

Type: *ButtonPropertyItemVariant*
