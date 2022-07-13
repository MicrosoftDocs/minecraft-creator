---
author: JDHeaden
ms.author: v-jillheaden
title: Molang - A Beginner's Guide
ms.prod: gaming
description: "A first look at Molang"
---

# Molang: a Beginner's Guide

Molang (sometimes written as “MoLang”) is a scripting language that can be used to enhance Minecraft functionality. It's typically used one or two lines at a time, although there have been creators who have written pages and pages of the stuff to do incredible things ... because of course they did.

Molang can be used in pretty much any Minecraft JSON file a creator can access, usually in behavior packs and resource packs.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What Molang is and an example of where you could use it
> - How to change the experience and loot drop from an attack cow
> - How to edit the animation for our attack cow to make it even scarier

### Requirements

You’re going to want to feel comfortable using resource packs and behavior packs in Minecraft. Review these if you need to, and hang onto the attack cow behavior pack.

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction To Resource Packs](ResourcePack.md)
- [Introduction To Behavior Packs](BehaviorPack.md)

## Using Molang in a Behavior Pack

This tutorial starts with the completed attack cow behavior pack created from the behavior pack tutorial.

We are going to use Molang to make the attack cow drop more experience points. We are also going to edit a non-Molang line of code so the cow drops fancy End City loot instead of the usual leather and beef when you unalive it.

Open **cow.json** and find the `minecraft:cow_adult` line of code.

The original code looks like this:

```json
"minecraft:cow_adult": {
        "minecraft:experience_reward": {
          "on_bred": "Math.Random(1,7)",
          "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
        },
        "minecraft:loot": {
          "table": "loot_tables/entities/cow.json"
        },
```

The first line we care about is “on_death” inside the “Minecraft:experience_reward” section. This is the line of code that gives you those little green and yellow jinglies of experience.

This code:

```json
 "minecraft:experience_reward": {
          "on_bred": "Math.Random(1,7)",
          "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
        },
```

... translates to this:

“In the context of how a cow can reward experience points to a player, there are two ways; when you feed wheat to two cows so they breed a baby cow (“on_bred”) or when you kill a cow (“on_death”).

This line of code:

`"on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"`

translates to:

- Upon the death of a cow:
- Run a query to see who was the last player to hit it.
- If you find a player, then use a random number generator to pick 1, 2, or 3. Return that value as experience_reward.
- Otherwise, if something goes horribly wrong and we can’t find a player, then return a 0 and let’s pretend nothing happened.

Edit the “on_death” line to look like this:

`"on_death": "query.last_hit_by_player ? 300 * Math.Random(1,3) : 0"`

This multiplies the returned number of experience points by 300.

Now, let’s make the cow drop End City loot. Note: THIS IS NOT MOLANG! It's just simple JSON code editing. But, since we're here anyway...

In the conveniently close “minecraft:loot” section of the cow.json code, change the `“table”` line from this:

`"table": "loot_tables/entities/cow.json"`

to this:

`"table": "loot_tables/chests/end_city_treasure.json"`

Woohoo!

Here is a summary of what we just did:

```json
"minecraft:cow_adult": {
  "minecraft:experience_reward": {
      "on_bred": "Math.Random(1,7)",
      "on_death": "query.last_hit_by_player ? 300 * Math.Random(1,1) : 0"
  },
      "minecraft:loot": {
      "table": "loot_tables/chests/end_city_treasure.json"
  },
```

Save it. Play it. Enjoy your diamond armor.

## Resource Pack Animation with Molang

We are going to use a line of Molang in an animation file to make the cow’s head wobble around menacingly. You’re going to need a resource pack with the usual manifest file. It’s okay to use the one that gets created with the resource pack tutorial. You can also download one from the sample collection and test it out before moving on to this next bit:

[A resource pack sample](https://github.com/microsoft/minecraft-samples/tree/main/resource_pack_sample)

Everything works? Resource pack loads and the dirt is green or whatever? Great!

1. Create a folder on the same level as the **manifest.json** file and name it **animations**.
1. Put a text file in there and name it **cow.animation.json**
1. Copy and paste this text into that file:

```json
{
  "format_version": "1.8.0",
  "animations": {
    "animation.cow.baby_transform": {
      "loop": true,
      "bones": {
        "head": {
          "position": [0.0, 4.0, 4.0],
          "scale": 2.0
        }
      }
    },
    "animation.cow.setup": {
      "loop": true,
      "bones": {
        "body": {
          "rotation": ["-this", 0.0, 0.0]
        },
        "head": {
          "rotation": [0, 0, "math.sin(query.life_time*360) * 40"]
        }
      }
    },
    "animation.cow.setup.v1.0": {
      "loop": true,
      "bones": {
        "body": {
          "rotation": ["90 - this", 0.0, 0.0]
        }
      }
    }
  }
}

```

If you compare this code to the Vanilla animations/cow.animation.json file in the Vanilla Resource pack, you will see that the only change is the addition of this line of code:

```json
"head": {
       "rotation": [0, 0, "math.sin(query.life_time*360) * 40"]
      }

```

The code in brackets is Molang and it is using a sine function to control how the head rotates. Yay, trigonometry!

After you reload Minecraft and find (or summon) an "enhanced" cow, you can experiment with different values and functions in that expression to do different things.

Extra credit: Use the resource pack to edit the cow's skin to make it even more terrifying.

## Molang Links

So, you just learned one way to use Molang to harness the power of math and logical expressions to make your world more like how you want it. Another way is to use a third party program like Blockbench. Either way, it might help or inspire you to learn more about what Molang can do, so here are the reference files:

>- [Molang Introduction](../Reference/Content/MolangReference/Examples/MolangConcepts/MolangIntroduction.md)
>- [Domain Examples](../Reference/Content/MolangReference/Examples/MolangConcepts/DomainExamples.md)
>- [Query Functions](../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions.md)
>- [Experimental Query Functions](../Reference/Content/MolangReference/Examples/MolangConcepts/ExperimentalQueryFunctions.md)
