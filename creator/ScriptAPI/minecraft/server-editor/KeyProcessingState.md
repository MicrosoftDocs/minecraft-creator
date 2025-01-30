---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .KeyProcessingState Enumeration
description: Contents of the .KeyProcessingState enumeration.
---
# KeyProcessingState Enumeration

Determines how key binding should be processed to fire actions

## Constants
### **Consume**
`Consume = 0`

Consume key input event and prevent propagation
### **Passthrough**
`Passthrough = 1`

Pass key input event to parent context after processing it
### **Disabled**
`Disabled = 2`

Skip key input event processing
