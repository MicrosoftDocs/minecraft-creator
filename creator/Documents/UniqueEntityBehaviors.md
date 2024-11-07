---
author: v-kimjeff
ms.author: mikeam
title: "Unique Entity Behaviors"
description: "Descriptions of entities that display unique behaviors"
ms.service: minecraft-bedrock-edition
---

# Unique Entity Behaviors

All entities in Minecraft have specific rules that determine their behavior. In many cases, the set of behaviors for an entity are determined by the configuration of their entity JSON file, and how that JSON file configures various components that define the fundamental properties of mobs in Minecraft. From these components, most entities inherit common behaviors, such as fleeing from stronger mobs or players when their health is low. However, entities of Minecraft can also have behaviors that come from their built-in characteristics - if the identifier (or runtime_identifier) of an entity is "minecraft:axolotl", it can have additional behaviors built into Minecraft's code specifically for axolotls. Finally, many mobs target their behaviors based on their "type family" (a broader [categorization of types](./../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_type_family.md) of entities) of Minecraft.

These behaviors help to create a dynamic environment in Minecraft worlds by telling entities how to behave passively as well as how to react to interaction from players or other mobs. However, the world of Minecraft has a diverse ecosystem and, as you might imagine, there are many entities that behave in ways that are unique. This adds character and flair to entities and keeps the playing experience fresh.

The entities we're discussing here are slightly different from other vanilla entities that have specific behavior components (or even combinations of components). While many of them do have components that initiate or dictate their behavior, each of these entities have certain attributes built into their code which might not be apparent when you look at their JSON file.

For starters, let's take a look at the entities in Minecraft with unique behaviors.

## List of Entities with Unique Behaviors

| Entity Name | Behavior | Reference Link |
|-------------|----------|----------------|
| Axolotl     | Axolotls are passive toward players but attack hostile mobs. If an injured player holds an axolotl, they will heal the player. Axolotls play dead when attacked, becoming invulnerable for a short time. | [Axolotl Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/axolotl.md) |
| Dolphin     | Dolphins help players find shipwrecks and underwater ruins and play with items thrown in the water | [Dolpin Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/dolphin.md) |
| Enderman    | Endermen can teleport, pick up and place blocks, and are only hostile when looked at directly. | [Enderman Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/enderman.md) |
| Glow Squid  | Glow squids glow and drop glow ink sacs. | [Glow Squid Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md) |
| Goat        | Goats have increased jumping ability and can jump from block to block. They also perform a ramming attack against players or mobs that causes knockback. Screaming goats also make a loud scream when they jump. | [Goat Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/goat.md) |
| Phantom     | Phantoms attack players who haven't slept for three or more in-game days, swooping down from the sky. | [Phantom Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/phantom.md) |
| Piglin      | Piglins are hostile to players not wearing gold, but will barter with players who are wearing gold. | [Piglin Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/piglin.md) |
| Silverfish  | Silverfish can hide in certain blocks (like stone or bricks) and swarm the player when disturbed. They also summon more silverfish when they are attacked. | [Silverfish Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/silverfish.md) |
| Strider     | Striders can walk on lava and can be ridden using a saddle. | [Strider Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/strider.md) |
| Witch       | Witches throw potions at players and heal themselves. | [Witch Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/witch.md) |
| Wither      | The Wither can fly and shoot explosive skulls and it summons Wither Skeletons to assist it. | [Wither Reference](../Reference/Source/VanillaBehaviorPack_Snippets/entities/wither.md) |

## Custom Behavior

When we take a look at some of the entities in the table above, you can still get an idea for how their behavior can be customized. It doesn't even have to be a brand new behavior - you can change how aggressive an entity or mob is or what conditions cause them to attack other entities. You can base entire game modes around entities with unique and interesting behaviors that keep your players on edge and provide fresh and fun experiences in your Minecraft world.

To learn more about customizing the behavior of entities in Minecraft, see [Introduction to Behavior Packs](BehaviorPack.md).

To learn how to create a behavior pack from scratch, see [Introduction to Behavior Packs (from Scratch)](BehaviorPackFromScratch.md).
