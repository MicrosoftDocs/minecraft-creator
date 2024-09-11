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
| query.client_memory_tier | (EXPERIMENTAL. Enable 'Upcoming Creator Features' to use.) Returns a number representing the client RAM memory tier, 0 = 'Undetermined', 1 = 'SuperLow', 2 = 'Low', 3 = 'Mid', 4 = 'High', or 5 = 'SuperHigh'. Available on the Client (Resource Packs) only. |
| query.server_memory_tier | (EXPERIMENTAL. Enable 'Upcoming Creator Features' to use.) Returns a number representing the server RAM memory tier, 0 = 'Undetermined', 1 = 'SuperLow', 2 = 'Low', 3 = 'Mid', 4 = 'High', or 5 = 'SuperHigh'. Available on the server side (Behavior Packs) only. |