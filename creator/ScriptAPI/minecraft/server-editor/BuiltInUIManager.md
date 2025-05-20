---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.BuiltInUIManager Interface
description: Contents of the @minecraft/server-editor.BuiltInUIManager class.
---
# BuiltInUIManager Interface

Represents a UI session for a given player

## Methods
- [activateTutorial](#activatetutorial)
- [navigateToDocumentation](#navigatetodocumentation)
- [navigateToFeedback](#navigatetofeedback)
- [navigateToPauseScreen](#navigatetopausescreen)
- [navigateToSamples](#navigatetosamples)
- [saveAndExit](#saveandexit)
- [updateLogPanelVisibility](#updatelogpanelvisibility)
- [updateUISettingsPanelVisibility](#updateuisettingspanelvisibility)
- [updateWelcomePanelVisibility](#updatewelcomepanelvisibility)

### **activateTutorial**
`
activateTutorial(): void
`

Activates tutorial overlay

**Returns** *void*

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

### **navigateToSamples**
`
navigateToSamples(): void
`

Navigates to the github-samples site

**Returns** *void*

### **saveAndExit**
`
saveAndExit(): void
`

Saves levels & exits back to Editor main menu.

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
