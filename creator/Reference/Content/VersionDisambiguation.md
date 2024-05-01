---
author: iconicNurdle
ms.author: mikeam
title: Version Disambiguation
description: An Exploration into Versions
ms.service: minecraft-bedrock-edition
---

# Version Disambiguation

Different add-on pack JSON files have different versions of things. Have you ever wondered about the difference between `format_version` and `version`? What about `min_engine_version` or `base_game_version`? 

Why are there so many and how are they different?

| Term    | Example Value | Description |
|--------------|--------|------------|
| `base_game_version` | "1.20.80" | Essentially, `base_game_version` is used to choose how vanilla elements should behave in a world. The `base_game_version` indicates that when a world with `base_game_version` `"1.20.80"` runs, it expects to see all of the vanilla gameplay elements (mobs, items, blocks) as they existed in the `"1.20.80"` release. This includes both the existence of those elements as well as their behavior. |
| `format_version` in **manifest.json** | 2 | Pack **manifest.json** files don't have `format_versions` formatted like other files do. New ones just have a format_version of 2. If the `format_version` is `0` or not specified, then **pack_manifest.json** will be backed up as **pack_manifest.json.old** and a new **manifest.json** with "format_version" 1 will be created. |
| `format_version` in **entity.json** | "1.19.30"  | This is a format number at the top of all JSON files which represents the JSON data contract of that particular file. This number looks like a game release version number, but is not. This number is mostly unrelated to the game build or release number, the number matching the version of the game where this format was first introduced but other than that the tie shouldn't have effects on the game. It is used by the file loading code to allow for accurate loading and parsing of JSON files as the data stored in those files can grow or change over time. |
| `format_version` in **controller.render.name** | "1.8.0" | Files made in older formats will still work in newer versions of the game, but only if the format version is set correctly. Incorrect format versions are a *frequent* source of errors. |
| `format_version` in other files| 1.20.80 | In other files, `format_version` is typically used to distinguish among different versions. Typically, you'll want to use a version consistent with the most recent version of Minecraft.|
| `min_engine_version` | [1, 16, 0] | When present, players can set the minimm version needed to allow the JSON to be parsed. The version in the definition is compared to the engine version for which the top resource pack was built. |
| `version` | [0, 0, 1] | This is the version of the Scripting API that a behavior pack is authored against. It's also inside of the **manifest.json** for the pack, but is different from `min_engine_version`. It tells the scripting system which API bindings to use for any script code in the behavior pack. |


The following sections contain the names of files in add-on packs that have version settings inside them.

To see all the files in each add-on pack, take a look at the [Comprehensive Pack Contents](../../Documents/ComprehensivePackContents.md) article.

## Versions in a Behavior Pack

Here is the introduction to [behavior packs](../../Documents/BehaviorPack.md).

- [animation_controllers](AnimationsReference/Examples/AnimationController.md)
    - `<entity_name>`
        - `<entity_name_animation_controllers>`.json
              "format_version": "1.10.30" (taken from [Entity Modeling and Animation](../../Documents/EntityModelingAndAnimation.md))
- [animations](../../Documents/IntroductionToAddEntity.md)
    - `<entity_name>`
        - `<entity_name_animations>`.json
             "format_version": "1.8.0"
- [blocks](../../Documents/AddCustomDieBlock.md)
    - `<block_name>`.json
        "format_version": "1.19.30"
- [cameras](../../Documents/CameraTutorialFreeCameraPreset.md)
    - presets
        - `<identifier>`.json
            "format_version": "1.19.50"
- [entities]()
    - `<entity_name>`.json
         "format_version": "1.19.30",
- [features](FeaturesReference/Examples/FeaturesIntroduction.md)
    - `<feature>`.json
         "format_version": "1.13.0"
- [feature_rules](FeaturesReference/Examples/FeaturesIntroduction.md)
    - `<feature_rule>`.json
         "format_version": "1.13.0"
