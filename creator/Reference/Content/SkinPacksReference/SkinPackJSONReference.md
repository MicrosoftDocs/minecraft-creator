---
author: mammerla
ms.author: mikeam
title: Skin Pack JSON Formatting and Localization Reference
description: "A comprehensive reference for skin pack JSON formatting, localization keys, and serialization keys"
ms.service: minecraft-bedrock-edition
---

# Skin Pack JSON Formatting and Localization Reference

This article provides comprehensive reference information for skin pack JSON formatting, including detailed documentation of the `skins.json` file structure, localization key naming conventions, and serialization keys used in Minecraft: Bedrock Edition skin packs.

In this article, you will learn:

> [!div class="checklist"]
>
> - The complete structure and properties of the `skins.json` file
> - How localization keys work in skin packs and their naming conventions
> - How serialization keys work and connect different JSON files
> - Common issues and troubleshooting tips

## skins.json File Structure

The `skins.json` file is the core metadata file that defines all skins within a skin pack. It uses a specific JSON schema to describe the pack and individual skins.

### Root Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `serialize_name` | String | Yes | The unique identifier used for serialization and as the base for localization keys |
| `localization_name` | String | Yes | The localization key identifier that maps to the skin pack's display name |
| `skins` | Array | Yes | An array of skin objects defining individual skins in the pack |

### Complete skins.json Schema

```json
{
  "serialize_name": "string",
  "localization_name": "string", 
  "skins": [
    {
      "localization_name": "string",
      "geometry": "string",
      "texture": "string",
      "type": "string"
    }
  ]
}
```

## Skin Object Properties

Each skin object in the `skins` array contains the following properties:

### Required Properties

| Property | Type | Description | Valid Values |
|----------|------|-------------|--------------|
| `localization_name` | String | The localization key for this individual skin's display name | Any valid string identifier |
| `geometry` | String | The player model geometry this skin applies to | `geometry.humanoid.custom` (Steve model)<br>`geometry.humanoid.customSlim` (Alex model) |
| `texture` | String | The filename of the PNG texture file | Must match an existing PNG file in the skin pack root |
| `type` | String | The skin accessibility type | `free` or `paid` |

### Detailed Property Descriptions

#### `localization_name`
- **Purpose**: Creates a unique identifier for the skin's display name
- **Format**: Should be a descriptive identifier using alphanumeric characters and underscores
- **Example**: `"CowboySkin"`, `"knight_armor"`, `"casual_outfit"`
- **Note**: This value is used to construct the localization key in the format `skin.{pack_localization_name}.{skin_localization_name}`

#### `geometry`
- **Purpose**: Specifies which player model the skin is designed for
- **Valid Values**:
  - `geometry.humanoid.custom` - Standard Steve model (4px arm width)
  - `geometry.humanoid.customSlim` - Alex model (3px arm width)
- **Important**: The texture must match the geometry type for proper rendering

#### `texture`
- **Purpose**: References the PNG texture file for the skin
- **Requirements**: 
  - Must exist in the skin pack root directory
  - Recommended size: 64x64 pixels (standard) or 64x32 pixels (legacy)
  - Must match the geometry type (Steve vs Alex model)

#### `type`
- **Purpose**: Defines the accessibility of the skin
- **Valid Values**:
  - `free` - Skin is available to all players
  - `paid` - Skin requires purchase (for marketplace content)

## Localization Key System

Skin packs use a hierarchical localization key system to provide multi-language support and organize display names.

### Key Naming Convention

The localization system uses the following pattern:

```
skinpack.{serialize_name} = Skin Pack Display Name
skin.{serialize_name}.{skin_localization_name} = Individual Skin Display Name
```

### Components Breakdown

1. **Pack Name Key**: `skinpack.{serialize_name}`
   - Uses the root `serialize_name` from `skins.json`
   - Defines the skin pack's display name
   - Example: `skinpack.AdventurePack=Adventure Skin Pack`

2. **Individual Skin Keys**: `skin.{serialize_name}.{skin_localization_name}`
   - Combines the pack's `serialize_name` with each skin's `localization_name`
   - Defines each skin's display name
   - Example: `skin.AdventurePack.Knight=Knight Armor`

