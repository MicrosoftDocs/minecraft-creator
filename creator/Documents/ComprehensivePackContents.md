---
author: iconicNurdle
ms.author: mikeam
title: Comprehensive List of Pack Contents
description: "An overview of the structure and contents of behavior packs and resource packs"
ms.service: minecraft-bedrock-edition
---

# Comprehensive List of Add-on Pack Contents

Have you ever wondered what files and folders the most comprehensive behavior, resource, and skin packs would contain? If so, this list is for you.

Minecraft Bedrock Edition can only use add-on pack file contents if the file is the correct type (like .json, .png, .fsb), and if it is stored in a folder with a particular name, and if that folder is in the correct location.

Behavior packs and resource packs can vary wildly depending on what the creator who made them wants to create. It can also be a design choice to group entities or items in separate folders, rather than storing their **.json** files all together.

For example, if the creator does not want to use functions, then there is no function section and no **.mcfunction** files. But if they do want to use a function, then this list helps by showing that the **function** folder goes in the behavior pack, that the folder must be named **function** (rather than "functions"), and that only **.mcfunction** files can go in that folder.

Some features need a folder to contain the resources and a related file like **sounds.json**.

The only required file in either type of pack is **manifest.json**.

Wherever possible, the sections are linked to related tutorials, overviews, or reference documents.

## Comprehensive Behavior Pack

Here is an introduction to [behavior packs](BehaviorPack.md).

- [animation_controllers](../Reference/Content/AnimationsReference/Examples/AnimationController.md)
    - `<entity_name>`
        - `<entity_name_animation_controller>`.json
    - `<entity_controller>`.json
- [animations](../Reference/Content/AnimationsReference/Examples/AnimationGettingStarted.md)
    - `<entity_name>`
        - `<entity_name_animations>`.json
    - `<entity_name_animations>`.json
- [blocks](AddCustomDieBlock.md)
    - `<block_name>`.json
- [cameras](CameraTutorialFreeCameraPreset.md)
    - presets
        - `<identifier>`.json
- [entities]()
    - `<entity_name>`
        - `<entity_name_animation_controller>`.json
    - `<entity_name>`.json
- [features](../Reference/Content/FeaturesReference/Examples/FeaturesIntroduction.md)
    - `<feature>`.json
- [feature_rules](../Reference/Content/FeaturesReference/Examples/FeaturesIntroduction.md)
    - `<feature_rule>`.json
