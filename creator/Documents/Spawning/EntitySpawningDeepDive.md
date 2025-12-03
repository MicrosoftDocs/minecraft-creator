---
author: mammerla
ms.author: mikeam
title: Entity Spawning Deep Dive
description: "A comprehensive guide to entity spawn rules, biome filtering, density limits, spawn events, and controlling when and where entities appear in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 12/01/2025
---

# Entity Spawning Deep Dive

Understanding how entities spawn is crucial for creating balanced and immersive add-ons. This guide covers everything from basic spawn rules to advanced techniques for controlling exactly when and where your custom entities appear.

> [!TIP]
> A complete working sample demonstrating spawn rules with different spawn conditions is available in the [Spawn Rules sample](https://github.com/microsoft/minecraft-samples/tree/main/spawn_rules_sample).

## In This Tutorial

You will learn:

> [!div class="checklist"]
>
> - How Minecraft's spawning system works
> - Creating and customizing spawn rules
> - Biome and condition-based spawning
> - Spawn density and population control
> - Spawn events and initialization
> - Troubleshooting spawn issues

## Prerequisites

- Completed basic entity creation tutorials
- Understanding of behavior pack structure
- Familiarity with JSON syntax

## How Entity Spawning Works

### The Spawning Cycle

Minecraft continuously evaluates whether to spawn entities based on several factors:

![Spawn cycle diagram showing the six steps: check spawn conditions, find valid spawn locations, check population caps, evaluate spawn weight, spawn entity, and run spawn event](Media/EntitySpawning/spawn-cycle-diagram.svg)

### Spawn Rule Files

Spawn rules are defined in the behavior pack's `spawn_rules` folder:

```
behavior_pack/
└── spawn_rules/
    ├── custom_entity.json
    ├── night_creature.json
    └── cave_dweller.json
```

## Basic Spawn Rule Structure

### Minimal Spawn Rule

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:forest_critter",
      "population_control": "animal"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:brightness_filter": {
          "min": 7,
          "max": 15,
          "adjust_for_weather": true
        },
        "minecraft:weight": {
          "default": 100
        }
      }
    ]
  }
}
```

### Understanding the Components

| Component | Purpose |
|-----------|---------|
| `identifier` | Must match your entity's identifier |
| `population_control` | Which population cap applies |
| `conditions` | Array of spawn condition sets |

## Population Control

### Population Types

Different population types have different caps:

| Type | Description | Typical Cap |
|------|-------------|-------------|
| `animal` | Passive mobs like pigs, cows | ~10 per player |
| `monster` | Hostile mobs like zombies, skeletons | ~70 in loaded chunks |
| `water_animal` | Fish, dolphins, squid | ~5 per water body |
| `water_ambient` | Small fish, ambient water life | ~20 per water body |
| `ambient` | Bats and similar | ~15 in caves |
| `pillager` | Pillagers and related | Limited by patrols |

### Custom Population Limits

You can use density limits for finer control:

```json
{
  "minecraft:density_limit": {
    "surface": 5,
    "underground": 2
  }
}
```

## Spawn Conditions

### Location Conditions

**Surface Spawning:**
```json
{
  "minecraft:spawns_on_surface": {}
}
```

**Underground Spawning:**
```json
{
  "minecraft:spawns_underground": {}
}
```

**Underwater Spawning:**
```json
{
  "minecraft:spawns_underwater": {}
}
```

**On Block Types:**
```json
{
  "minecraft:spawns_on_block_filter": {
    "blocks": ["minecraft:grass_block", "minecraft:dirt", "custom:fertile_soil"]
  }
}
```

**Prevent On Block Types:**
```json
{
  "minecraft:spawns_on_block_prevented_filter": {
    "blocks": ["minecraft:stone", "minecraft:cobblestone"]
  }
}
```

### Environmental Conditions

**Light Level:**
```json
{
  "minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": true
  }
}
```

**Height Range:**
```json
{
  "minecraft:height_filter": {
    "min": 0,
    "max": 63
  }
}
```

**Difficulty:**
```json
{
  "minecraft:difficulty_filter": {
    "min": "easy",
    "max": "hard"
  }
}
```

**Distance from Player:**
```json
{
  "minecraft:distance_filter": {
    "min": 24,
    "max": 128
  }
}
```

### Biome Filtering

**Spawn in Specific Biomes:**
```json
{
  "minecraft:biome_filter": {
    "test": "has_biome_tag",
    "operator": "==",
    "value": "forest"
  }
}
```

**Multiple Biome Tags (Any):**
```json
{
  "minecraft:biome_filter": {
    "any_of": [
      { "test": "has_biome_tag", "value": "forest" },
      { "test": "has_biome_tag", "value": "taiga" },
      { "test": "has_biome_tag", "value": "jungle" }
    ]
  }
}
```

**Complex Biome Logic:**
```json
{
  "minecraft:biome_filter": {
    "all_of": [
      { "test": "has_biome_tag", "value": "overworld" },
      { "test": "has_biome_tag", "operator": "!=", "value": "ocean" },
      {
        "any_of": [
          { "test": "has_biome_tag", "value": "cold" },
          { "test": "has_biome_tag", "value": "frozen" }
        ]
      }
    ]
  }
}
```

### Common Biome Tags

| Tag | Biomes |
|-----|--------|
| `overworld` | All overworld biomes |
| `nether` | All nether biomes |
| `the_end` | All end biomes |
| `ocean` | Ocean, deep ocean variants |
| `forest` | Forest, birch forest, dark forest |
| `plains` | Plains, sunflower plains |
| `desert` | Desert, desert hills |
| `taiga` | Taiga, snowy taiga |
| `jungle` | Jungle variants |
| `mountain` | Mountain biomes |
| `swamp` | Swamp, mangrove swamp |
| `cold` | Cold-temperature biomes |
| `warm` | Warm-temperature biomes |
| `frozen` | Frozen/snowy biomes |

## Spawn Weights

### Understanding Weight

Weight determines how likely an entity is to spawn relative to others:

```json
{
  "minecraft:weight": {
    "default": 100
  }
}
```

- Higher weight = more common
- Total weights in a biome determine relative spawn rates
- A weight of 100 in a biome with total weight 1000 = 10% chance

### Example Weights (Vanilla Reference)

| Entity | Approximate Weight |
|--------|-------------------|
| Zombie | 100 |
| Skeleton | 80 |
| Creeper | 100 |
| Spider | 100 |
| Enderman | 10 |
| Witch | 5 |
| Pig | 10 |
| Cow | 8 |
| Sheep | 12 |
| Chicken | 10 |

## Time-Based Spawning

### Day/Night Spawning

**Night Only (Hostile Mobs):**
```json
{
  "minecraft:brightness_filter": {
    "min": 0,
    "max": 7,
    "adjust_for_weather": false
  }
}
```

**Day Only (Passive Mobs):**
```json
{
  "minecraft:brightness_filter": {
    "min": 8,
    "max": 15,
    "adjust_for_weather": true
  }
}
```

### Using Spawn Events for Time Checks

In your entity behavior, use spawn events:

```json
{
  "format_version": "1.21.40",
  "minecraft:entity": {
    "description": {
      "identifier": "custom:dawn_creature"
    },
    "component_groups": {
      "despawn_invalid_time": {
        "minecraft:instant_despawn": {}
      }
    },
    "components": {
      "minecraft:type_family": {
        "family": ["monster", "custom"]
      }
    },
    "events": {
      "minecraft:entity_spawned": {
        "filters": {
          "test": "hourly_clock_time",
          "operator": "not_in_range",
          "value": [5000, 7000]
        },
        "add": {
          "component_groups": ["despawn_invalid_time"]
        }
      }
    }
  }
}
```

## Spawn Events

### The entity_spawned Event

Runs when an entity first spawns:

```json
{
  "events": {
    "minecraft:entity_spawned": {
      "sequence": [
        {
          "randomize": [
            { "weight": 70, "add": { "component_groups": ["variant_normal"] } },
            { "weight": 25, "add": { "component_groups": ["variant_rare"] } },
            { "weight": 5, "add": { "component_groups": ["variant_legendary"] } }
          ]
        }
      ]
    }
  }
}
```

### Conditional Spawn Variants

```json
{
  "events": {
    "minecraft:entity_spawned": {
      "sequence": [
        {
          "filters": {
            "test": "has_biome_tag",
            "value": "frozen"
          },
          "add": {
            "component_groups": ["snow_variant"]
          }
        },
        {
          "filters": {
            "test": "has_biome_tag",
            "value": "desert"
          },
          "add": {
            "component_groups": ["desert_variant"]
          }
        },
        {
          "filters": {
            "all_of": [
              { "test": "has_biome_tag", "operator": "!=", "value": "frozen" },
              { "test": "has_biome_tag", "operator": "!=", "value": "desert" }
            ]
          },
          "add": {
            "component_groups": ["normal_variant"]
          }
        }
      ]
    }
  }
}
```

## Herd and Pack Spawning

### Spawn Groups

Make entities spawn in groups:

```json
{
  "minecraft:herd": {
    "min_size": 2,
    "max_size": 5,
    "event": "minecraft:entity_spawned",
    "event_skip_count": 0
  }
}
```

### Leader-Follower Pattern

```json
{
  "conditions": [
    {
      "minecraft:spawns_on_surface": {},
      "minecraft:weight": { "default": 50 },
      "minecraft:herd": {
        "min_size": 3,
        "max_size": 6,
        "event": "custom:spawn_as_follower",
        "event_skip_count": 1
      }
    }
  ]
}
```

Entity events:
```json
{
  "events": {
    "minecraft:entity_spawned": {
      "add": { "component_groups": ["pack_leader"] }
    },
    "custom:spawn_as_follower": {
      "add": { "component_groups": ["pack_follower"] }
    }
  }
}
```

## Spawn Rule Examples

### Example 1: Cave Monster

Only spawns underground in darkness:

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:cave_crawler",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_underground": {},
        "minecraft:brightness_filter": {
          "min": 0,
          "max": 0,
          "adjust_for_weather": false
        },
        "minecraft:height_filter": {
          "min": -64,
          "max": 30
        },
        "minecraft:difficulty_filter": {
          "min": "normal",
          "max": "hard"
        },
        "minecraft:weight": {
          "default": 80
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 2
        },
        "minecraft:density_limit": {
          "underground": 4
        }
      }
    ]
  }
}
```

