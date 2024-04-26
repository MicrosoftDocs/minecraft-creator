---
author: iconicNurdle
ms.author: mikeam
title: Version Disambiguation
description: An Exploration into Versions
ms.service: minecraft-bedrock-edition
---

# Version Disambiguation

I keep seeing it over and over again in add-on pack JSON files... `format_version` and `version` ... and what about `min_engine_version`?
Have you seen `base_game_version`? Why are there so many and how are they different?

Here's a handy table of the terms 

| Term    | Example Value | Description |
|--------------|--------|------------|
| `base_game_version` | 1.20.80 | Essentially, `base_game_version` is used to choose how vanilla elements should behave in a world. |
| `format_version` in **manifest.json** | 2 |  |
| `format_version` in **entity.json** | 1.17.30  | Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it. |
| `format_version` in **controller.render.name** | 1.8.0 |  |
| `min_engine_version` | 1, 16, 0 | [Link to the definition in Client Entity Documentation Introduction](EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#min_engine_version) |
| `version` | 1, 0, 0 |  |

I'm not aware of many places where `format_version` doesn't imply the first version of Minecraft this feature is available in, except for **manifest.json**, where `format_version` is 2 because ... it's different.

I'm going to start by finding everwhere there is an iteration of the word 'version' in each of the different Add-On packs.

In each file, I'm going to delete anything that doesn't pertain to something to do with a version to build a collection of what files contain things that are versioned.

Here is a link to the [Comprehensive Pack Contents](../../Documents/ComprehensivePackContents.md) article.

## Versions in a Behavior Pack

Here is the introduction to [behavior packs](../..Documents/BehaviorPack.md).

- [animation_controllers](AnimationsReference/Examples/AnimationController.md)
    - `<entity_name>`
        - `<entity_name_animation_controller>`.json
              "format_version": "1.17.30"
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
         "format_version": "1.16.21",
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
- [biomes_client.json](FogsReference/Examples/FogsIntroduction.md#biomes_client.md)
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

## Script Module Version

This isn't used in vanilla Minecraft, but I would be remiss if I did not include a link to the article about [Script Module Versioning](../Documents/ScriptVersioning.md).

