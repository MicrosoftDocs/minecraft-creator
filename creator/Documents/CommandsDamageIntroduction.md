---
author: rileymanns
ms.author: v-rileymanns
title: Introduction to the Damage Command
ms.prod: gaming
description: "An introduction to the damage command and some special use cases for it."
---

# Introduction to the Damage Command

The damage command is a brand new command in Minecraft: Bedrock Edition. This command allows users to apply a specific type of damage to a specified entity from a specified source. For example, dealing fire damage to a creeper or fall damage to a zombie. This feature provides a simpler and more direct way to apply damage when compared to other methods, such as spawning in arrows or splash damage potions.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What the damage command is and how to use it.
> - Special use cases 
 
### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Commands](CommandsIntroduction.md)

## Syntax of the Damage Command

Use this commands to harm an entity with a set amount of damage of the specified type.

```
/damage <target> <amount> [cause]
```

- Target (Actor sSelector) - The entity who will receive the damage.

- Amount (Integer) - The amount of damage to be taken.

- Cause (Actor Damage Cause) - The type of damage that the entity will take. (Default: ActorDamageCause::None)


## Special use cases

Because both the damage and source follow the damage rules specified in behavior packs, there are some unique use cases that may not deal damage, or may deal damage when it would be expected they shouldn’t. We want to make sure to call those cases out.


### Downing damage

Drowning damage can be applied to aquatic and undead mobs. This is because while they can *breathe* underwater, they are not immune to drowning damage itself.

### Zombie conversion

When applying the damage type “entity_attack” with its damage source being set as **zombie** or **husk** to the villager by using the `/damage` command, the villager receives damage but does not convert into a zombie. It will *only* turn into a zombie if the damage was fatal.

### Drowning zombies

Drowning damage does not turn zombies and husks into Drowned. This is because the check to change something to a Drowned is based on the amount of time underwater, not the amount of damage dealt.

### Glow squid glow

The glow squid is currently set to only stop glowing when there is a damage source; however if there is no source, it will not. If I were to attack the glow squid with a weapon in my hand, the squid will stop glowing. If I apply damage to a glow squid with no source, it will not stop glowing. This logic also applies to the glow squid and squids inking behavior. If the damage applies has no source, it will not “ink”.

### Slow falling

The player receives fall damage by using the `/damage` command when the Slow Falling status effect is applied. The Slow Falling status effect does not prevent fall damage explicitly, so it would not prevent the Damage Command from applying damage.

### Creeper lightning

The creeper's behavior pack defined a damage sensor where a creeper will become charged if it is damaged by an entity of the "lightning" family. This means it will become charged when attacked by a lightning entity, independently of the damage type. This also means that damage of the lightning type but from an entity other than lightning won't cause the creeper to become charged.

## What's Next?

There are more commands out there for you to use to unleash mayhem upon your world - or use to make things nice. It's up to you.

> [!div class="nextstepaction"]
> [Popular Commands](CommandsPopularCommands.md)