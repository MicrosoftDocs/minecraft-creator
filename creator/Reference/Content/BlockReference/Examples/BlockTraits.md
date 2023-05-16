---
author: mammerla
ms.author: v-jimseaman
title: Block Documentation - Block Traits
ms.prod: gaming
---

# Block Documentation - Block Traits

Note: Block traits are currently in development and will be available incrementally. Stay tuned!

Block traits are designed to be a shortcut for creators to use Vanilla block states without needing to define and manage a series of events or triggers on custom blocks. While custom states and permutations can be used to set multiple variations of the same block (whether it's on/off, is flammable, etc.), states that are exposed through traits allow you to access the inherent data certain Vanilla blocks hold.

For example:
> - By using the `minecraft:placement_direction` trait to set the `minecraft:cardinal_direction` state, you can create a custom furnace block that will orient so the front is facing the player.