- [dialogue]
    - `<scene_dialogue>`
        - `<scene>`.json
    - [manifest.json](BehaviorPack.md#create-the-manifest-file)
- [functions](FunctionsIntroduction.md)
    - `<entity_name>`
        - `<entity_name_function>`.mcfunction
    - [tick.json](TickJsonIntroduction.md)
- [items](AddCustomItems.md)
    - `<item_name>`.json
- [loot_tables](IntroductionToLootTables.md)
    - entities
        - `<entity_name>`.json
- [recipes](../Reference/Content/RecipeReference/Examples/RecipeDefinitions/RecipeIntroduction.md)
    - `<entity_recipe>`.json
- [spawn_rules](../Reference/Content/EntityReference/Examples/ClientEntityDocumentation/DataDrivenSpawning.md)
    - `<entity_spawn_rules>`.json
- [structures](../Reference/Content/FeaturesReference/Examples/Features/minecraftStructure_template_feature.md)
    - `<structure_name>`.mcstructure
- [texts](PreparingRawTextForLocalization.md)
    - languages.json
    - en_US.lang
    - `<language>`.lang
- [trading](LootAndTradeTableFunctions.md)
    - `<villager_trades>`.json
- [manifest.json](BehaviorPack.md#create-the-manifest-file) **(required)**
- pack_icon.png

## Comprehensive Resource Pack

Here is an introduction to [resource packs](ResourcePack.md).

- [animation_controllers](../Reference/Content/EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#animation_controllers)
    - `<entity_animation_controllers>`.json
- [animations](../Reference/Content/EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#animations)
    - `<entity.animation>`.json
- [attachables](../Reference/Content/EntityReference/Examples/ClientEntityDocumentation/ClientEntityDocumentationIntroduction.md#enable_attachables)
    - `<attachable_entity_name>`.json
- [block_culling](CustomBlockOversized.md#culling)
    - `<block_culling>.json`
- [entity](IntroductionToAddEntity.md)
    - `<entity_name>`
        - `<entity_name>`.json
    - `<entity_name>`.json
- [fogs](FogInResourcePacks.md)
    - `<location_fog_setting>`.json
- [items](AddCustomItems.md)
    `<item_name>`.json
- [materials](IntroductionToAddEntity.md#materials)
    - `<entity>`.material
- [models](EntityModelingAndAnimation.md#entity-modeling-and-animation)
    - `<entity>`.geo.json
- [particles](../Reference/Content/ParticlesReference/ParticlesIntroduction.md)
    - `<item_name>`.json
- [render_controllers](../Reference/Content/AnimationsReference/Examples/AnimationRenderController.md)
    - `<entity_render_controllers>`.json
    - default.render_controllers.json
- [sounds](IntroductionToSound.md)
    - `<location_type>`
        - `<location1>`
            - `<location*>`.ogg
        - `<location2>`
            - `<location*>`
                - `<sound*>`.fsb
- [texts](PreparingRawTextForLocalization.md)
    - `<language>`
        - font
            - glyph_*.png
    - en_US.lang
- [textures](AddCustomItems.md#goo-resource-pack)
    - `<item_category>`
        - `<item_name>`
            - `<item_name>`.png
        - `<item_name>`.png
    - [blocks]()
        - `<custom_block>`.png
    - [terrain_texture.json](AddCustomDieBlock.md#add-a-friendly-name-in-terrain_texturejson)
    - [flipbook_textures.json](ConvertingTexturePacks.md#best-practices)
- ui
    - `<graphic>`.png
    - `<graphic>`.jpg
    - `<file>`.json
- [biomes_client.json](../Reference/Content/FogsReference/Examples/FogsIntroduction.md#biomes)
- [blocks.json](AddCustomDieBlock.md#define-textures-and-sounds-with-blocksjson)
- [manifest.json](ResourcePack.md#create-a-manifest-file) **(required)**
- pack_icon.png
- [sounds.json](AddCustomSounds.md)

## Comprehensive Skin Pack

Here is an introduction to [skin packs](PackagingASkinPack.md).

- [texts](PreparingRawTextForLocalization.md)
    - languages.json
    - en_US.lang
- `<skin_graphic>`.png
- geometry.json
- [manifest.json](PackagingASkinPack.md#template-manifestjson) **(required)**
- skins.json

## Common Files

### manifest.json

This is the most important file in the pack. Without it, Minecraft will not know what to do with the rest of the content. 
Different packs' manifest files look similar, but there are some very important differences.

Take a look at these examples and notice the `"type: "` line in the `"modules"` section, if there is one.

**behavior_pack/manifest.json**

```json
{
  "format_version": 2,
  "header": {
    "description": "Pack description",
    "name": "My Behavior Pack",
    "uuid": "<FIRST GENERATED UUID>",
    "version": [1, 0, 0],
    "min_engine_version": [1, 16, 0]
  },
  "modules":
    [
      {
        "description": "Pack description",
          "type": "data",
          "uuid": "<SECOND GENERATED UUID>",
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
   "description": "Resource pack description",
   "name": "My Resource Pack",
   "uuid": "<FIRST GENERATED UUID>",
   "version": [1, 0, 0],
   "min_engine_version": [1, 16, 0]
  },
 "modules": [
   {
     "description": "Resource pack description",
     "type": "resources",
     "uuid": "<SECOND GENERATED UUID>",
     "version": [1, 0, 0]
   }
 ]
}
```

**skin_pack/manifest.json**

```json
{
  "header": {
    "name": "pack.name",
    "version": [1, 0, 0],
    "uuid": "<FIRST GENERATED UUID>"
  },
  "modules": [
    {
      "version": [1, 0, 0],
      "type": "skin_pack",
      "uuid": "<SECOND GENERATED UUID>"
    }
  ],
  "format_version": 1
}
```

**world_template/manifest.json**

```json
{
  "header": {
    "name": "pack.name",
    "description": "pack.description",
    "version": [1, 0, 0],
    "uuid": "<FIRST GENERATED UUID>"
  },
  "modules": [
    {
      "version": [1, 0, 0],
      "type": "world_template",
      "uuid": "<SECOND GENERATED UUID>"
    }
  ],
  "format_version": 2
}
```

**dialogue/manifest.json** taken from the [NPC Dialogue](NPCDialogue.md) page.

```json
{
  "format_version":"1.17",
  "minecraft:npc_dialogue":{
    "scenes":[
     {
        "scene_tag":"ducky_intro",
        "npc_name":"Ducky",
        "text":"Hello new friend",
        "on_open_commands":[
             "/clear @p"
        ],
        "on_close_commands":[
            "/say Farewell! "
        ],
         "buttons":[
            {
              "name":"Take Gold?",
              "commands":[
                  "/give @initiator gold_ingot"
                ]
            },
            {  
              "name":"Wish Luck",
              "commands":[
                 "/say Good luck!"
                ] 
            }
        ]
      }
    ]
  }
}
```

### .../texts/languages.json

This file tells Minecraft what languages your skin pack supports. Only English (en_US.lang) is required. If you want to support other languages you can make other `xx_YY.lang` files and then edit the **languages.json** file to tell the game you support them.

The following locales/languages are currently supported:

- "en_US"
- "de_DE"
- "ru_RU"
- "zh_CN"
- "fr_FR"
- "it_IT"
- "pt_BR"
- "fr_CA"
- "zh_TW"
- "es_MX"
- "es_ES"
- "pt_PT"
- "en_GB"
- "ko_KR"
- "ja_JP"
- "nl_NL"
- "bg_BG"
- "cs_CZ"
- "da_DK"
- "el_GR"
- "fi_FI"
- "hu_HU"
- "id_ID"
- "nb_NO"
- "pl_PL"
- "sk_SK"
- "sv_SE"
- "tr_TR"
- "uk_UA"

#### Template languages.json

```json
[
  "en_US"
]
```

### Sample Packs

To see examples of typical resource and behavior packs, check out the Minecraft [Vanilla resource pack](https://aka.ms/resourcepacktemplate) and [Vanilla behavior Pack](https://aka.ms/behaviorpacktemplate).

## What's Next?

Here are some more advanced add-on pack content information:

> [!div class="nextstepaction"]

> [ScriptingGettingStarted](ScriptingGettingStarted.md)

> [Creating New Entity Types](introductiontoaddentity.md)

> [Entity JSON Documentation](../Reference/Content/EntityReference/index.yml)