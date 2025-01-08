---
author: v-kimjeff
ms.author: mikeam
title: 'Entity Behavior (AI) Components'
description: "A guide for designing entity behavior using behavior components and goals."
ms.service: minecraft-bedrock-edition
---

# Entity Behavior (AI) Components

Entity behavior components are one of the specific ways we can use components to get entities to behave a certain way. Behavior components determine how entities decide how to act in the game by controlling how they move, interact with objects or other entities, or respond to certain events. Here are some key points to keep in mind:

- Behavior components are defined in `.json` files as part of a behavior pack.
- Behavior components start with `minecraft:behavior.`.
- Minecraft Bedrock edition includes many built-in behavior components. For a full list, see [Entity Documentation - AI Goal Component List](../Reference/Content/EntityReference/Examples/AIGoalList.md).
- Many behavior components accept parameters to fine-tune an entity's actions or responses to events, such as `speed_multiplier` or `target_distance`.

## Behavior Components Structure

As part of a behavior pack, behavior components are defined within an entity's `.json` file inside the behavior pack folder. Here is an example of the structure of a behavior pack:

![Image of behavior pack folder and file structure](Media/BehaviorPack/behavior-pack-structure.png)

### Behavior Priority

Behavior components are evaluated independently, which means that different behaviors might be evaluated simultaneously. This can either help to create a seamless behavior, where two harmonious actions are performed at the same time, or it can cause two incompatible behaviors to compete. In the case where incompatible behaviors compete, you may see errors or notice that your entity's behaviors don't work in the way you expect.

To resolve this issue, it's important to know that behavior components work on a priority system. Behavior components with a lower priority value are executed first - so a component with a `priority` of `1` would execute *before* a component with a `priority` of `2`. Behavior components also **resolve** on the same priority, meaning that, even if a component with a higher `priority` value meets the conditions for execution, the component with the lower `priority` value would resolve first before the next component is allowed to start. This helps to create a sequence of behaviors and seamless switching between behaviors.

### Adding Custom Behavior

For a complete tutorial on adding custom behavior, check out the [Create an Angry Cow: An Introduction To Behavior Packs (from scratch)](./BehaviorPackFromScratch.md) guide. This will help you get an understanding of how to add components to an entity's `.json` file, where to add the code, and how to test and deploy your behavior pack. Pay close attention to the final angry cow components list to make sure you see how `priority` will affect the custom entity's behavior:

```json
            "minecraft:behavior.nearest_attackable_target": {
                "priority": 2,
                "must_see": true,
                "reselect_targets": true,
                "within_radius": 25.0,
                "entity_types": [
                    {
                        "filters": {
                            "test": "is_family",
                            "subject": "other",
                            "value": "player"
                        },
                        "max_dist": 32
                    }
                ]
            },
            "minecraft:behavior.melee_attack": {
                "priority": 3
            },
            "minecraft:attack": {
                "damage": 3
            }
```

See how `minecraft:behavior.nearest_attackable_target` has a lower `priority` value than the `minecraft:behavior.melee_attack` component? That's because we want to target only attackable entities that are *not cows*. If we didn't have the priorities set the way we do, then the cow may attack indiscriminantly or might try attacking things that don't take damage, causing it to get stuck in a loop.

## Essential Behavior Components

Now that you know how to add behavior components and design custom behavior, let's take a look at some of the most important behavior components in Minecraft. While Minecraft does not have "required" components, there are some - like `minecraft:movement`, `minecraft:health`, and `minecraft:interact` that are essential to an entity's ability to have a meaningful impact on your world. Behavior components are similar. There are no requirements for behavior components, but there are definitely some behaviors that are extremely common and give entities a "baseline" ability to interact with the world, with other entities, and with players. Here's a list of some of the most common entity behaviors:

| Behavior | Purpose | Common Users |
|----------|---------|--------------|
| minecraft:behavior.look_at_player | Makes the entity look at a player. | Passive mobs, neutral mobs |
| minecraft:behavior.random_stroll | Makes an entity wander around in a random path. | Passive mobs |
| minecraft:behavior.nearest_attackable_target | Targets the nearest entity to attack. | Hostile mobs |
| minecraft:behavior.attack | Defines how the entity attacks its target. | Hostile mobs |
| minecraft:behavior.hurt_by_target | Makes the entity retaliate when it is hurt. | Passive mobs, hostile mobs |
| minecraft:behavior.breed | Enables breeding for an entity. | Passive mobs |
| minecraft:behavior.follow_owner | Makes an entity follow its owner. | Tamed mobs |
| minecraft:behavior.sit | Makes an entity sit on command. | Tamed mobs |
