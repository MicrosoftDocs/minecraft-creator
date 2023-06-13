---
author: mammerla
ms.author: v-jimseaman
title: Entity Documentation - minecraft:behavior.scenting
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.scenting

`minecraft:behavior.scenting` compels the a mob to scent for a specified duration.

> [!IMPORTANT]
> `minecraft:behavior.scenting` is an internal-only component used by Vanilla Minecraft entities; `minecraft:behavior.scenting` is not available to creators at this time.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_range| [10.00, 10.00]| Range [a, b]| The goal cooldown range, in seconds. |
| duration_range| [2.00, 2.00]| Range [a, b]| The goal duration range, in seconds. |
| on_end| --| Trigger| The event or events to run when the goal ends. |
| on_start| --| Trigger| The event or events to run when the goal starts. |
