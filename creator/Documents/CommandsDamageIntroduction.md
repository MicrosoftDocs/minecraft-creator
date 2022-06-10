---
author: rileymanns
ms.author: v-rileymanns
title: Introduction to the Damage Command
ms.prod: gaming
description: "An introduction to the damage command and some special use cases for it."
---

# Introduction to the Damage Command

The `/damage` command was added to Minecraft: Bedrock Edition in version 1.18.10. This command allows users to deal damage to a specified entity from a specified source. For example, you can deal fire damage to a creeper or fall damage to a zombie. This feature provides a more direct and controlled way to apply damage when compared to other methods, such as spawning in arrows.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What the `/damage` command is and how to use it
> - Special use cases and exceptions
 
### Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Commands](CommandsIntroduction.md)

## Syntax
This command has two different overloads for its syntax:

```
/damage <target> <amount> [cause]
/damage <target> <amount> <cause> entity <damager>
```

- `target` is a selector. It determines the entities that will receive the damage.

- `amount` is an integer, 0 or larger. This is the amount of damage that will be dealt.

- `cause` determines what kind of damage will be dealt. This can affect the death message, and some targets may resist or ignore certain damage causes. For example, helmets reduce `stalactite` damage, and cats are immune to fall damage.
  - Must be one of `anvil`, `block_explosion`, `charging`, `contact`, `drowning`, `entity_attack`, `entity_explosion`, `fall`, `falling_block`, `fire`, `fire_tick`, `fireworks`, `fly_into_wall`, `freezing`, `lava`, `lightning`, `magic`, `magma`, `none`, `override`, `piston`, `projectile`, `stalactite`, `stalagmite`, `starve`, `suffocation`, `suicide`, `temperature`, `thorns`, `void`, `wither`.

- `damager` is a selector that must evaluate to one entity. It determines which entity will be treated as dealing the damage to the target. For example, a damaged zombified piglin will get angry at this entity.
  - If specified, the target will also take knockback such that they are pushed away from the damager, no matter the distance between the two entities.
  - In peaceful difficulty, the player will ignore all damage if the damager is a mob.

## Special use cases

If the affected entity has a [`damage_sensor`](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_damage_sensor.md) component, the damage dealt by this command will activate it when applicable. The presence or absence of this behavior on vanilla mobs may make some situations unintuitive. Here are a few examples:


**Drowning mobs that breathe underwater**

- `drowning` damage can still be dealt to aquatic and undead mobs. This is because while they can *breathe* underwater, they are not immune to drowning damage itself.

**Zombie conversion**

- If a villager takes fatal damage when the `damager` is set to a zombie or husk, it will transform into a zombie villager as normal depending on the difficulty (100% chance on hard mode, 50% chance on normal mode, 0% chance on easy mode).

**Drowning zombies**

- Dealing `drowning` damage to a zombie, even fatal damage, will not convert it into a drowned. The check to change a zombie into a drowned is based on the amount of time spent underwater.

**Glow squid glow**

- A glow squid will stop glowing and emit ink when damaged, but only if there was a `damager`.

**Slow falling**

- `fall` damage can still be dealt to entities that are under the effects of the slow falling potion effect.

**Creeper lightning**

- [Creepers do not become charged](https://bugs.mojang.com/browse/MCPE-151532) when taking `lightning` damage. Instead, they become charged when the `damager` is a lightning bolt entity.

## What's Next?

There are more commands out there for you to use to unleash mayhem upon your world - or use to make things nice. It's up to you.

> [!div class="nextstepaction"]
> [Popular Commands](CommandsPopularCommands.md)