### Example 2: Rare Biome-Specific Creature

Spawns rarely in specific biomes:

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:mystic_deer",
      "population_control": "animal"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:spawns_on_block_filter": {
          "blocks": ["minecraft:grass_block", "minecraft:podzol"]
        },
        "minecraft:brightness_filter": {
          "min": 9,
          "max": 15,
          "adjust_for_weather": true
        },
        "minecraft:biome_filter": {
          "any_of": [
            { "test": "has_biome_tag", "value": "forest" },
            { "test": "has_biome_tag", "value": "taiga" }
          ]
        },
        "minecraft:weight": {
          "default": 5
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 2
        },
        "minecraft:density_limit": {
          "surface": 2
        }
      }
    ]
  }
}
```

### Example 3: Water Creature

Spawns in ocean biomes underwater:

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:sea_serpent",
      "population_control": "water_animal"
    },
    "conditions": [
      {
        "minecraft:spawns_underwater": {},
        "minecraft:height_filter": {
          "min": 20,
          "max": 62
        },
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "value": "ocean"
        },
        "minecraft:weight": {
          "default": 15
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 3
        },
        "minecraft:density_limit": {
          "surface": 2
        }
      }
    ]
  }
}
```

### Example 4: Nether-Only Spawn

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:lava_strider",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:spawns_on_block_filter": {
          "blocks": ["minecraft:netherrack", "minecraft:basalt"]
        },
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "value": "nether"
        },
        "minecraft:weight": {
          "default": 60
        },
        "minecraft:herd": {
          "min_size": 2,
          "max_size": 4
        }
      }
    ]
  }
}
```

### Example 5: Multi-Condition Spawn

Different conditions for different situations:

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:adaptive_creature",
      "population_control": "animal"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "value": "plains"
        },
        "minecraft:weight": {
          "default": 50
        },
        "minecraft:herd": {
          "min_size": 3,
          "max_size": 5
        }
      },
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "value": "forest"
        },
        "minecraft:weight": {
          "default": 30
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 2
        }
      },
      {
        "minecraft:spawns_underground": {},
        "minecraft:weight": {
          "default": 10
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 1
        }
      }
    ]
  }
}
```

