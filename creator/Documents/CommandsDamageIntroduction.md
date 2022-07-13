---
author: rileymanns
ms.author: v-rileymanns
title: Introduction to the Damage Command
ms.prod: gaming
description: "An introduction to the damage command and some special use cases for it."
---

# Introduction to the Damage Command

The `/damage` command allows users to deal damage to a specified entity from a specified source. For example, you can deal fire damage to a creeper or fall damage to a zombie. This feature provides a more direct and controlled way to apply damage when compared to other methods, such as spawning in arrows.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What the `/damage` command is and how to use it
> - Special use cases and exceptions
 
### Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Commands](CommandsIntroduction.md)

## Syntax of the Damage Command

The damage command can be called in two ways.

```
/damage <target> <amount> [cause]
```

```
/damage <target> <amount> <cause> entity <damager>
```

- `target` is a selector. It determines the entities that will receive the damage.

- `amount` is an integer. This is the amount of damage that will be dealt.

- `cause` determines what kind of damage will be dealt. This can affect the death message, and some targets may resist or ignore certain damage causes
  - For example, helmets reduce `stalactite` damage, and cats are immune to fall damage. 
  - Cause must be one of `anvil`, `block_explosion`, `charging`, `contact`, `drowning`, `entity_attack`, `entity_explosion`, `fall`, `falling_block`, `fire`, `fire_tick`, `fireworks`, `fly_into_wall`, `freezing`, `lava`, `lightning`, `magic`, `magma`, `none`, `override`, `piston`, `projectile`, `stalactite`, `stalagmite`, `starve`, `suffocation`, `suicide`, `temperature`, `thorns`, `void`, `wither`.

- `damager` is a selector that must evaluate to one entity. It determines which entity will be treated as dealing the damage to the target. For example, a damaged zombified piglin will get angry at this entity.
  - If specified, the target will also take knockback such that they are pushed away from the damager, no matter the distance between the two entities.
  - In peaceful difficulty, the player will ignore all damage if the damager is a mob.

## Special use cases

Because both the damage and source follow the damage rules specified in behavior packs, there are some unique use cases that may not deal damage, or may deal damage when it would be expected they shouldn’t. 

If the affected entity has a [`damage_sensor`](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_damage_sensor.md) component, the damage dealt by this command will activate it when applicable. The presence or absence of this behavior on vanilla mobs may make some situations unintuitive. Here are a few examples:

### Drowning damage

`drowning` damage can still be dealt to aquatic and undead mobs. This is because while they can *breathe* underwater, they are not immune to drowning damage itself.

### Zombie conversion

A villager may receive damage from a **zombie** or **husk**, but will only transform into a zombie if the damage was fatal.

### Drowning zombies

Dealing `drowning` damage does not turn zombies and husks into Drowned. This is because the check to change something to a Drowned is based on the amount of time underwater, not the amount of damage dealt.

### Glow squid glow

A glow squid will stop glowing and emit ink when damaged, but only if there was a damage source. 

This logic also applies to the glow squid and squids inking behavior. If the damage applied has no source, it will not “ink”.

### Slow falling

The player receives fall damage by using the `/damage` command when the Slow Falling status effect is applied. The Slow Falling status effect does not prevent fall damage explicitly, so it would not prevent the Damage Command from applying damage.

### Creeper lightning

A creeper will become charged if it is damaged by an entity of the `lightning` family. Lightning damage from a non lightning entity will not cause a creeper to become charged.

## What's Next?

There are more commands out there for you to use to unleash mayhem upon your world - or use to make things nice. It's up to you.

> [!div class="nextstepaction"]
> [Popular Commands](CommandsPopularCommands.md)
