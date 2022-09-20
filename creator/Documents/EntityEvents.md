---
author: mammerla
ms.author: v-bbortree
title: Entity Events
ms.prod: gaming
description: "An article discussing how to use entity events to add and remove behaviors for entities."
---

# Entity Events

In this tutorial you will learn more about events, including sequential events, randomized events, and how event spawning behavior works. This article will cover:

> [!div class="checklist"]
>
> - How to use events to modify active components based on some condition.
> - How to use sequential and randomized events for more exciting behavior.
> - Advanced entity events topics including execution and spawn events.

## Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Add Entity](IntroductionToAddEntity.md)
- [Entity Behavior Introduction](EntityBehaviorIntroduction.md)

## Events Overview

Events are used to add and remove component groups from the entity. In this example, an old component group is removed while two new ones are added:

```json
"events":{
    "sample:example_event":{
        "remove":{
            "component_groups":[
                "sample:group_a"
            ]
        },
        "add":{
            "component_groups":[
                "sample:group_b",
                "sample:group_c"
            ]
        }
    }
}
```

## What causes entity events to run?

Events can be called from several locations:

- Active components on the entity behavior JSON
  - For example, the `minecraft:ageable` component on baby mobs has a `grow_up` property whose `event` is run on the same entity. For the Minecraft cow, this event is called `minecraft:ageable_grow_up`, and that event adds the `minecraft:cow_adult` component group after removing the `minecraft:cow_baby` component group.
- Other events on the entity behavior JSON
  - An event can run another event. For example, the Minecraft sheep's `minecraft:entity_spawned` event has a `randomize` section that specifies a `trigger` to run either the `spawn_adult` or `spawn_baby` event.
- Behavior pack animation events
  - Animations in Behavior Packs can run events from their timelines by using a string like `@s example:event_name`
- Behavior JSON from other entities
  - Events are typically run from the owning entity, but in some cases the events can be run from other entities. One example is the `wololo` spell, which is something the Evoker can do to turn a nearby sheep from blue to red. This is done by the Evoker's `minecraft:behavior.send_event` behavior, which sends the `wololo` event to the other nearby Sheep entity.
- Built-in code behavior
  - While most events are run by discoverable things in the games's JSON files, there are a few that are called directly from the Minecraft game code. One example is the `minecraft:hive_full` event, which is fired by beehives to any bee that tries but fails to enter the hive due to lack of available space.
- The `/event` command
  - The `/event command` runs the specified event on any targeted entities that have an event with the same name defined. These can come from any of the places that can run commands – players typing them manually, Command Blocks, behavior pack animations, functions, or Scripting.
