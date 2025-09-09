---
author: mammerla
ms.author: mikeam
title: GDK Migration on Windows (from September 2025)
description: "An article that describes file locations and how to deploy your in-development files for Minecraft Preview."
ms.service: minecraft-bedrock-edition
ms.date: 09/09/2025
---

# GDK Migration on Windows (from September 2025)

As part of a migration from UWP to GDK (Game Development Kit) for Windows builds, current users of Minecraft Preview from 1.21.120.21-preview (from September 9th, 2025) *may* experience either a "UWP" version of Minecraft Preview (the existing style of Minecraft build) or a GDK version of Minecraft Preview (the new style of Minecraft build). Functionally these versions should work the same, but these versions do source files in different locations on your device's disk. As a creator, this will impact where you should deploy your pack and world resources.

## UWP Build (the existing style)

Minecraft Preview using UWP builds stores various pack and world folders in this location on your device:

`%localappdata%\Packages\Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe\LocalState\games\com.mojang`

Within this folder, you will see several subfolders where you can place your development resources:

`development_behavior_packs`
`development_resource_packs`
`development_skin_packs`
`behavior_packs`
`resource_packs`

Logs are stored at:

`%localappdata%\Packages\Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe\LocalState\logs`

## GDK migration (the new style)

After migration, a users' content should be copied over to updated GDK Minecraft Preview folders. Moving forward, as a creator, you will want to deploy your development work for Minecraft Preview to the following folder:

`%appdata%\Minecraft Bedrock Preview\users\shared\games\com.mojang`

For example, you can place your behavior packs in developement for Minecraft Preview at:

`%appdata%\Minecraft Bedrock Preview\users\shared\games\com.mojang\development_behavior_packs`

Content errors are logged at `%appdata%\Minecraft Bedrock Preview\logs\` if that option has been enabled in the "Creator" tab of settings within your game.

## Summary

As migration progresses, we expect more users of Minecraft Preview will see the move from UWP to GDK for Minecraft Preview. Ultimately, we expect that this change to GDK will also come to the "release"/full version of Minecraft for Windows. Stay tuned to [Minecraft Bedrock changelogs](https://feedback.minecraft.net/hc/sections/360001185332-Beta-and-Preview-Information-and-Changelogs) for more information on this. If you have any bugs or concerns, please log them at [bugs.mojang.com](https://bugs.mojang.com/projects/MCPE/summary).
