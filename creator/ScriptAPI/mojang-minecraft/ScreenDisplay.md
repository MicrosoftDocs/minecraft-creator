---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ScreenDisplay Class
description: Contents of the mojang-minecraft.ScreenDisplay class.
---
# ScreenDisplay Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information about user interface elements that are showing up on the screen.

## Methods
- [clearTitle](#cleartitle)
- [setActionBar](#setactionbar)
- [setTitle](#settitle)
- [updateSubtitle](#updatesubtitle)

### **clearTitle**
`
clearTitle(): void
`
Clears the title and subtitle, if currently displayed.
> [!WARNING]
> This function can throw errors.

### **setActionBar**
`
setActionBar(text: string): void
`
Set the action bar text - a piece of text that displays beneath the title and above the hot-bar.

#### **Parameters**
- **text**: *string*
> [!WARNING]
> This function can throw errors.

### **setTitle**
`
setTitle(title: string, options?: TitleDisplayOptions): void
`
Will cause a title to show up on the player's on screen display. You can optionally specify an additional subtitle as well as fade in, stay and fade out times.

#### **Parameters**
- **title**: *string*
- **options**?: [*TitleDisplayOptions*](TitleDisplayOptions.md) = `null`
> [!WARNING]
> This function can throw errors.

### **updateSubtitle**
`
updateSubtitle(subtitle: string): void
`
Updates the subtitle if the subtitle was previously displayed via the setTitle method.

#### **Parameters**
- **subtitle**: *string*
> [!WARNING]
> This function can throw errors.