## Script-Controlled Spawning

For complete control, spawn entities via script:

```javascript
import { world, system } from "@minecraft/server";

// Custom spawn system
function spawnCustomEntity(dimension, location, entityType) {
    try {
        const entity = dimension.spawnEntity(entityType, location);
        return entity;
    } catch (error) {
        console.warn(`Failed to spawn ${entityType}: ${error.message}`);
        return null;
    }
}

// Spawn based on custom conditions
function conditionalSpawn(player) {
    const dimension = player.dimension;
    const playerLoc = player.location;
    
    // Find a valid spawn location nearby
    const spawnLoc = findValidSpawnLocation(dimension, playerLoc, 20, 40);
    
    if (spawnLoc) {
        // Check custom conditions
        const block = dimension.getBlock(spawnLoc);
        const blockBelow = dimension.getBlock({
            x: spawnLoc.x,
            y: spawnLoc.y - 1,
            z: spawnLoc.z
        });
        
        if (blockBelow?.typeId === "minecraft:grass_block") {
            spawnCustomEntity(dimension, spawnLoc, "custom:forest_creature");
        }
    }
}

function findValidSpawnLocation(dimension, center, minDist, maxDist) {
    for (let attempt = 0; attempt < 10; attempt++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = minDist + Math.random() * (maxDist - minDist);
        
        const x = Math.floor(center.x + Math.cos(angle) * distance);
        const z = Math.floor(center.z + Math.sin(angle) * distance);
        
        // Find surface
        for (let y = 100; y > 0; y--) {
            const block = dimension.getBlock({ x, y, z });
            const blockAbove = dimension.getBlock({ x, y: y + 1, z });
            
            if (block && !block.isAir && blockAbove?.isAir) {
                return { x: x + 0.5, y: y + 1, z: z + 0.5 };
            }
        }
    }
    return null;
}
```

