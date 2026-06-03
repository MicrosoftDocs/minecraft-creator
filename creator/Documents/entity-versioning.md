---
author: chipotle
ms.author: mikeam
title: Entity Versioning and Upgrading
description: "A look at how entities are versioned, how it differs from other version numbers in Bedrock Edition, and how to easily apply upgrades to custom entities."
ms.service: minecraft-bedrock-edition
ms.date: 04/16/2026
---

# Entity Versioning and Upgrading

Minecraft: Bedrock Edition uses a lot of version numbers internally, including the game version number, format versions for different JSON files, and what we'll be looking at in this article, entity versions. We'll go over:

- What entity versioning is and how it differs from format version and game version.
- How to define upgrade handlers that migrate existing entities saved in a player's world.
- How entity version upgrades are executed at runtime.
- How to use entity versioning in your own custom entities.

> [!IMPORTANT]
>
> Entity versioning requires enabling the **Upcoming Creator Features** experiment toggle and a `format_version` of `1.26.20` or higher.

## Prerequisites

You should go over the following before starting this tutorial:

- [Entity Behavior Introduction](./EntityBehaviorIntroduction.md)
- [Entity Components Guide](./EntityComponentsGuide.md)
- [Entity Events](./EntityEvents.md)

## Overview

When you change an entity's behavior definition, many of those changes get automatically applied to both new and existing entities&mdash;adding new base components, changing the contents of component groups, or restructuring behavior. However, some changes&mdash;adding or removing component groups, for example&mdash;will only be applied to newly spawned entities. Entities that already exist in-world are saved with their old state, and won't reflect new definitions unless you write code to explicitly handle the change.

**Entity versioning** solves this problem. It lets you define numbered upgrade steps in your entity definition, so that when an existing entity is loaded from a saved world, the game automatically runs only the upgrades that haven't been applied, bringing the entity up to date.

## Terminology: entity version vs. format version

An entity's JSON definition file has both a format version and an entity version. While this might be confusing at first, they're two different concepts with different purposes.

The `format_version` at the top of an entity JSON file selects the **schema** that the game uses to parse that document: which fields are valid, how they're interpreted, and what defaults are applied. 
Files written against an older `format_version` will continue to work, so you can update at your own pace. The `format_version` has no effect on individual entity instances saved in the world; it only affects how the definition file itself is read.

The `entity_version` property, on the other hand, is an integer version number matched with a set of upgrade steps for each new version of the entity version that you, the creator, define and control. It's unique to a specific entity type&mdash;all pigs share one entity version, all creepers share another&mdash;and is completely independent of the file's `format_version` or the game version. The version numbering is meaningful only within that entity type's definition.

| Concept | Scope | Purpose |
|---|---|---|
| `format_version` | The JSON document | Controls which schema the engine uses to parse the file |
| Game version | The entire game | Determines engine-level features and data formats |
| `entity_version` | A single entity type | Tracks which upgrade steps have been applied to a specific entity instance saved in the world |

An entity version is a simple integer counter. It starts at `0`, the default for entities that don't use this feature, and increments by `1` for each upgrade step you add.

## The old approach: properties and environment sensors

Before entity versioning, the standard way to migrate existing entities was to use a combination of `properties`, `minecraft:environment_sensor`, and `events`. For example, the `minecraft:zombie_horse` needed to apply component changes introduced in version 1.21.130. The definition used:

1. A boolean property `minecraft:was_upgraded_to_1_21_130`, defaulting to `false`.
2. A `minecraft:environment_sensor` trigger that fires when the property isn't `true`.
3. An event that applies the necessary component group changes and sets the property to `true`.

