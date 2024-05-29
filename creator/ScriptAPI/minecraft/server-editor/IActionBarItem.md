---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IActionBarItem Interface
description: Contents of the @minecraft/server-editor.IActionBarItem class.
---
# IActionBarItem Interface

Registered item handle in the Action Bar collection.

## Properties

### **getEnabled**
`getEnabled: () => boolean;`

Returns the current enabled state of the item.

Type: *() => boolean*

### **id**
`read-only id: string;`

Unique identifier of the item.

Type: *string*

### **label**
`read-only label: string;`

Text label of the item.

Type: *string*

### **setEnabled**
`setEnabled: (enabled: boolean) => void;`

Modify enabled state of the item.

Type: *(enabled: boolean) => void*