## Troubleshooting Spawn Issues

### Entity Won't Spawn

| Issue | Check | Solution |
|-------|-------|----------|
| Wrong identifier | spawn_rules identifier vs entity identifier | Must match exactly |
| Population cap | Other entities using the same cap | Reduce other spawns or change cap type |
| Biome filter | Entity spawning in target biome | Verify biome tags |
| Light level | Current light vs filter | Adjust brightness_filter |
| Block filter | Standing block type | Check spawns_on_block_filter |
| Missing spawn rules file | File exists in spawn_rules folder | Create spawn_rules JSON |
| Format version | Using correct format | Use "1.8.0" for spawn rules |

### Entity Spawns Too Often

| Issue | Solution |
|-------|----------|
| Weight too high | Lower weight value |
| No density limit | Add minecraft:density_limit |
| Herd size too large | Reduce max_size in minecraft:herd |
| Multiple condition sets | Reduce conditions or lower weights |

### Entity Spawns in Wrong Places

| Issue | Solution |
|-------|----------|
| Wrong biome | Fix biome_filter |
| Wrong height | Adjust height_filter |
| Wrong surface | Use correct spawns_on_surface/underground/underwater |
| Wrong blocks | Update spawns_on_block_filter |

### Debug Spawning

Use commands to test:

```
# Force spawn to check rules
/summon custom:my_entity ~ ~ ~

# Check current biome
/locate biome <biome_name>

# Clear area for testing
/kill @e[type=custom:my_entity]
```

## Best Practices

1. **Start with low weights** - Increase gradually if entity is too rare
2. **Use density limits** - Prevent overpopulation
3. **Test in target biomes** - Don't just test in creative flat worlds
4. **Consider performance** - Too many spawning entities impacts performance
5. **Use population control wisely** - Match the entity type to appropriate cap
6. **Document your spawn rules** - Note the intended spawn behavior
7. **Test multiplayer** - Spawning behaves differently with multiple players

## Next Steps

> [!div class="nextstepaction"]
> [Entity Behavior Introduction](EntityBehaviorIntroduction.md)

> [!div class="nextstepaction"]
> [Creating Boss Entities](CreatingBossEntities.md)

## See Also

- [Introduction to Add Entity](IntroductionToAddEntity.md)
- [Biome Overview](Biomes/BiomeOverview.md)
- [Spawn Rules Reference](../Reference/Content/EntityReference/Examples/EntitySpawnRules.md)