```json
{
  "format_version": "1.26.0",
  "minecraft:entity": {
    "description": {
      "identifier": "minecraft:zombie_horse",
      "properties": {
        "minecraft:was_upgraded_to_1_21_130": {
          "client_sync": false,
          "default": false,
          "type": "bool"
        }
      }
    },
    "components": {
      "minecraft:environment_sensor": {
        "triggers": [
          {
            "event": "minecraft:upgrade_to_1_21_130",
            "filters": {
              "domain": "minecraft:was_upgraded_to_1_21_130",
              "operator": "!=",
              "test": "bool_property"
            }
          }
        ]
      }
    },
    "events": {
      "minecraft:upgrade_to_1_21_130": {
        "sequence": [
          {
            "filters": {
              "all_of": [
                {
                  "test": "has_component",
                  "operator": "!=",
                  "value": "minecraft:rideable"
                },
                {
                  "test": "is_baby",
                  "value": false
                }
              ]
            },
            "add": {
              "component_groups": ["minecraft:horse_tamed"]
            }
          },
          {
            "filters": {
              "all_of": [
                {
                  "test": "has_component",
                  "operator": "!=",
                  "value": "minecraft:leashable"
                }
              ]
            },
            "add": {
              "component_groups": ["minecraft:horse_can_be_leashed"]
            }
          },
          {
            "set_property": {
              "minecraft:was_upgraded_to_1_21_130": true
            }
          }
        ]
      }
    }
  }
}
```

While this approach works, it has several drawbacks:

- **The environment sensor runs every tick.** Even after the upgrade has been applied, the sensor is still evaluated until a component group swap removes it.
- **The environment sensor must account for other setups.** If other component groups need to use an environment sensor, every sensor needs to account for the upgrade logic as well as their own work.
- **It uses a persistent property.** The boolean property remains on the entity forever, consuming storage space and adding clutter to the definition.
- **Upgrade logic is mixed in with events.** The upgrade logic lives in the `events` section alongside gameplay events, making it harder to tell at a glance what is upgrade logic and what is runtime behavior.
- **Multiple upgrades are hard to chain.** Adding a second upgrade requires another property, another sensor trigger, and careful ordering to make sure they run in the right sequence.

## The new approach: entity versioning

With entity versioning, you define upgrade steps directly in the entity's `description` block and place the upgrade handlers in a dedicated `upgrades` section. The game tracks which version each entity instance is on and only runs the upgrades it needs.

Here is how the same zombie horse upgrade would look using entity versioning:

```json
{
  "format_version": "1.26.20",
  "minecraft:entity": {
    "description": {
      "identifier": "minecraft:zombie_horse",
      "entity_version": {
        "upgrades": [
          {
            "upgrade_to": 1,
            "name": "minecraft:upgrade_to_1_21_130"
          }
        ]
      }
    },
    "components": {
    },
    "upgrades": {
      "minecraft:upgrade_to_1_21_130": {
        "sequence": [
          {
            "filters": {
              "all_of": [
                {
                  "test": "has_component",
                  "operator": "!=",
                  "value": "minecraft:rideable"
                },
                {
                  "test": "is_baby",
                  "value": false
                }
              ]
            },
            "add": {
              "component_groups": ["minecraft:horse_tamed"]
            }
          },
          {
            "filters": {
              "all_of": [
                {
                  "test": "has_component",
                  "operator": "!=",
                  "value": "minecraft:leashable"
                }
              ]
            },
            "add": {
              "component_groups": ["minecraft:horse_can_be_leashed"]
            }
          }
        ]
      }
    }
  }
}
```

- **No `was_upgraded_to` property needed.** The version is tracked automatically by the engine.
- **No environment sensor.** There is no per-tick polling. Upgrades run once, at load time, and only if the entity's saved version is behind.
- **Separate `upgrades` section.** Upgrade handlers live in their own top-level section, distinct from `events`, so the intent is clear.
- **No `set_property` step.** The engine automatically advances the entity's entity version after running all applicable upgrade handlers.

## JSON format reference

### `entity_version` (description field)

The `entity_version` field goes inside the entity's `description` block. It contains an `upgrades` array that maps version numbers to upgrade handler names.

