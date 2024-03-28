---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BuiltInUIManager Interface
description: Contents of the @minecraft/server-editor.BuiltInUIManager class.
---
# BuiltInUIManager Interface

Represents a UI session for a given player

## Methods
- [navigateToDocumentation](#navigatetodocumentation)
- [navigateToFeedback](#navigatetofeedback)
- [navigateToPauseScreen](#navigatetopausescreen)
- [updateLogPanelVisibility](#updatelogpanelvisibility)
- [updateUISettingsPanelVisibility](#updateuisettingspanelvisibility)
- [updateWelcomePanelVisibility](#updatewelcomepanelvisibility)

### **navigateToDocumentation**
`
navigateToDocumentation(): void
`

Navigates to the documentation site.

**Returns** *void*

### **navigateToFeedback**
`
navigateToFeedback(): void
`

Navigates to the feedback site

**Returns** *void*

### **navigateToPauseScreen**
`
navigateToPauseScreen(): void
`

Navigates to the pause screen

**Returns** *void*

### **updateLogPanelVisibility**
`
updateLogPanelVisibility(visibility: boolean): void
`

Updates the visibility of the log panel

#### **Parameters**
- **visibility**: *boolean*

**Returns** *void*

### **updateUISettingsPanelVisibility**
`
updateUISettingsPanelVisibility(visibility: boolean): void
`

Updates the visibility of the control demo

#### **Parameters**
- **visibility**: *boolean*

**Returns** *void*

### **updateWelcomePanelVisibility**
`
updateWelcomePanelVisibility(visibility: boolean): void
`

Updates the visibility of the welcome panel

#### **Parameters**
- **visibility**: *boolean*

**Returns** *void*
