---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleToolRailOptions Interface
description: Contents of the @minecraft/server-editor.ISimpleToolRailOptions class.
---
# ISimpleToolRailOptions Interface

The tool rail component allows the tool to register an icon and button (and dynamic tooltip) in the tool rail on the left side of the display. Adding a tool rail component to a tool will cause the tool to be considered a `modal tool`, and only one single modal tool can be active at any one time. Modal tools are generally tools which take focus and control of the cursor (e.g. selection, clipboards, entity selection, etc) Global tools (tools which do not have a tool rail) are generally things like property pages, settings, etc - things that do not require an active cursor or gameplay interaction

## Properties

### **icon**
`icon: string;`

The icon for the tool rail button. This is generally a URL to an image file in the editor extension resource pack e.g. `pack://textures/my-tool-icon.png`

Type: *string*

### **onActivate**
`onActivate: (component: ISimpleToolRailComponent) => void;`

Type: *(component: ISimpleToolRailComponent) => void*

### **onDeactivate**
`onDeactivate: (component: ISimpleToolRailComponent) => void;`

Type: *(component: ISimpleToolRailComponent) => void*

### **onFinalize**
`onFinalize: (component: ISimpleToolRailComponent) => void;`

Type: *(component: ISimpleToolRailComponent) => void*

### **onTeardown**
`onTeardown: (component: ISimpleToolRailComponent) => void;`

Type: *(component: ISimpleToolRailComponent) => void*

### **title**
`title: string;`

The text for the tool title

Type: *string*

### **tooltip**
`tooltip: string;`

The tooltip description for the tool. Note: if an activation key binding was added to `ISimpleToolOptions`, then the key binding will be appended to the tooltip string.

Type: *string*