- The`/summon`command
  - The`/summon`command can take a `spawn event` argument. When the desired entity is created, the specified spawn event is run instead of any other assumed spawn event, like `minecraft:entity_spawned`. The [What are Spawn Events?](#what-are-spawn-events) section on this page has more information.

## Built-in Events

A few events are built into Minecraft and run if the entity is spawned under certain conditions.

| **Event Name**               | **Essential components**                                                            |
|------------------------------|-------------------------------------------------------------------------------------|
| `minecraft:entity_born `       | Runs when the entity is spawned by breeding.                                        |
| `minecraft:entity_spawned `    | Runs whenever the entity spawns. Note that it won't run if you manually `/summon` it. |
| `minecraft:entity_transformed` | Runs when another entity transforms into this entity.                               |
| `minecraft:on_prime`           | Runs when the entity is primed and ready to explode.                                |


### What are Spawn Events?

The `/summon` command and a few entity components can take a `spawnEvent` argument. Spawn events have been described in several places as any of the events that can be found in an entity's behavior definition, but this isn't entirely accurate.

The Minecraft engine has a concept of a desired `spawn event` when an entity is created. When an entity is created from a spawn egg for example, the `minecraft:entity_spawned` event is run as the spawn event. When an entity is created, for example from two cows breeding, the spawn event is `minecraft:entity_born`.

Other examples of less common spawn events are:
- `minecraft:entity_transformed` which is often used by a `minecraft:transformation` component.
- `minecraft:from_wandering_trader` which is a spawn event on the llama that is used when the Wandering Trader spawns to create its appropriately decorated llamas.

The spawn event that is used when creating an entity, whether the event is specified or automatically selected, is run on the entity as it is being created. You can think of it as a `constructor` in programming language terms. The entity starts with the default-included components list, as specified in its behavior JSON file. Then it also gets the effects of its spawn event, which will probably `add` one or more `component_groups`, possibly based on some random selection.

Using the `minecraft:cow` as an example, it has both a `minecraft:entity_spawned` and `minecraft:entity_born` event. `minecraft:entity_spawned` has a 95% chance of calling the `minecraft:spawn_adult` event (which adds the `minecraft:cow_adult` component group), and a 5% chance of adding the `minecraft:cow_baby` component group. The `minecraft:entity_born` event simply always adds the `minecraft:cow_baby` component group.

In this case, all of those events can be considered `spawn events`, because they're meant to be called for various reasons as part of initialization of a new `minecraft:cow` entity. They either end up with the cow having adult or baby-related components such as the interaction to get a bucket of milk using an empty bucket, or the ability to grow into an adult after being fed enough wheat.

This overall system of events, some of which are meant as spawn events, works well enough in the standard game of Minecraft, but strange things can happen if events are used in unexpected ways.

### Strange Entity States Are Possible

For example, what happens if you use the command `/summon minecraft:cow ~ ~ ~ missing_event`? The cow has no event named `missing_event`, so it will use that as its spawn event instead of `minecraft:entity_spawned`. The result will be a cow that isn't a baby but also isn't interactable to get a bucket of milk.

A similarly strange situation can happen when using the `/event` command to run a spawn event on an already-created entity. If you use that command to run `minecraft:entity_born` on an adult cow, you can end up with a cow that can be interacted with for milk, but otherwise mostly behaves like a baby.

The side-effects of using events in unexpected ways will vary based on the nuances of how any particular entity is authored. Sometimes the entity won't misbehave, but other times it might lack the ability to move, or have a very wrong scale, or any number of unexpected traits.

> [!NOTE]
> These strange conditions of entities can be very entertaining, because they're unexpected, they also aren't intentionally supported. It's possible the specific behaviors of these odd states will change from one game version to the next as other intentional behavior is adjusted for new features or for bug fixing.

## Randomizers

If you want to randomize which component group gets added to the entity, you can use the randomize function. You specify an array of objects, each of which can add and remove component groups. The game will randomly pick and run one of these objects.

Optionally, you can add a weight option to the options to change the probability of each option. All weights can be combined count to add up to 100%. In the following example, the entity will spawn as a baby with a 20% (1 to 5) chance, while in the other cases, no component group is added:

```json
"events":{
    "minecraft:entity_spawned":{
        "randomize":[
            {
                "weight":40
            },
            {
                "weight":10,
                "add":{
                    "component_groups":[
                        "baby"
                    ]
                }
            }
        ]
    }
}
```

## Sequences

The `sequence` node is an array node that will execute all entries in order. Sometimes you need to run multiple event instances one after the other in the same event. Sequences are structured similarly to randomizers, but each item in the list is executed in order

For example, you might want to randomize two aspects of the entity, like the color and mark pattern. In this case, you can use a sequence

Sequences and randomizers can be nested indefinitely.

In this example, the group initial will be added when the entity is spawned. After that, the baby component will be randomized like in the previous section.


```json
"events":{
    "minecraft:entity_spawned":{
        "sequence":[
            {
                "add":{
                    "component_groups":[
                        "initial"
                    ]
                }
            },
            {
                "randomize":[
                    {
                        "weight":40
                    },
                    {
                        "weight":10,
                        "add":{
                            "component_groups":[
                                "baby"
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
```

## Filters

Filters condition an event or a part of an event by testing for a specific property on the current entity, the interacting entity, or the world. Filters can be used in any event, but you can also use them directly in some components.

An event consists of up to five parameters. The parameters test and value are required — the others are optional:

| **Test Type** | **The property to test for**                                                                                                                           |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| test          | The test that will be run.                                                                                                                             |
| value         | The value to test for. This can be a string when testing for strings, a number when testing for numeric values, or a boolean.                          |
| subject       | The entity that the test runs on. By default this is self, but it can also target the other entity involved in an interaction.                         |
| operator      | The way in which the value is compared. This defaults to equals but can also test for smaller or greater values (on numeric values) or for inequality. |
| domain        | This is only used by a few tests to provide additional context, such as the inventory slot to test in for the has_equipment test.                      |

> [!NOTE]  
> A full list of the filters, and how these parameters interact with them, can be found in [the Entities filter list](../reference/Content/EntityReference/Examples/FilterList.md).

A minimal example of a filter inside an event could look like the sample below. The component group can only be added if the entity has the tag `event_allowed`.

```json
"events":{
    "sample:example_event":{
        "filters":{
            "test":"has_tag",
            "value":"event_allowed"
        },
        "add":{
            "component_groups":[
                "baby"
            ]
        }
    }
}
```

> [!NOTE]
> A `format_version` of `1.19.20` or higher is required to use a filter at the root of an event. If a lower `format_version` is specified, filters will only be respected by the game if they are underneath `sequence` or `randomize` nodes.

If you want to use multiple filters, you can group them using the lists `all_of`, `any_of`, or `none_of` and will only succeed if all of the filters inside, any one of the filters inside, or none of the filters inside succeeded. These lists can be nested indefinitely.

In the following example, we're adding a second condition to the filter. The event will only run if the entity has the tag from the previous example **and** is less than 10 blocks away from the nearest player.

```json
"events":{
    "sample:example_event":{
        "filters":{
            "all_of":[
                {
                    "test":"has_tag",
                    "value":"event_allowed"
                },
                {
                    "test":"distance_to_nearest_player",
                    "operator":"<",
                    "value":10
                }
            ]
        },
        "add":{
            "component_groups":[
                "baby"
            ]
        }
    }
}
```

## Event Execution Order

When an event is received, the effects of that event are determined immediately, but those changes are not applied to the entity until the entity ticks on the server side of the game. This means filters in later entries in a `sequence` array won't see changes from earlier in that array.

It also means that when one entity sends an event to another entity, it could take effect on the same game tick or on the next tick, depending on whether the target entity has already been updated.

Here is an example of this nuance. An entity type has a component group defined that contains a `minecraft:is_baby` component. That entity type also has an event that adds this component group, then immediately calls another event that tests for that component. The test for that component would not see the component because it doesn`t exist on the entity instance yet, its addition is still pending.

```json
"component_groups":{
    "`example":"be_baby":{
        "`minecraft":"is_baby":{}
        }
    },
    "`example":"another_group":{
        "`minecraft":"scale":{
            "value":0.5
        }
    },
"events":{
    "`example":"become_baby":{
        "add":{
            "component_groups":[
                "`example":"be_baby"
            ]
        },
        "trigger":"`example":"scale_check"
    },
    "`example":"scale_check":{
        "sequence":[
            {
                "filters":{
                    "test":"has_component",
                    "value":"minecraft:is_baby"
                },
                "add"{
                    "component_groups":[
                        "`example":"another_group"
                    ]
                }
            }
        }
    }
}
```

Imagine an entity with the above JSON does not have any component groups added yet, and it receives an `example:become_baby` event.

1. The event will immediately queue the `example:be_baby` component group for addition, then right away call its `example:scale_check` event.
2. The `example:scale_check` event is handled, which checks its `has_component` filter to see if the `example:another_group` component group should be added.
3. Because the `example:be_baby` component group's addition is still pending, the entity does not yet have a `minecraft:is_baby` component, so the `example:scale_check` event ends up doing nothing.
4. The next time the entity updates (which happens every server tick, 20 times a second), the `example:be_baby` component group is added, which adds the `minecraft:is_baby` component.
5. After that, receiving the `example:scale_check` event would cause the event's filter logic to allow adding the `example:another_group` component group.

## What's Next?

The entity events system allows for component groups and custom functionality to be included in both existing Vanilla entities and new, custom entities. If you want to learn more about designing how your entity looks and moves, check out the entity modeling and animation tutorial.

> [!div class="nextstepaction"]  
> [Entity Modeling and Animation](EntityModelingAndAnimation.md)
