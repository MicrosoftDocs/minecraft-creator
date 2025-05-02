---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.MoonPhase Enumeration
description: Contents of the @minecraft/server.MoonPhase enumeration (Version 1.x.x).
---
# MoonPhase Enumeration (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/MoonPhase.md).

Enum containing the different phases of the moon based on the current day.,Obtain the current MoonPhase using world.getMoonPhase.



The fullness of the moon controls various mob behaviors such as the number of slimes that spawn in Swamp biomes, the chance skeletons and zombies have to spawn with armor, as well as the chance for spiders to spawn with certain status effects.

## Constants
### **FullMoon**
`FullMoon = 0`

The brightest moon phase. During this phase, cats have a 50% chance of spawning as black cats.
### **WaningGibbous**
`WaningGibbous = 1`

The phase following the Full Moon.
### **FirstQuarter**
`FirstQuarter = 2`

The phase following the Waxing Crescent.
### **WaningCrescent**
`WaningCrescent = 3`

The phase following the Last Quarter.
### **NewMoon**
`NewMoon = 4`

The darkest moon phase.
### **WaxingCrescent**
`WaxingCrescent = 5`

The phase following the New Moon.
### **LastQuarter**
`LastQuarter = 6`

The phase following the Waning Gibbous.
### **WaxingGibbous**
`WaxingGibbous = 7`

The phase following the First Quarter.
