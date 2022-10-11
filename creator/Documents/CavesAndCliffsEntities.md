---
author: mammerla
ms.author: mikeam
title: Introduction to the Caves & Cliffs Entities
ms.prod: gaming
description: An introduction to the new Entities that are included in the Caves & Cliffs update
---

# Introduction to the Caves & Cliffs Entities

The Caves & Cliffs update brings three brand-new entities to Minecraft: Bedrock Edition: the glow squid, the goat, and the axolotl. These new entities have some fun, new behaviors that you can tweak and use to create even more customized Minecraft experiences.

## Axolotl

The [axolotl](../Reference/Source/VanillaBehaviorPack_Snippets/entities/axolotl.md) is a most helpful critter. It will attack other sea creatures, so you can use it as a buddy in combat! It can also grant combat regeneration to any entity that kills its current target.

When attacked, the axolotl can play dead, which will cause all other mobs to stop targeting it. You can adjust how long it plays dead and what triggers cause it to play dead, such as:

- Random chance on taking damage.
- Being damaged for a certain amount.
- Falling below a specified health value.

## Glow Squid

The [glow squid](../Reference/Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md) is identical to the [squid](../Reference/Source/VanillaBehaviorPack_Snippets/entities/squid.md) in its behavior, but like its name implies, this new mob has a glowing texture. The glow squid also drops glow ink that you can use to create glowing signs!

## Goat

The [goat](../Reference/Source/VanillaBehaviorPack_Snippets/entities/goat.md) is a mischievous mob that can be found in the mountain biomes. While hanging out, it will search for random blocks to jump to within a set height, width, and distance and jump to that block. You can tweak the following parameters for this behavior:

- How far the goat will search for a block to jump to.
- How fast the goat will jump.
- The cooldown timer between jumps.

When players or other mobs get near the goat, it will find a random target and, if it has a direct path, it will perform a ram attack. Be careful because the goat will knock its targets back depending on how its ramming distance and speed! You can customize:

- How far away the goat will target other entities.
- The force of the knockback from a successful ram attack.
- How quickly the goat will run toward its target.
- How quickly the goat will move when ramming its target.
- The sounds played during a ram and on impact.
- What events will be triggered after a ram attack.
- The cooldown timer between ram attacks.
