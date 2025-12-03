---
author: mammerla
ms.author: mikeam
title: Custom Biome Tutorial
description: "A step-by-step tutorial for creating custom biomes in Minecraft: Bedrock Edition, covering both behavior pack and resource pack components."
ms.service: minecraft-bedrock-edition
ms.date: 12/01/2025
---

# Custom Biome Tutorial

This tutorial walks you through creating a custom biome from scratch—including surface generation, features, mobs, fog, and ambient effects. By the end, you'll have a unique "Crystal Caverns" biome that generates in your world.

## In This Tutorial

You will learn:

> [!div class="checklist"]
>
> - How to structure biome definition files
> - Configuring surface materials and terrain
> - Adding custom features like ores and vegetation
> - Setting up biome-specific mob spawning
> - Creating atmosphere with fog and particles
> - Registering and testing your biome

## Prerequisites

Before starting, you should:

- Have completed the [Biome Overview](BiomeOverview.md)
- Understand behavior pack and resource pack structure
- Have a development environment set up for testing

> [!TIP]
> A completed version of this tutorial is available in the [Crystal Caverns Biome sample](https://github.com/microsoft/minecraft-samples/tree/main/crystal_caverns_biome) on GitHub.

## Understanding Biome Pack Structure

Custom biomes require content in **both** a behavior pack and a resource pack:

### Behavior Pack (Server-Side)

The behavior pack contains the **functional** biome definition—everything that affects world generation and gameplay:

| Content | Purpose |
|---------|---------|
| **Biome definition** | Core biome properties (climate, surface, terrain shape) |
| **Features** | Structures and decorations that generate (ores, plants, crystals) |
| **Feature rules** | Where and how often features appear |
| **Spawn rules** | Which mobs spawn and under what conditions |

### Resource Pack (Client-Side)

The resource pack contains **visual and audio** elements:

| Content | Purpose |
|---------|---------|
| **Fog settings** | Atmosphere, visibility, and volumetric effects |
| **Client biome** | Water color, ambient sounds, music |
| **Particles** | Custom particle effects (if any) |

> [!NOTE]
> The biome *identifier* must match between your behavior pack biome definition and any resource pack client biome files. Minecraft uses this identifier to link the server-side gameplay with client-side visuals.

## Project Setup

Create the following folder structure:

```
crystal_caverns_pack/
├── behavior_pack/
│   ├── manifest.json
│   ├── pack_icon.png
│   ├── biomes/
│   │   └── crystal_caverns.json
│   ├── features/
│   │   ├── crystal_cluster.json
│   │   └── glowing_mushroom.json
│   ├── feature_rules/
│   │   ├── crystal_cluster_rule.json
│   │   └── glowing_mushroom_rule.json
│   └── spawn_rules/
│       └── crystal_golem.json
└── resource_pack/
    ├── manifest.json
    ├── pack_icon.png
    ├── biomes_client/
    │   └── crystal_caverns.biome_client.json
    └── fogs/
        └── crystal_caverns_fog.json
```

## Step 1: Create the Biome Definition

The biome definition is the core file that defines your biome's properties.

Create `behavior_pack/biomes/crystal_caverns.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:biome": {
    "description": {
      "identifier": "custom:crystal_caverns"
    },
    "components": {
      "minecraft:climate": {
        "temperature": 0.5,
        "downfall": 0.0,
        "snow_accumulation": [0.0, 0.0],
        "ash": 0.0,
        "red_spores": 0.0,
        "white_ash": 0.0
      },
      "minecraft:overworld_height": {
        "noise_type": "lowlands"
      },
      "minecraft:surface_parameters": {
        "sea_floor_depth": 7,
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:stone",
        "mid_material": "minecraft:stone",
        "top_material": "minecraft:stone",
        "sea_material": "minecraft:water"
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "custom:crystal_caverns",
        "generate_for_climates": [
          ["cold", 1],
          ["medium", 1]
        ]
      },
      "minecraft:tags": {
        "tags": [
          "overworld",
          "custom",
          "crystal_caverns",
          "no_legacy_worldgen"
        ]
      }
    }
  }
}
```

### Understanding the Components

| Component | Purpose |
|-----------|---------|
| `minecraft:climate` | Temperature and precipitation settings |
| `minecraft:overworld_height` | Terrain generation shape |
| `minecraft:surface_parameters` | What blocks make up the surface |
| `minecraft:overworld_generation_rules` | How/where the biome generates |
| `minecraft:tags` | Tags for filtering and identification |

## Step 2: Customize the Surface

Let's make the surface more interesting with custom materials.

Update the `surface_parameters`:

```json
"minecraft:surface_parameters": {
  "sea_floor_depth": 7,
  "sea_floor_material": "minecraft:gravel",
  "foundation_material": "minecraft:deepslate",
  "mid_material": "minecraft:stone",
  "top_material": "minecraft:calcite",
  "sea_material": "minecraft:water"
}
```

For more complex surfaces, you can use surface rules (advanced):

```json
"minecraft:surface_parameters": {
  "sea_floor_depth": 7,
  "sea_floor_material": "minecraft:gravel",
  "foundation_material": "minecraft:deepslate",
  "mid_material": "minecraft:stone",
  "top_material": "minecraft:calcite",
  "sea_material": "minecraft:water"
}
```

## Step 3: Add Custom Features

Features are structures and decorations that spawn in your biome.

### Crystal Cluster Feature

Create `behavior_pack/features/crystal_cluster.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:ore_feature": {
    "description": {
      "identifier": "custom:crystal_cluster"
    },
    "count": 8,
    "replace_rules": [
      {
        "places_block": "minecraft:amethyst_block",
        "may_replace": ["minecraft:stone", "minecraft:deepslate", "minecraft:calcite"]
      }
    ]
  }
}
```

### Glowing Mushroom Feature

Create `behavior_pack/features/glowing_mushroom.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:scatter_feature": {
    "description": {
      "identifier": "custom:glowing_mushroom"
    },
    "iterations": 5,
    "scatter_chance": 25,
    "x": {
      "distribution": "uniform",
      "extent": [0, 15]
    },
    "z": {
      "distribution": "uniform",
      "extent": [0, 15]
    },
    "y": "query.heightmap(variable.worldx, variable.worldz)",
    "places_feature": "custom:single_glowing_mushroom"
  }
}
```

Create the single mushroom feature `behavior_pack/features/single_glowing_mushroom.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:single_block_feature": {
    "description": {
      "identifier": "custom:single_glowing_mushroom"
    },
    "places_block": "minecraft:brown_mushroom",
    "enforce_survivability_rules": true,
    "enforce_placement_rules": true,
    "may_replace": ["minecraft:air"]
  }
}
```

## Step 4: Create Feature Rules

Feature rules determine where and when features generate.

### Crystal Cluster Rule

Create `behavior_pack/feature_rules/crystal_cluster_rule.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "custom:crystal_cluster_rule",
      "places_feature": "custom:crystal_cluster"
    },
    "conditions": {
      "placement_pass": "underground_pass",
      "minecraft:biome_filter": {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "crystal_caverns"
      }
    },
    "distribution": {
      "iterations": 10,
      "x": {
        "distribution": "uniform",
        "extent": [0, 15]
      },
      "y": {
        "distribution": "uniform",
        "extent": [0, 60]
      },
      "z": {
        "distribution": "uniform",
        "extent": [0, 15]
      }
    }
  }
}
```

### Glowing Mushroom Rule

Create `behavior_pack/feature_rules/glowing_mushroom_rule.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "custom:glowing_mushroom_rule",
      "places_feature": "custom:glowing_mushroom"
    },
    "conditions": {
      "placement_pass": "surface_pass",
      "minecraft:biome_filter": {
        "test": "has_biome_tag",
        "operator": "==",
        "value": "crystal_caverns"
      }
    },
    "distribution": {
      "iterations": 3,
      "x": {
        "distribution": "uniform",
        "extent": [0, 15]
      },
      "y": "query.heightmap(variable.worldx, variable.worldz)",
      "z": {
        "distribution": "uniform",
        "extent": [0, 15]
      }
    }
  }
}
```

## Step 5: Set Up Biome-Specific Spawning

Create custom spawn rules for entities that only appear in your biome.

### Crystal Golem Spawn Rule

First, you'll need a custom entity (or use a vanilla one). Here's a spawn rule for a hypothetical crystal golem:

Create `behavior_pack/spawn_rules/crystal_golem.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "custom:crystal_golem",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:spawns_on_block_filter": {
          "blocks": ["minecraft:calcite", "minecraft:stone"]
        },
        "minecraft:brightness_filter": {
          "min": 0,
          "max": 7,
          "adjust_for_weather": false
        },
        "minecraft:difficulty_filter": {
          "min": "normal",
          "max": "hard"
        },
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "crystal_caverns"
        },
        "minecraft:weight": {
          "default": 50
        },
        "minecraft:herd": {
          "min_size": 1,
          "max_size": 2
        },
        "minecraft:density_limit": {
          "surface": 3
        }
      }
    ]
  }
}
```

### Modify Vanilla Mob Spawning

You can also adjust vanilla mob spawning by overriding their spawn rules. For example, to make bats more common in your biome, override the bat spawn rule.

## Step 6: Create Biome Fog

Fog gives your biome a unique atmosphere. This is a **resource pack** component that controls the visual atmosphere.

Create `resource_pack/fogs/crystal_caverns_fog.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:fog_settings": {
    "description": {
      "identifier": "custom:crystal_caverns_fog"
    },
    "distance": {
      "air": {
        "fog_start": 0.2,
        "fog_end": 1.0,
        "fog_color": "#3a1f5c",
        "render_distance_type": "render"
      },
      "water": {
        "fog_start": 0.0,
        "fog_end": 0.5,
        "fog_color": "#4a2882",
        "render_distance_type": "render"
      }
    },
    "volumetric": {
      "density": {
        "water": {
          "max_density": 0.8,
          "max_density_height": 0,
          "zero_density_height": 64
        },
        "air": {
          "max_density": 0.15,
          "max_density_height": 32,
          "zero_density_height": 70
        }
      },
      "media_coefficients": {
        "water": {
          "scattering": [0.02, 0.02, 0.08],
          "absorption": [0.35, 0.35, 0.35]
        },
        "air": {
          "scattering": [0.05, 0.02, 0.08],
          "absorption": [0.0, 0.0, 0.0]
        }
      }
    }
  }
}
```

### Link Fog to Biome

Update your biome definition to reference the fog:

```json
{
  "format_version": "1.21.40",
  "minecraft:biome": {
    "description": {
      "identifier": "custom:crystal_caverns"
    },
    "components": {
      "minecraft:climate": {
        "temperature": 0.5,
        "downfall": 0.0,
        "snow_accumulation": [0.0, 0.0],
        "ash": 0.0,
        "red_spores": 0.0,
        "white_ash": 0.0
      },
      "minecraft:overworld_height": {
        "noise_type": "lowlands"
      },
      "minecraft:surface_parameters": {
        "sea_floor_depth": 7,
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:deepslate",
        "mid_material": "minecraft:stone",
        "top_material": "minecraft:calcite",
        "sea_material": "minecraft:water"
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "custom:crystal_caverns",
        "generate_for_climates": [
          ["cold", 1],
          ["medium", 1]
        ]
      },
      "minecraft:fog_appearance": {
        "fog_identifier": "custom:crystal_caverns_fog"
      },
      "minecraft:tags": {
        "tags": [
          "overworld",
          "custom",
          "crystal_caverns",
          "no_legacy_worldgen"
        ]
      }
    }
  }
}
```

## Step 7: Add Client-Side Effects (Resource Pack)

For additional visual effects, create a client biome definition in your **resource pack**. This file controls water appearance, ambient sounds, and music.

Create `resource_pack/biomes_client/crystal_caverns.biome_client.json`:

```json
{
  "format_version": "1.21.40",
  "minecraft:client_biome": {
    "description": {
      "identifier": "custom:crystal_caverns"
    },
    "components": {
      "minecraft:water_appearance": {
        "surface_color": "#4a2882",
        "surface_transparency": 0.8
      },
      "minecraft:ambient_sounds": {
        "ambient_loop": "ambient.cave"
      },
      "minecraft:music": {
        "volume": 0.5,
        "music": "music.game.creative"
      }
    }
  }
}
```

## Step 8: Create the Manifest Files

### Behavior Pack Manifest

Create `behavior_pack/manifest.json`:

```json
{
  "format_version": 2,
  "header": {
    "name": "Crystal Caverns Biome",
    "description": "Adds the Crystal Caverns biome to your world",
    "uuid": "YOUR-UUID-HERE-1234-abcd-1234567890ab",
    "version": [1, 0, 0],
    "min_engine_version": [1, 21, 40]
  },
  "modules": [
    {
      "type": "data",
      "uuid": "YOUR-UUID-HERE-5678-efgh-1234567890ab",
      "version": [1, 0, 0]
    }
  ],
  "dependencies": [
    {
      "uuid": "YOUR-RP-UUID-HERE-ijkl-1234567890ab",
      "version": [1, 0, 0]
    }
  ]
}
```

### Resource Pack Manifest

Create `resource_pack/manifest.json`:

```json
{
  "format_version": 2,
  "header": {
    "name": "Crystal Caverns Resources",
    "description": "Resources for the Crystal Caverns biome",
    "uuid": "YOUR-RP-UUID-HERE-ijkl-1234567890ab",
    "version": [1, 0, 0],
    "min_engine_version": [1, 21, 40]
  },
  "modules": [
    {
      "type": "resources",
      "uuid": "YOUR-UUID-HERE-mnop-1234567890ab",
      "version": [1, 0, 0]
    }
  ]
}
```

> [!IMPORTANT]
> Generate unique UUIDs for each pack. You can use online UUID generators or your IDE.

## Step 9: Test Your Biome

### Enable the Packs

1. Place both packs in your development folders
2. Create a new world
3. Enable both the behavior pack and resource pack
4. Enable **Experiments** > **Custom Biomes** if required

### Find Your Biome

Use the locate command:

```
/locate biome custom:crystal_caverns
```

Or use spectator mode to fly around and find it:

```
/gamemode spectator
```

### Verify Features

Check that your biome has:
- ✅ Correct surface blocks (calcite on top)
- ✅ Crystal clusters underground
- ✅ Proper fog coloring
- ✅ Custom mob spawning (if entity exists)

## Common Customizations

### Adjusting Biome Rarity

Change the weight in `generate_for_climates`:

```json
"minecraft:overworld_generation_rules": {
  "generate_for_climates": [
    ["cold", 5],
    ["medium", 3]
  ]
}
```

Higher numbers = more common.

### Changing Terrain Shape

Use different `noise_type` values:

| Noise Type | Result |
|------------|--------|
| `default` | Standard varied terrain |
| `lowlands` | Flat, low terrain |
| `highlands` | Tall, hilly terrain |
| `mountains` | Extreme height variation |
| `river` | River-like channels |

### Adding Weather Effects

Update the climate component:

```json
"minecraft:climate": {
  "temperature": 0.2,
  "downfall": 0.8,
  "snow_accumulation": [0.5, 1.0],
  "ash": 0.0,
  "red_spores": 0.0,
  "white_ash": 0.0
}
```

- Low temperature + high downfall = snow
- High temperature + high downfall = rain
- `ash`, `red_spores`, `white_ash` for Nether-style particles

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Biome doesn't generate | Missing experimental toggle | Enable Custom Biomes experiment |
| Biome doesn't generate | Invalid climate settings | Check generate_for_climates values |
| Wrong surface blocks | Incorrect surface_parameters | Verify block identifiers |
| Features not appearing | Feature rule not linked | Check biome_filter tag matches |
| Fog not showing | Fog identifier mismatch | Verify fog_identifier matches fog file |
| Pack not loading | Invalid JSON | Validate JSON syntax |
| Pack not loading | UUID issues | Ensure unique UUIDs and correct dependencies |

## Complete File Summary

Here's the complete biome file with all components:

```json
{
  "format_version": "1.21.40",
  "minecraft:biome": {
    "description": {
      "identifier": "custom:crystal_caverns"
    },
    "components": {
      "minecraft:climate": {
        "temperature": 0.5,
        "downfall": 0.0,
        "snow_accumulation": [0.0, 0.0],
        "ash": 0.0,
        "red_spores": 0.0,
        "white_ash": 0.0
      },
      "minecraft:overworld_height": {
        "noise_type": "lowlands"
      },
      "minecraft:surface_parameters": {
        "sea_floor_depth": 7,
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:deepslate",
        "mid_material": "minecraft:stone",
        "top_material": "minecraft:calcite",
        "sea_material": "minecraft:water"
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "custom:crystal_caverns",
        "generate_for_climates": [
          ["cold", 1],
          ["medium", 1]
        ]
      },
      "minecraft:fog_appearance": {
        "fog_identifier": "custom:crystal_caverns_fog"
      },
      "minecraft:tags": {
        "tags": [
          "overworld",
          "custom",
          "crystal_caverns",
          "no_legacy_worldgen"
        ]
      }
    }
  }
}
```

## Next Steps

Now that you've created a custom biome, try:

> [!div class="nextstepaction"]
> [Adding Custom Features](../FeaturesTutorial_1.md)

> [!div class="nextstepaction"]
> [Creating Custom Entities](../IntroductionToAddEntity.md)

> [!div class="nextstepaction"]
> [Partial Biome Replacements](CustomPartialBiomeReplacement.md)

## See Also

- [Biome Overview](BiomeOverview.md)
- [Feature Reference](../../Reference/Content/FeaturesReference/Examples/FeaturesIntroduction.md)
- [Fog Reference](../FogInResourcePacks.md)
- [Client Biomes Overview](../../Reference/Content/ClientBiomesReference/Examples/ClientBiomesOverview.md)
