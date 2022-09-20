---
author: mammerla
ms.author: v-jillheaden
title: Entity Behavior Introduction
ms.prod: gaming
description: "An article discussing how to use entity behavior files to add customized behaviors to entities."
---

# Entity Behavior Introduction

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to create and use behavior files to change an entity's behavior.
> - How to use components to expand an entity's behavior.
> - How to use events to modify active components based on some condition.

## Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Add Entity](IntroductionToAddEntity.md)

## Introduction

Entity JSON files in Minecraft: Bedrock Edition customize how an entity behaves and interacts with the world. They're a part of behavior packs, but behavior packs can contain more functionality including functions, loot tables, and more.

Entity JSON files were first introduced along with add-ons as a way to customize how Vanilla entities behave.

Entity JSON file structure includes:

- **Metadata** such as the identifier, spawning and summoning settings.
- **Components** that define active behavior such as visibility, family, health, and collision box behavior. These behaviors are applied to the entity immediately.
- **Component groups** are not applied but may be evoked by events. They apply additional Minecraft behavior, including behaviors like aging and herd behavior.
- **Events** which allow custom behavior to run based on the Minecraft event system. We will discuss events more in the [Entity Events article](EntityEvents.md).

Components were created to be small units of reusable behaviors to be used by creators to customize entities. For example, the tameable component can make entities like ocelots and wolves tameable.

When Add Entity was introduced, entity JSON files became a way to create new entities from scratch using all the components from Vanilla entities.

There are two ways in which entity JSON files can be used:

- Modifying Vanilla entities. Since the introduction of Add Entity, this should only be used for small adjustments to the Vanilla game, not for additional content.
- Creating custom entities. Entity JSON files serve as the base for custom entities.

## Format Overview

Entity JSON files are saved in the entities folder of your behavior pack. The game loads all files in that folder so you can use subfolders to manage your entities. The files use the extension `.json`. This extension is used by a lot of files within add-ons, so if you want to avoid confusion, you can use the extended extension `.behavior.json` for entity JSON files specifically.

The files are written in JSON and the basic structure looks like this:

```JSON
{
    "format_version":"1.19.20",
    "minecraft:entity":{
        "description":{
            "identifier":"sample:example",
            "is_spawnable":true,
            "is_summonable":true
        },
        "components":{
            
        },
        "component_groups":{
            
        },
        "events":{
            
        }
    }
}
```

Inside the description tag, a few basic properties define how the game registers the entity:

| **Parameter Name** | **Type** | **Description**    |
|---|----------|--------|
| `identifier`  | String   | Identifier of the entity. If this is a custom entity in an add-on, you should use a custom unique namespace as seen in the example.|
| `runtime_identifier` | String   | Identifier that's used internally by the game. This can be used to inherit custom mechanics from Vanilla entities that are not yet available as a component. Only one runtime identifier may be specified per entity. **Only use this if it is really necessary.** If a Vanilla entity's mechanics are turned into components, you may lose functionality if you are relying on those mechanics through a runtime identifier. |
| `is_spawnable`   | Boolean  | If true, a spawn egg for the entity is added to the creative inventory.   |
| `is_summonable` | Boolean  | If true, the entity can be summoned using the `/summon` command.  |
| `animations`  | Object   | A list of behavior animations or behavior animation controllers. These aren't used for visible model animations. These can be used to run commands or events on the entity.|
| `scripts` | Object   | Scripts work similarly to how they work in client entity files, and they can be used to play behavior animations.  |

## Components Basics

A full list of available components can be found in the [Component List](/minecraft/creator/reference/content/entityreference/examples/componentlist) documentation.

A good way to learn about a component and see how it's used in practice is to look at the entity JSON files of default Minecraft entities. You can always find the latest default behavior pack at this URL: <https://aka.ms/behaviorpacktemplate>.

> [!NOTE]
> The way a component works can sometimes change between versions. Learn more about versions in [the manifest reference documentation](../reference/content/addonsreference/examples/addonmanifest). You're encouraged to always use the latest version of the component as it's been refined and can include fixes.

## Essential Components


| **Component Name**   | **Options**| **Description**  |
|----|-----------|--------|
| `minecraft:physics`| `has_collision`  `has_gravity` | You'll need this component on 99% of custom entities. It allows the entity to stay on the ground and react to interaction and punches in a way that you would expect.      |
| `minecraft:scale`  | `value` | Sets the relative size of the entity.   |
| `minecraft:collision_box` | `width` `height` | Specifies the area an entity takes up in the world. Only the width and height can be changed. The collision box always has a square base that's aligned to the world axes. |
| `minecraft:type_family`   | `family`| Sets a list of type families that the entity is in. Type families can be tested by other entities. For example, to test which mobs they are hostile towards. |
| `minecraft:movement`      | `value` | Sets the movement speed of the entity. 0.25 is the regular speed of most animals in Minecraft.  |
| `minecraft:movement.basic`| [See documentation](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_movement.basic.md)   | Allows the entity to move around on the ground.|
| `minecraft:navigation.walk `   | [See documentation](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_navigation.walk.md)   | Allows the entity to navigate through the world by walking. There are other types of navigation as well, like hovering.   |
| `minecraft:is_baby ` `minecraft:is_ignited`  `minecraft:is_saddled`  `minecraft:is_sheared`  `minecraft:is_tamed`  `minecraft:is_illager_captain` | `value` | These components don’t do anything on their own, but they can be queried in animations, animation controllers, or render controllers, allowing you to control animations and other visuals from the entity behavior. |
| `minecraft:variant` `minecraft:mark_variant`  `minecraft:skin_id `  | `value` | These components work like the ones above, but instead of only storing an on/off state, they can store an integer value.  |

