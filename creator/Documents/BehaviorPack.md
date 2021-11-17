---
author: v-josjones
ms.author: v-josjones
title: Introduction To Behavior Packs
ms.prod: gaming
description: A tutorial that is an introduction to Behavior Packs and how to add a series of attacking behaviors to an in-game cow mob.
---

# Introduction to Behavior Packs

Before building your first Add-On for Minecraft: Bedrock Edition, you will need to create a pack to hold your custom content. There are two types of packs that a creator can make: resource packs and behavior packs. A **behavior* pack** is a folder structure that contains files that drive entity behaviors, loot drops, spawn rules, items, recipes, and trade tables. This tutorial will go over how behavior packs are created and how to add a series of behaviors to an in-game cow entity to make it an aggressive enemy.

:::image type="content" source="Media/BehaviorPack/Introduction-to-Behavior-Packs.jpg" alt-text="Image of a cow chasing Steve":::

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to link Resource Packs and Behavior Packs utilizing **Dependency**.
> - What **Components** are and how they are used to define Minecraft entities.
> - How to add behaviors to an existing entity to alter its gameplay.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction To Resource Packs](ResourcePack.md)
- Download the [Vanilla Behavior Pack](https://aka.ms/behaviorpacktemplate)

## Building the Behavior Pack

A behavior pack contains files that creators use to add, remove, or alter gameplay behavior of entities within Minecraft. An entity's behavior file is what drives each entity to perform certain actions, such as a flock of chickens following a player holding seeds or whether a zombie will attack a player or another entity.

Behaviors give creators the ability to change the way entities act in the world. In this section, you will set up a folder for a new Behavior Pack called **My_BEHAVIOR_Pack**.

1. Open your **com.mojang** folder.
1. Open the **development_behavior_packs** folder.
1. Inside the development_behavior_packs folder, create a new folder and name it **My_BEHAVIOR_Pack**.
1. Open the **My_BEHAVIOR_Pack** folder.
    :::image type="content" source="Media/BehaviorPack/my_behavior_pack.png" alt-text="Image of My_BEHAVIOR_Pack folder located in the com.mojang development_behavior_packs folder":::

### The Manifest File

To load a behavior pack into Minecraft, a manifest file will need to be created. The behavior pack manifest file is similar to the one created for the resource pack, but it has an additional section.

1. Create a new document in your My_BEHAVIOR_Pack folder and name it **manifest.json**.
    1. You will need to change the file extension from .txt to .json. If your Explorer window does not show file extensions, you can enable File Name Extensions under the View tab.
    :::image type="content" source="Media/BehaviorPack/manifest_fileBP.png" alt-text="Image of the manifest.json file located within the My_BEHAVIOR_Pack folder":::
1. Double-click the **manifest.json** file to open it in a text editor.
1. Copy and paste the following code into your file.

```json
{
  "format_version": 2,
  "header": {
    "description": "My attack cow behavior pack Add-On!",
    "name": "My Behavior Pack",
    "uuid":"",
    "version": [1, 0, 0],
    "min_engine_version": [1, 16, 0]
  },
  "modules":
    [
      {
        "description": "My First Add-On!",
          "type": "data",
          "uuid": "",
          "version": [1, 0, 0]
      }
    ],
  "dependencies": [
    {
     "uuid":"<UUID from the header section of manifest.json in My_RESOURCE_Pack>",
      "version":[1,0,0]
    }
 ]
}
```

### UUIDs

Similar to the resource pack manifest file, you will need to generate two different UUIDs for the header and module sections of your manifest file. You can get UUIDs from an online generator such as https://www.uuidgenerator.net/.

![Image of UUIDGenerator.net home screen with a custom UUID generated](Media/BehaviorPack/UUID.png)
 
1. Copy and paste a UUID into the header section. The UUID will need to be pasted in the `"uuid"` field between the quotation ("") marks in order to be read correctly.
1. Refresh the webpage to generate a new UUID for use in the modules section.
1. Copy and paste the new UUID into the modules section in the `"uuid"` field between the quotation marks.
 
### Dependencies

There is a third section in the behavior pack's manifest.json file called 'dependencies' that is used to create a link between a resource pack and a behavior pack. This link is created when the UUID located in the header section of the resource pack's manifest.json file is the same as the UUID in the dependencies section of the behavior pack's manifest.json file.

1. Open the **manifest.json** file located in the **My_BEHAVIOR_Pack** folder in the **development_resource_packs** folder.
1. Copy the UUID from the **header** section of the resource pack **manifest.json** file.
1. Go to the **manifest.json** file located in the ***My_BEHAVIOR_Pack** folder in the **development_behavior_packs** folder.
1. Paste the UUID into the '"uuid"' field in the dependencies section.
1. Save the behavior pack manifest.json file.

## Entity

Each entity's behaviors are defined in its own entity.json file. Start working with **cow.json** by copying it over from the default vanilla Behavior Pack to your My_BEHAVIOR_Pack folder.

1. In the **My_BEHAVIOR_Pack** folder, create a folder and name it **entities**.
1. If you haven't already downloaded the [Vanilla Behavior Pack](https://aka.ms/behaviorpacktemplate) mentioned in the Requirements section of this tutorial, now is a good time to do so.
1. After downloading the Vanilla Behavior Pack, extract (or unzip) the folder so you can access the contents.
1. Navigate to the **entities** folder located in the extracted Vanilla Behavior Pack.
1. Copy the **cow.json** file from there and paste it into the **entities** folder you created inside the **My_BEHAVIOR_Pack** folder.

Before you start editing your cow behavior, let's get more familiar with the parts of the document and what, exactly, you're trying to do here.

### minecraft:entity

Like other Minecraft entity JSON files, cow.json contains a series of sections. The first section, `minecraft:entity`, is used as a container for information about what the entity is. Description, Components Groups, Components, and Events are contained in the `minecraft:entity` container. In the cow.json file, you can see the following content in its description section:

```json
"minecraft:entity": {
    "description": {
      "identifier": "minecraft:cow",
      "is_spawnable": true,
      "is_summonable": true,
      "is_experimental": false
    },
```

- **`identifier`** is the in-game name used to define an entity.
- **`is_spawnable`** is a Boolean (True/False statement) allowing the option for the entity to be spawned in the world.
- **`is_summonable`** is a Boolean allowing players to summon the entity using the command interface.
- **`is_experimental`** is a Boolean that flags if the entity is in an experimental state.

### Component Groups

Component groups are used to help organize and define a collection of behaviors for the entity. Component groups allow for variation in behaviors for similar types of mobs such as creating an adult and a child version of a single mob entity.  In cow.json, there are 2 groups: `"minecraft:cow_baby"` and `"minecraft:cow_adult"`. Shown below is the cow_baby component group.

```json
"component_groups": {
      "minecraft:cow_baby": {
        "minecraft:is_baby": {
        },
        "minecraft:scale": {
          "value":0.5
        },
        "minecraft:ageable": {
          "duration": 1200,
          "feed_items": "wheat",
          "grow_up": {
            "event": "minecraft:ageable_grow_up",
            "target": "self"
          }
        },

        "minecraft:behavior.follow_parent": {
          "priority": 6,
          "speed_multiplier": 1.1
        }
      },
```

In the cow.json sample shown above, you can see that the `"minecraft:cow_baby"` has dedicated components under it, controlling the size, its ability to age, and being able to follow an entity tagged as a parent.

### Components

Components define behaviors and properties that you can assign to an entity to adapt how they behave.

```json
    "components": {
      "minecraft:type_family": {
        "family": [ "cow", "mob" ]
      },
      "minecraft:breathable": {
        "total_supply": 15,
        "suffocate_time": 0
      },
```

You can see that the first two components are `"minecraft:type_family"` and `"minecraft:breathable"`. These components set which family categories the cow belongs to, and how well it can hold its breath before taking damage when it is under water or buried under sand or gravel. These are global settings that apply to any minecraft:cow entity, whether it is a baby or an adult.

### Events

Events are actions you can take on the entity when a special condition is triggered by the entity's behavior.

```json
    "events": {
      "minecraft:entity_spawned": {
        "randomize": [
          {
            "weight": 95,
            "add": {
              "component_groups": [
                "minecraft:cow_adult"
              ]
            }
          },
          {
            "weight": 5,
            "add": {
              "component_groups": [
                "minecraft:cow_baby"
              ]
            }
          }
        ]
    },
```

The `entity_spawned` event determines whether to spawn an adult cow or a baby cow in the world.

- **`randomize`** allows the use of defining the odds of the entity spawning in either group. Here, there is a 95/100 chance it could spawn an adult cow or a 5/100 chance to spawn a baby cow. Note that `randomize` does not work off of a percentage system. Instead, the odds are calculated via the sum of the `"weight"` definition. If you were to change `"weight": 5`, to `"weight":25`, it would have a 25/120 chance of spawning.

## Adding new behaviors

Now that you are more familiar with the areas of the JSON file that define an entity, you will add new behaviors to your copy of cow.json:

- `minecraft:behavior.nearest_attackable_target` defines what the cow is able to attack.
- `minecraft:behavior.meleeattack` allows the cow the ability to inflict damage on its target.
- `minecraft:attack` defines how much damage each hit from the cow does.

### minecraft:behavior.nearest_attackable_target

For the cow to attack, it will need to find a target. In this example, you will set the filter to look for `player` to make the cow a hostile mob that will attack any player.

```json
"minecraft:behavior.nearest_attackable_target":{
    "priority": 2,
    "must_see": true,
    "reselect_targets": true,
    "within_radius": 25.0,
    "entity_types": [
    {
      "filters":{
           "test": "is_family", "subject": "other", "value": "player"
        },
    "max_dist":32
    }
  ]
},
```

In the sample above, the **`nearest_attackable_target`** is a component that handles the behavior for detecting a potential target. The component has the following flags:

- **`priority`** is how important this component is compared to other behaviors. Lower numbers represent a higher priority, meaning that a component with a priority set to 1, will happen before another component set at 4.
- **`reselect_targets`** is a Boolean that allows the entity to re-target the same entity after an attack.
- **`within_radius`** defines a radius around the cow of what targets can be selected.
- **`entity_types`** collection of arguments that define what type of entity is considered a target.
- **`filters`** information about the type of entity the cow will target.
- **`max_dist`** is the distance in blocks between the cow and the potential target in the filter.
- **`must_see`** is a Boolean that determines if the cow needs to see its target. Because this is set to `true`, the cow will have to look directly at the player in order for the cow to consider the player a target.

### minecraft:behavior.melee_attack

After the cow locates a target, the next step is to make it attack. This is done with the `minecraft:behavior.melee_attack` component.

```JSON
"minecraft:behavior.melee_attack": {
        "priority": 3
      },
```

### minecraft:attack

Now that the cow can look for a target and attack, you will need to add a value to deal damage for each attack.

```json
      "minecraft:attack": {
        "damage": 3
      },
```

In the code example snippet above, you can see that the component has a single argument. `"damage"`is set to a value of `3`, which means that every attack will take away 1.5 hearts from a player’s life bar.

#### Adding the behaviors

Now that you know each behavior that is needed to make a cow attack a player, you will add the behaviors to the cow.json file in the **My_BEHAVIOR_Pack/entities** folder.

1. Copy the following code:

    ```json
          "minecraft:behavior.nearest_attackable_target":{
            "priority": 2,
            "must_see":true,
            "reselect_targets": true,
            "within_radius": 25.0,
            "entity_types":[
              {
                "filters":{
                  "test": "is_family", "subject": "other", "value": "player"
                },
                "max_dist":32
              }
            ]
          },
          "minecraft:behavior.melee_attack": {
            "priority": 3
          },
          "minecraft:attack":{
            "damage": 3
          }
    ```

1. Navigate to the `components` container in the **cow.json** file.
1. Below the behavior `minecraft:conditional_bandwidth_optimization`, after the comma ending the behavior, press Enter to add a new line.
1. Paste the code on the new line. 
1. Save the cow.json file.

> [!IMPORTANT]
> Commas are used to separate each behavior within the `components` section. When adding new behaviors, remember to add commas when necessary.

Shown below is the entire `components` section with the attack behavior added at the end.

```json
      "components": {
      "minecraft:is_hidden_when_invisible": {
      },
      "minecraft:type_family": {
        "family": [ "cow", "mob" ]
      },
      "minecraft:breathable": {
        "total_supply": 15,
        "suffocate_time": 0
      },
      "minecraft:navigation.walk": {
        "can_path_over_water": true,
        "avoid_water": true,
        "avoid_damage_blocks": true
      },
      "minecraft:movement.basic": {

      },
      "minecraft:jump.static": {
      },
      "minecraft:can_climb": {
      },
      "minecraft:collision_box": {
        "width": 0.9,
        "height": 1.3
      },
      "minecraft:nameable": {
      },
      "minecraft:health": {
        "value": 10,
        "max": 10
      },
      "minecraft:hurt_on_condition": {
        "damage_conditions": [
          {
            "filters": {
              "test": "in_lava",
              "subject": "self",
              "operator": "==",
              "value": true
            },
            "cause": "lava",
            "damage_per_tick": 4
          }
        ]
      },
      "minecraft:movement": {
        "value": 0.25
      },
      "minecraft:despawn": {
        "despawn_from_distance": {}
      },
      "minecraft:behavior.float": {
        "priority": 0
      },
      "minecraft:behavior.panic": {
        "priority": 1,
        "speed_multiplier": 1.25
      },
      "minecraft:behavior.mount_pathing": {
        "priority": 2,
        "speed_multiplier": 1.5,
        "target_dist": 0.0,
        "track_target": true
      },
      "minecraft:behavior.breed": {
        "priority": 3,
        "speed_multiplier": 1.0
      },
      "minecraft:behavior.tempt": {
        "priority": 4,
        "speed_multiplier": 1.25,
        "items": [
          "wheat"
        ]
      },
      "minecraft:behavior.follow_parent": {
        "priority": 5,
        "speed_multiplier": 1.1
      },
      "minecraft:behavior.random_stroll": {
        "priority": 6,
        "speed_multiplier": 0.8
      },
      "minecraft:behavior.look_at_player": {
        "priority": 7,
        "look_distance": 6.0,
        "probability": 0.02
      },
      "minecraft:behavior.random_look_around": {
        "priority": 9
      },
      "minecraft:leashable": {
        "soft_distance": 4.0,
        "hard_distance": 6.0,
        "max_distance": 10.0
      },
      "minecraft:balloonable": {
      },
      "minecraft:rideable": {
        "seat_count": 1,
        "family_types": [
          "zombie"
        ],
        "seats": {
          "position": [ 0.0, 1.105, 0.0 ]
        }
      },
      "minecraft:physics": {
      },
      "minecraft:pushable": {
        "is_pushable": true,
        "is_pushable_by_piston": true
      },
      "minecraft:conditional_bandwidth_optimization": {
      },
      "minecraft:behavior.nearest_attackable_target":{
        "priority": 2,
        "must_see":true,
        "reselect_targets": true,
        "within_radius": 25.0,
        "entity_types":[
          {
            "filters":{
              "test": "is_family", "subject": "other", "value": "player"
            },
            "max_dist":32
          }
        ]
      },
      "minecraft:behavior.melee_attack": {
        "priority": 3
      },
      "minecraft:attack":{
        "damage": 3
      }
    }, 
```

### Testing the Pack

Now that the pack has both a manifest file and a modification for the cow entity, it is time to launch Minecraft and test your new Add-On. As stated in the Resource Pack, **Pack Stacking** will work for Behavior Packs as well. This means that when content is loaded, vanilla content is loaded first, followed by any additional Add-Ons. Because all cows are controlled by the cow.json behavior file, all cows that spawn into your world will have the new behavior.

1. Launch Minecraft and select **Play**.
1. Select **Create New World**.
1. Under **Settings**, scroll down to the **Add-Ons** section.
1. Click on **Behavior Packs** to see all available packs.
1. Click the **MY PACKS** drop-down to open it.
1. Select **My BEHAVIOR Pack** and click **Activate** to add the behavior pack to the world.
1. Click **Create** to create your world.
1. Go find a cow.

## What's Next?

Now that you have learned how behavior files work, you can view the Entity JSON Reference documentation to learn more about the different behaviors available in Minecraft.

> [!div class="nextstepaction"]
> [Entity JSON Documentation](../Reference/Content/EntityReference/index.yml)