```json
"description": {
  "identifier": "my_pack:my_entity",
  "entity_version": {
    "upgrades": [
      { "upgrade_to": 1, "name": "my_pack:upgrade_v1" },
      { "upgrade_to": 2, "name": "my_pack:upgrade_v2" },
      { "upgrade_to": 3, "name": "my_pack:upgrade_v3" }
    ]
  }
}
```

| Field | Type | Description |
|---|---|---|
| `upgrade_to` | Integer | The version number this upgrade brings the entity to. Must start at `1` and be contiguous. |
| `name` | String | The name of the upgrade handler defined in the `upgrades` section. Must not be empty. |

- Versions must start at `1`. Version `0` is reserved for versionless entities.
- Versions must be contiguous: `1`, `2`, `3` is valid, but `1`, `3` is not.
- Duplicate version numbers aren't allowed.
- Each `name` must reference a handler defined in the `upgrades` section.

### `upgrades` (top-level section)

The `upgrades` section sits at the same level as `components`, `component_groups`, and `events` in the entity definition. Each upgrade handler currently shares the same JSON syntax and capabilities as events (modifying component groups, triggering other upgrade handlers, etc.), but upgrade handlers and events are **distinct concepts** and cannot interact with each other. An upgrade handler cannot trigger an event, and an event cannot trigger an upgrade handler.

```json
"upgrades": {
  "my_pack:upgrade_v1": {
    "add": {
      "component_groups": ["my_pack:new_behavior"]
    }
  },
  "my_pack:upgrade_v2": {
    "sequence": [
      {
        "filters": {
          "test": "has_component",
          "operator": "!=",
          "value": "minecraft:is_tamed"
        },
        "add": {
          "component_groups": ["my_pack:tamed_defaults"]
        }
      }
    ]
  }
}
```

## Scripting API behavior

Entity version upgrade handlers are **not** accessible through the Script API.

[`Entity.triggerEvent()`](../ScriptAPI/minecraft/server/Entity.md#triggerevent) only operates on entries in the `events` section. Calling it with an upgrade handler name will have no effect.

Entity version upgrades are also **not** dispatched through the [`dataDrivenEntityTrigger`](../ScriptAPI/minecraft/server/DataDrivenEntityTriggerAfterEvent.md) after-event signal on [`WorldAfterEvents`](../ScriptAPI/minecraft/server/WorldAfterEvents.md). Scripts won't receive notifications when an upgrade handler runs.

## How it works at runtime

When an entity is created or loaded, the following happens:

- **New entity spawned:** The entity's entity version is set to the latest version (the number of entries in the `upgrades` array), and no upgrade handlers are run.
- **Entity loaded from save:** The engine reads the entity's saved entity version from the world data. If the saved entity version is less than the current definition's entity version, upgrade handlers are executed sequentially, starting from the handler after the saved version up to the latest. The entity version is then set to the latest.
- **Entity loaded at current entity version:** No upgrade handlers run.
- **Entity loaded with an entity version higher than the current definition:** The entity version is lowered to the current latest. No upgrade handlers run. This handles the case where an entity definition is rolled back.

### Example: adding a second upgrade

Suppose you shipped your entity at version `1`, and now need to make another change. Simply add a new upgrade step:

```json
"entity_version": {
  "upgrades": [
    { "upgrade_to": 1, "name": "my_pack:upgrade_v1" },
    { "upgrade_to": 2, "name": "my_pack:upgrade_v2" }
  ]
}
```

- An entity saved at version `0` (the original unversioned entity, with no upgrades applied) will run both `my_pack:upgrade_v1` and `my_pack:upgrade_v2`.
- An entity saved at version `1` will run only `my_pack:upgrade_v2`.
- An entity saved at version `2` will run nothing.

> [!WARNING]
>
> Never remove an upgrade handler after you've released it to players! Existing entities in player worlds may be saved at an earlier entity version, and depend on running through every upgrade handler in sequence to reach the current version. Removing a handler breaks that chain and can leave entities in an inconsistent state. If an upgrade handler is no longer needed, leave it in place as a no-op (an empty object, `{}`) rather than deleting it.
