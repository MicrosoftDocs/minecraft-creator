---
author: v-josjones
ms.author: v-josjones
title: Introduction To Behavior Packs
ms.prod: gaming
description: A tutorial that is an introduction to Behavior Packs and how to add a series of attacking behaviors to an in-game cow mob.
---

# Introduction to Behavior Packs

Before building your first Add-On, you will need to create a pack in order to add any custom content in Minecraft: Bedrock Edition. There are two types of packs that a creator can make; resource and behavior packs. A **behavior* pack** is a folder structure that contains files that drive entity behaviors, loot drops, spawn rules, items, recipes and trade tables. This tutorial will go over how behavior packs are created and how to add a series of behaviors to an in-game cow entity to make it an aggressive enemy.

:::image type="content" source="Media/BehaviorPack/Introduction-to-Behavior-Packs.jpg" alt-text="Image of a cow chasing Steve":::

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to link Resource Packs and Behavior Packs utilizing **Dependency**.
> - What are **Components** and how they are used to define Minecraft entities.
> - How to add behaviors to an existing entity to alter its gameplay.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction To Resource Packs](ResourcePack.md)
- Download the [Vanilla Behavior Pack](https://aka.ms/behaviorpacktemplate)

## Building the Behavior Pack

A behavior pack is a type of pack that allows creators to add, remove or alter gameplay behavior of entities within Minecraft. Within those entity files, behaviors are what drive each entity to perform certain actions, such as a flock of chickens following a feather or whether a zombie will attack a player or another entity.

Behaviors give creators the ability to change the way entities can act in the world. In this section, you will set up a folder for a new Behavior Pack called **HelloWorldBP**.

1. Open your game location folder **com.mojang**.
1. Double-click on the folder **development_behavior_packs**.
1. Right-click in the File Explorer window and select **New** and then **Folder** to create a new folder.
1. Name the new folder **HelloWorldBP**.
1. Double-click on **HelloWorldBP** to open the folder.
    :::image type="content" source="Media/BehaviorPack/helloworldBP.png" alt-text="Image of Hello World BP folder located in the behavior pack folder":::

### The Manifest File

In order to load a behavior pack into Minecraft, a manifest file will need to be generated. The manifest file is similar to the one created for a Resource Pack, but has a new section that will need to be added in.

1. Right-click in the Explorer window and select **New**, then select **Text Document**.
1. Set the name to **manifest.json**.
    1. You will need to change the file extension from .txt to .json. If your Explorer window does not show file extensions, you can enable File Name Extensions under the View tab.
    :::image type="content" source="Media/BehaviorPack/manifest_fileBP.png" alt-text="Image of the manifest.json file located within the HelloWorldBP folder":::
1. Double-click on **manifest.json** to open it in a Text Editor.
1. Copy/Paste the following text into your text editor.

```json
{
  "format_version": 2,
  "header": {
    "description": "My First Add-On!",
    "name": "HelloWorldBP",
    "uuid":"",
    "version": [1, 0, 0],
    "min_engine_version": [1, 16, 0]
  },
  "modules": [
    {
      "description": "My First Add-On!",
      "type": "data",
      "uuid": "",
      "version": [1, 0, 0]
    }
  ]
}
```

> [!NOTE]
> For `format_version`, `2` is used as the value for the manifest.json file. While `"1.16.0` or `[1.16.0]` are used in vanilla manifest files, it is recommended to use the latest `"format_version": 2` for custom content.

### UUID

Similar to the resource pack manifest file, a series of UUIDs will need to be generated in order to load the pack into Minecraft. For the Header and Modules, there will need to be 2 different UUID numbers entered between the quotes. You can use an online UUID Generator such as https://www.uuidgenerator.net/

![Image of UUIDGenerator.net home screen with a custom UUID generated out](\Media\BehaviorPack\UUID.png)

1. Copy and paste a UUID into the Header section. The UUID will need to be pasted between the quotation ("") marks in order to be read correctly.
1. Reload the webpage in order to generate a new UUID for use in the Modules section.
1. Copy and paste the new UUID into the Modules section in-between the quotation marks.
1. Save the manifest file.

### Dependencies

For a behavior pack, you can add a 3rd section to the manifest.json file called Dependencies. Dependency creates a link between a Behavior pack and a Resource pack via UUID located in the header section of the Resource pack manifest.json. Add a dependency for your helloWorldRP resource pack you previously created and set it to automatically activate when the behavior pack is activated.

Below is an example of what the completed Behavior Pack Manifest File will look like.

```json
{
  "format_version": 2,
  "header": {
    "description": "My First Add-On!",
    "name": "Hello WorldBP",
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
      },
    ],
  "dependencies": [
    {
      "uuid":"<Insert the UUID from HelloWorldRP>",
      "version":[1,0,0]
    }
 ]
}
```

1. In the example shown above, copy the dependencies section.
1. Paste the dependency section below the modules section. Use the example above as a reference.
    1. Note the JSON formatting above.
1. Copy and paste the UUID from the **header** section in the **manifest.json** located in the **HelloWorldRP** folder into the Dependencies section.
1. Add a comma after the closing bracket located above dependencies.

## Entity

Each character’s behaviors are defined using a json file. For this section, you will copy the **cow.json** file located in the default vanilla Behavior Pack.

1. In the **HelloWorldBP** folder, right-click in the File Explorer window and select **New** and then **Folder** to create a new folder.
2. Name the folder **entities**.
3. Verify that you have downloaded the Vanilla Behavior Pack located in the Requirements section of this tutorial.
4. Unzip the folder in order to access the files within.
5. Navigate to the **entities** folder located in the unzipped pack.
6. Copy the **cow.json** and paste it into the **HelloWorldBP/entities** folder.

Now with a copy of the cow.json file located in the HelloWordBP, you can make changes and edit the behavior of the existing cow mob. Cow.json, like other Minecraft entity json files can be broken down into a series of sections.

### minecraft:entity

The first section is the `minecraft:entity`. This container is used to define what the entity is. Description, Components Groups, Components, and Events are contained under the `minecraft:entity` object. In the cow.json, you can see the following set for its description:

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
- **`is_spawnable`** is a Boolean (True/False statement) allowing the option for the entity to be spawned in the world
- **`is_summonable`** is a Boolean allowing players to summon via command interface.
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

In the cow.json sample shown above, you can see that the `"minecraft:cow_baby"` has dedicated components under it, controlling the size, its ability to age, and being able to follow something tagged as a parent.

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

In the cow.json, you can see that the first two components are `"minecraft:type_family"` and `"minecraft:breathable"`. These components set which family categories the cow belongs to, and how well it can hold its' breath while underwater before taking damage. These are global settings that apply to any minecraft:cow entity regardless if it is a baby or an adult.

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

In the cow.json file shown above, an entity_spawned event is defined here in order to spawn either an adult cow or a baby cow in the world.

- **`randomize`** allows the use of defining the odds of the entity spawning in either group. Here, there is a 95/100 chance it could spawn an adult cow or a 5/100 chance to spawn a baby cow. Note that `randomize` does not work off of a percentage system. Instead, the odds are calculated via the sum of the `"weight"` definition. If you were to change `"weight": 5`, to `"weight":25`, it would have a 25/120 chance of spawning.

## Adding new behaviors

Now that you know the 4 areas that define an entity, you will add new behaviors to an existing mob. In this example, you will add the following behaviors:

- `minecraft:behavior.nearest_attackable_target` to define what the cow is able to attack.
- `minecraft:behavior.meleeattack` to allow every cow the ability to inflict damage on its target.
- `minecraft:attack` to define how much damage each attack does.

### minecraft:behavior.nearest_attackable_target

In order for the cow to attack, it will need to find a target that can be attacked. In this example, you will set the filter to look for `player` in order to make the cows a hostile mob and attack any player.

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
- **`within_radius`** defines a radius around the cow of what targets can be selected
- **`entity_types`** is a collection of arguments that define what type of entity is considered a target.
- **`filters`** is what type of entity the cow will look for.
- **`max_dist`** is the distance in blocks between the cow and the potential target in the filter.
- **`must_see`** is a Boolean that determines if the cow needs to have vision on its target. The cow will have to look directly at the player in order for the cow to consider the player a target.

### minecraft:behavior.melee_attack

Once the cow is able to locate a target, the next step is to allow an attack using the `minecraft:behavior.melee_attack` component.

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

In the snippet above, you can see that the component has a single argument. `"damage"`is set to a value of `3`, meaning every attack will take away 1.5 hearts from a player’s life bar.

#### Adding the behaviors

Now that you know each behavior that is needed to make a cow attack a player, you will now add the behaviors to the cow.json file in the **HelloWorldBP/entities** folder.

1. Copy the following code:

    :::code language="json" source="CodeSnippets/BehaviorPack/cow.json" range="185-204":::

1. Navigate to the `components` container in the **cow.json** file.
1. Below the behavior `minecraft:conditional_bandwidth_optimization`, after the comma ending the behavior, press Enter to add a new line.
1. Paste the code on the new line.

    1. If there is another behavior after `minecraft:attack`, add a comma after the closing bracket.
1. Save the cow.json file.

> [!IMPORTANT]
> Commas are used to separate each behavior within the `components` section. When adding new behaviors, remember to add commas when necessary.

Shown below is the completed component's section with with the added behavior.

:::code language="json" source="CodeSnippets/BehaviorPack/cow.json" range="77-206":::

### Testing the Pack

Now that the pack has both a manifest file and a modification for the cow entity, you can now launch Minecraft and test your new Add-On. As stated in the Resource Pack, **Pack Stacking** will work for Behavior Packs as well. This means that content is loaded with any and all vanilla content being loaded first, followed by any additional Add-Ons. Since the cow is using the cow.json namespace, every cow will inherit the new behaviors.

1. Launch **Minecraft**.
1. When Minecraft has launched and reached the main menu, select **Play**.
1. Select **Create a New World**.
1. Under **Settings**, scroll down to the **Add-On** section.
1. Click on **Behavior Packs** to see all available packs.
1. Under all of the packs, select **HelloWorldBP** to add the pack to the world.
1. Launch your world.

## What's Next?

Now that you have learned how behaviors work, you can view the Entity JSON Reference documentation to learn more about the different behaviors are available in Minecraft.

> [!div class="nextstepaction"]
> [Entity JSON Documentation](../Reference/Content/EntityReference/index.yml)