## Priorities

The option `priority` can be used on all behavior components that are AI goals. 0 is the highest priority and the default priority of all behavior components. The higher the number, the lower the priority. If the entity is busy doing a low priority behavior and a high priority behavior comes up, the entity will immediately switch to the higher priority behavior.

In the following example, the `hurt_by_target` component has a higher priority. If the entity gets attacked while strolling, it will immediately target the attacker.

```JSON
"minecraft:behavior.random_stroll":{
    "priority":4
},
"minecraft:behavior.hurt_by_target":{
    "priority":1
}
```

Components are properties or mechanics that you can add to your entity. There are two ways to add components: 1. Directly to the **component tag** or 2. In a **component group**.

- Components added to the base **component tag** are always active unless removed or replaced through a component group in an event.
- **Component groups** are sets of one or more components each that aren't active by default but can be enabled or disabled through events. For instance, this can be used to create a variation of the entity, such as a baby cow.

## Adding Component Groups

These groups must be defined in the `component_groups` section of the file. As entities can only have one component of each type active, any components in a group that is being added will replace previously added components.

Additionally, adding a component group that is already active will cause those components to be re-initialized. For some types of components like `minecraft:is_baby`, re-initializing an already active component has no effect, but for other component types the associated logic will start over.

For example, an already-added `minecraft:timer` that is added again will start its timing logic over.

### Component Groups Example

In this example, a component group is defined which can cause the entity to become a baby variation. The components defined in the main component section are always active, while the components in the baby component group are only active when that group is added by the `sample:add_baby` event.

```JSON
{
    "format_version":"1.19.0",
    "minecraft:entity": {
        "description": {
            "identifier":"sample:example",
            "is_spawnable":true,
            "is_summonable":true
        },
        "components":{
            "minecraft:physics": {
                
            }
        },
        "component_groups": {
            "sample:baby":{
                "minecraft:behavior.follow_parent": {
                    
                },
                "minecraft:is_baby": {
                    
                }
            }
        },
        "events": {
            "sample:add_baby": {  
                "add”: {
                 “component_groups”: { 
                    [“baby”]
                }
            }
        }   

    }
}
```

All Minecraft components use the `minecraft:` namespace, which you can use when referring to a built in Minecraft behavior. Custom behaviors need to use a different namespace.

Almost all components are defined as a JSON object. Most components have options that can be specified inside this object, but some components work without options, as shown in the previous example.

### Removing Components

When a component group is removed from an entity, the effect of the components will be removed as well. This won’t cause any problems in most cases. But in some cases, it's important to consider that components **overwrite** each other. Therefore, removing a component won’t make it go back to the previous state of that component, and it won’t use the same component from another component group or the base components. Instead, the component will be **removed completely** and reset to its default values.

Here's an example: Let’s say you have an entity with a scale of 2 defined in the base components tag. You add a baby component group with a scale component that sets the scale to 1.5. This will correctly update the scale to 1.5. Now, you remove that component group again. Instead of going back to 2, the scale will now be reset to 1. This happens because removing the component group will also remove the scale component entirely.

There are a few components where this is important to consider:

- Components that change a value of the entity like `minecraft:scale`, `minecraft:collision_box`, or `minecraft:variant`.
- List components like `minecraft:interact`, `minecraft:environment_sensor`, or `minecraft:damage_sensor`.
- Any other components that you might want to have different states of like `minecraft:rideable` which has different seat counts or positions.

In order to avoid this behavior, you need to add a new component group with the updated state of the component. In the case of the scale example, this can be as easy as having two different component groups for the different states that you can switch between.

```JSON
"components":{
    "minecraft:scale":{
        "value":2
    }
},
"component_groups":{
    "baby":{
        "minecraft:scale":{
            "value":1.5
        }
    },
    "adult":{
        "minecraft:scale":{
            "value":2
        }
    }
},
"events":{
    "set_baby":{
        "remove":{
            "component_groups":[
                "adult"

            ]
        },
        "add":{
            "component_groups":[
                "baby"
            ]
        }
    },
    "set_adult":{
        "remove":{
            "component_groups":[
                "baby"
            ]
        },
        "add":{
            "component_groups":[
                "adult"
            ]
        }
    }
}
```

## Use Entity Components

If you ever get stuck or want a better understanding on how a component works, checking the Vanilla entity JSON files will allow you to see working examples. Deconstructing a Vanilla entity and applying it to a different entity is a great way to get started.

Here are a few ideas:

- Take the `minecraft:teleport` component from an Endermen and apply it to a creeper.
- Make a zombie rideable by the player.
- Make baby creepers.

## What's Next?

The component system allows you to customize what your entity does and how it interacts with the world. If you want to learn more about entity events and using them to add more component groups with more customized behavior, see the Entity Events documentation.

> [!div class="nextstepaction"]  
> [Entity Events](EntityEvents.md)
