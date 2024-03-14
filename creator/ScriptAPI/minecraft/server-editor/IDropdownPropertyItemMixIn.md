---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IDropdownPropertyItemMixIn Interface
description: Contents of the @minecraft/server-editor.IDropdownPropertyItemMixIn class.
---
# IDropdownPropertyItemMixIn Interface

Dropdown property item specific functionality

## Methods
- [updateDropdownItems](#updatedropdownitems)

### **updateDropdownItems**
`
updateDropdownItems(dropdownItems: IDropdownItem[], newValue: number): void
`

Used to update the Dropdown options in the control. Will trigger onChange with -1 as the old value due to the list changing entries.

#### **Parameters**
- **dropdownItems**: *IDropdownItem[]*
- **newValue**: *number*

**Returns** *void*
