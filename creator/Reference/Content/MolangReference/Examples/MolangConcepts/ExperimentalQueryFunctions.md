---
author: iconicNurdle
ms.author: mikeam
title: Molang Documentation - Experimental Query Functions
description: "A reference document detailing experimental Molang query functions"
ms.service: minecraft-bedrock-edition
monikerRange: "=minecraft-bedrock-experimental"
---

# Molang Documentation - Experimental Query Functions

Welcome to the Experimental Entity Query functions.

> [!CAUTION]
> Because these Entity Query functions are marked as Experimental, you must make sure the toggle **Experimental Molang Features** is active in order to use them. To learn how, visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)
>
> Click here: [Entity Query Functions](QueryFunctions.md) to view what is currently available.

| Name| Description |
|:-----------|:-----------|
| query.last_input_mode_is_any | (EXPERIMENTAL. Enable 'Upcoming Creator Features' to use.) Takes one or more arguments ('keyboard_and_mouse', 'touch', 'gamepad', or 'motion_controller'). If the last input used is any of the specified string values, returns 1.0. Otherwise returns 0.0. Available on the Client (Resource Packs) only. |
| query.touch_only_affects_hotbar | (EXPERIMENTAL. Enable 'Upcoming Creator Features' to use.) Returns 1.0 if the touch input only affects the touchbar, otherwise returns 0.0. Available on the Client (Resource Packs) only. |