- [dialogue]
    - `<scene_dialogue>`
        - `<scene>`.json
          "format_version":"1.17"
    - [manifest.json](../../Documents/BehaviorPack.md#create-the-manifest-file)
    
    ```
    "format_version": 1,
    "header": {
      "min_engine_version": [1, 12, 0],
       "version": [0, 0, 1]
    },
    "modules": 
      "version": [0, 0, 1]
    ```
- [items](../../Documents/AddCustomItems.md)
    - `<item_name>`.json
        "format_version": "1.20.60"
- [spawn_rules](EntityReference/Examples/ClientEntityDocumentation/DataDrivenSpawning.md)
    - `<entity_spawn_rules>`.json
         "format_version": "1.8.0"
- [structures](FeaturesReference/Examples/Features/minecraftStructure_template_feature.md)
    - `<structure_name>`.mcstructure
       "format_version": 1.13.0
- [manifest.json](../../Documents/BehaviorPack.md#create-the-manifest-file)
      
  ```
  "format_version": 2,
  "header": {
    "version": [1, 0, 0],
    "min_engine_version": [1, 16, 0]
  },
  "modules": [{
    "version": [1, 0, 0]
  }],
  "dependencies": [
  {
   "version":[1, 0, 0]
  }]
  ```

## Versions in a Resource Pack

Here is the introduction to [resource packs](../../Documents/ResourcePack.md).

- [animation_controllers](EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#animation_controllers)
    - `<entity_animation_controllers>`.json
        "format_version": "1.10.0"
- [animations](EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#animations)
    - `<entity.animation>`.json
        "format_version": "1.17.30"
- [attachables](EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#enable_attachables)
    - `<attachable_entity_name>`.json
        "format_version": "1.19.80"
- [block_culling](../../Documents/CustomBlockOversized.md)
    - `<block_culling>.json`
        "format_version": "1.20.60"
- [entity](../../Documents/IntroductionToAddEntity.md)
    - `<entity_name>`
        - `<entity_name>`.json
        - "format_version": "1.10.0",
- [fogs](../../Documents/FogInResourcePacks.md)
    - `<location_fog_setting>`.json
    -  "format_version": "1.16.100",
- [items](../../Documents/AddCustomItems.md)
    - `<item_name>`.json
    - "format_version": "1.20.60"
- [models](../../Documents/EntityModelingAndAnimation.md#entity-modeling-and-animation)
      [entity]
        - `<entity>`.geo.json
        - "format_version": "1.10.0"
- [particles](ParticlesReference/ParticlesIntroduction.md)
    - `<item_name>`.json
    - "format_version": "1.10.0"
- [render_controllers](AnimationsReference/Examples/AnimationRenderController.md)
    - `<entity_render_controllers>`.json'
    "format_version": "1.8.0"
    - default.render_controllers.json
- [biomes_client.json](FogsReference/Examples/FogsIntroduction.md)
    - `version "format_version"`
- [blocks.json]
    - `"format_version": "1.19.30"` 

## Versions in Common Files

### manifest.json

**behavior_pack/manifest.json**

```json
{
  "format_version": 2,
  "header": {
    "version": [1, 0, 0],
    "min_engine_version": [1, 16, 0]
  },
  "modules":
    [
      {
          "version": [1, 0, 0]
      }
    ]
}
```

**resource_pack.manifest.json**

```json
{
 "format_version": 2,
 "header": {
   "version": [1, 0, 0],
   "min_engine_version": [1, 16, 0]
  },
 "modules": [
   {
     "version": [1, 0, 0]
   }
 ]
}
```

**skin_pack/manifest.json**

```json
{
  "header": {
    "version": [1, 0, 0],
  },
  "modules": [
    {
      "version": [1, 0, 0],
    }
  ],
  "format_version": 1
}
```

**world_template/manifest.json**

```json
{
  "header": {
    "version": [1, 0, 0],
  },
  "modules": [
    {
      "version": [1, 0, 0],
    }
  ],
  "format_version": 2
}
```

**dialogue/manifest.json** taken from the [NPC Dialogue](../../Documents/NPCDialogue.md) page.

```json
  "format_version":"1.17",
```

## min_engine_version

(Taken from [Client Entity Documentation](EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md))

When present, players can set the minimum version needed to allow the JSON to be parsed. The version in the definition is compared to the engine version for which the top resource pack was built. If a definition's `min_engine_version` is newer than that pack's engine version then the definition is not parsed. Multiple definition files may use the same identifier, in which case only one of those definitions will be loaded. The definition with the same or closest and not greater `min_engine_version`, as compared to the top resource pack's engine version, will be parsed; all other definitions with the same identifier will not be parsed.

This can be useful for continuing to support an older version of an entity, when an older resource pack is used at the top of the resource pack stack, while also supporting a newer version of the entity in all other cases.

`min_engine_version` is typically used to configure compatibility for content within behavior packs and resource packs. For example, the commands in **manifest.json** will run differently depending on the `min_engine_version` - the `execute` command as a completely different syntax if `min_engine_version` is the same or newer than 1.19.50. 

For `min_engine_version`, we always recommend that creators use the version consistent with the latest version of Minecraft.

## Script Module Version

This isn't used in vanilla Minecraft, but I would be remiss if I did not include a link to the article about [Script Module Versioning](../../Documents/ScriptVersioning.md).

