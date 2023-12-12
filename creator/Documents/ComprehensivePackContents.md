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

Behavior packs and resource packs can vary wildly depending on what the creator who made them wants to create.

It can also be a design choice to group entities or items in separate folders, rather than storing their **.json** files all together.

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
- [entities]()
    - `<entity_name>`
        - `<entity_name_animation_controller>`.json
    - `<entity_name>`.json
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
- texts
    - `<language>`
        - font
            - glyph_*.png
    - en_US.lang
- textures
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
- [biomes_client.json](Backups/FogsReference/Examples/FogsConcepts/FogsIntroduction.md#biomes_clientjson)
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
- manifest.json
- skins.json

## Sample Packs

To see examples of typical resource and behavior packs, check out the Minecraft [Vanilla resource pack](https://aka.ms/resourcepacktemplate) and [Vanilla behavior Pack](https://aka.ms/behaviorpacktemplate).

## What's Next?

Here are some more advanced add-on pack content information:

>` [!div class="nextstepaction"]
>` [ScriptingGettingStarted](ScriptingGettingStarted.md)
>` [Creating New Entity Types](introductiontoaddentity.md)
>` [Entity JSON Documentation](../Reference/Content/EntityReference/index.yml)

