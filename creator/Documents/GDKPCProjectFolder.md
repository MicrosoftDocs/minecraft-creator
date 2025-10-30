---
author: mammerla
ms.author: mikeam
title: GDK Migration on Windows (from Minecraft version 1.21.120)
description: "An article that describes file locations and how to deploy your in-development files for Minecraft Bedrock."
ms.service: minecraft-bedrock-edition
ms.date: 10/24/2025
---

# GDK Migration on Windows (from Minecraft 1.21.120)

As part of a migration from UWP to GDK (Game Development Kit) for Windows builds, the location of Minecraft Bedrock storage for creator artifacts like behavior packs and worlds is moving locations. Functionally these folder locations should work the same (e.g., there is a development_behavior_packs folder, etc.), but you will need to place files in a different location on your device's disk. As a creator, this will impact where you should deploy your pack and world resources.

## GDK migration (the new style)

After migration, a user's content should be copied over to updated GDK Minecraft Bedrock folders. Moving forward, as a creator, you will want to deploy your development work for Minecraft to the following folder:

`%appdata%\Minecraft Bedrock\users\shared\games\com.mojang`

Within this folder, you will see several subfolders where you can place your development resources:

`development_behavior_packs`
`development_resource_packs`
`development_skin_packs`
`behavior_packs`
`resource_packs`

For example, you can place your behavior packs in developement for Minecraft at:

`%appdata%\Minecraft Bedrock\users\shared\games\com.mojang\development_behavior_packs`

Content errors are logged at `%appdata%\Minecraft Bedrock\logs\` if that option has been enabled in the "Creator" tab of settings within your game.

For Minecraft Preview, the folder paths are:

`%appdata%\Minecraft Bedrock Preview\users\shared\games\com.mojang` for development artifacts and `%appdata%\Minecraft Bedrock Preview\logs\` for logs.


## UWP Build (the old style)

For reference, the previous Minecraft using UWP builds stored various pack and world folders in this location on your device:

`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`

Logs were stored at:

`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs`

## Tooling Updates

Check with the providers of your tooling to see if you need to update tools to take into account the new paths. 

For example, the `@minecraft/core-build-tasks` added support for the `BedrockGDK` folder in version 5.5.0 - if you use a NPM-based workflow that uses `@minecraft/core-build-tasks`, you will want to consider an update for that.