### Localization File Structure

#### en_US.lang File Example

```lang
skinpack.AdventurePack=Adventure Skin Pack
skinpack.AdventurePack.by=Adventure Studios
skin.AdventurePack.Knight=Knight Armor
skin.AdventurePack.Wizard=Wizard Robes
skin.AdventurePack.Archer=Archer Outfit
skin.AdventurePack.Rogue=Rogue Gear
skin.AdventurePack.Paladin=Paladin Armor
```

#### Pack Attribution

The localization system also supports pack attribution using the pattern:

```
skinpack.{serialize_name}.by=Creator Name
```

## Serialization Keys

Serialization keys are crucial for connecting the various JSON files in a skin pack and ensuring proper data flow between them.

The `serialize_name` property in `skins.json` serves as the unique identifier for the entire skin pack
- **Usage**: Referenced in localization files, manifest files, and internal game systems
- **Format**: Should be a unique, descriptive string using alphanumeric characters and underscores
- **Example**: `"MedievalPack"`, `"modern_clothing"`, `"fantasy_skins"`

## Complete Example

Here's a complete example showing how all components work together:

### skins.json
```json
{
  "serialize_name": "FantasyAdventure",
  "localization_name": "FantasyAdventure",
  "skins": [
    {
      "localization_name": "MageRobe",
      "geometry": "geometry.humanoid.customSlim",
      "texture": "mage_robe.png",
      "type": "free"
    },
    {
      "localization_name": "WarriorArmor",
      "geometry": "geometry.humanoid.custom",
      "texture": "warrior_armor.png",
      "type": "free"
    }
  ]
}
```

### texts/en_US.lang
```lang
skinpack.FantasyAdventure=Fantasy Adventure Pack
skinpack.FantasyAdventure.by=Epic Creators
skin.FantasyAdventure.MageRobe=Mystical Mage Robes
skin.FantasyAdventure.WarriorArmor=Legendary Warrior Armor
```

### manifest.json
```json
{
  "format_version": 2,
  "header": {
    "name": "Fantasy Adventure Pack",
    "description": "A collection of fantasy-themed skins for your adventures",
    "uuid": "12345678-1234-1234-1234-123456789abc",
    "version": [1, 0, 0]
  },
  "modules": [
    {
      "type": "skin_pack",
      "uuid": "87654321-4321-4321-4321-cba987654321",
      "version": [1, 0, 0]
    }
  ]
}
```

## Common Issues and Troubleshooting

### JSON Syntax Errors

**Problem**: Skin pack fails to load or import
**Common Causes**:
- Missing commas between array elements
- Incorrect quotation marks around property names
- Trailing commas in JSON objects

**Solution**: Validate JSON syntax using online validators or extensions in tools like Visual Studio Code

### Localization Key Mismatches

**Problem**: Skin names appear as localization keys instead of display names
**Common Causes**:
- Mismatched `serialize_name` between `skins.json` and `en_US.lang`
- Incorrect `localization_name` in individual skin objects
- Missing entries in the `.lang` file

**Solution**: Verify all localization keys match exactly between files

### Texture Loading Issues

**Problem**: Skins appear with default textures or fail to load

**Common Causes**:
- Incorrect filename in `texture` property
- Missing PNG files in the pack
- Mismatched geometry and texture types

**Solution**: Ensure all texture files exist and match the specified filenames

### Geometry Compatibility

**Problem**: Skins appear distorted or incorrectly rendered

**Common Causes**:
- Using Alex textures with Steve geometry or vice versa

**Solution**: Verify geometry types match the intended player model

## Related Documentation

- [Introduction to Skin Packs](../../../Documents/SkinPack.md) - Basic tutorial for creating skin packs
- [Packaging a Skin Pack](../../../Documents/PackagingASkinPack.md) - Guide for packaging and distributing skin packs
- [Pack Manifest JSON Reference](../AddonsReference//PackManifest.md) - Complete manifest.json reference
- [Preparing Raw Text for Localization](../../../Documents/PreparingRawTextForLocalization.md) - Localization best practices
