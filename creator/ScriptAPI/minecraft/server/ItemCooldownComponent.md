---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemCooldownComponent Class
description: Contents of the @minecraft/server.ItemCooldownComponent class.
---
# ItemCooldownComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item has a cooldown effect when used by entities.

## Properties

### **cooldownCategory**
`read-only cooldownCategory: string;`

Represents the cooldown category that this item is associated with.

Type: *string*

### **cooldownTicks**
`read-only cooldownTicks: number;`

Amount of time, in ticks, that remain for this item cooldown.

Type: *number*

## Methods
- [startCooldown](#startcooldown)

### **startCooldown**
`
startCooldown(player: Player): void
`

Starts a new cooldown period for this item.

#### **Parameters**
- **player**: [*Player*](Player.md)

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:cooldown";`

Identifier of this component. Should always be 'minecraft:cooldown'.

Type: *string*
