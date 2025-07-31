---
author: mammerla
ms.author: mikeam
title: Addons Documentation - manifest.json
description: "A reference document detailing the basic information about manifest.json files"
ms.service: minecraft-bedrock-edition
---

# manifest.json for Behavior/Resource/Skin Packs and World Templates

The manifest file contains all the basic information about the pack that Minecraft needs to identify it. The tables below contain all the components of the manifest, their individual properties, and what they mean.

Note that in versions of preview Minecraft version 1.21.110 and higher, we have introduced a new verson 3 of the interface. Differences in this preview version of the manifest are called out in this document. The main differences are the usage of semver-style strings for version signifiers, and additional support for custom pack settings. For more information on custom pack settings, see [the custom pack settings article](../../../Documents/AddOns/CustomPackSettings.md). There is also a current issue with version 3 processing where <metadata>/<author> properties are required to be set in a version 3 manifest. We expect to make the author property optional for version 3 in a future update.

> [!NOTE]
> To learn more about how to get started with writing manifest.json files in Minecraft: Bedrock Edition, you can view the [Introduction to Resource Packs](../../../Documents/ResourcePack.md) Tutorial.

## Properties

| Name| Description |
|:-----------|:-----------|
| format_version| The syntax version used in the manifest file. This may be 1 for skin packs or 2 for resource, behavior, and world templates. Version 3 is a new update of the manifest currently in preview. |
| header| Section containing information regarding the name of the pack, description, and other features that are public facing. |
| modules| Section containing information regarding the type of content that is being brought in.|
| dependencies| Section containing definitions for any other packs that are required in order for this manifest.json file to work. |
| capabilities| Section containing optional features that can be enabled in Minecraft. |
| metadata| Section containing the metadata about the file such as authors and licensing information. |

### header

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|allow_random_seed| Boolean| This option will generate a random seed every time a template is loaded and allow the player to change the seed before creating a new world. (world template manifest JSON only) |
| base_game_version|Vector [a, b, c] or [SemVer](https://semver.org/) String| This is the version of the base game your world template requires, specified as [majorVersion, minorVersion, revision]. We use this to determine what version of the base game resource and behavior packs to apply when your content is used. (world template manifest JSON only). In version 3, currently in preview, you must use a string for version. |
| description| String| This is a short description of the pack. It will appear in the game below the name of the pack. We recommend keeping it to 1-2 lines. |
| lock_template_options| Boolean| This option is required for any world templates. This will lock the player from modifying the options of the world. (world template manifest JSON only) |
| min_engine_version|Vector [a, b, c] or [SemVer](https://semver.org/) String| This is the minimum version of the game that this pack was written for. This is a required field for resource and behavior packs. This helps the game identify whether any backwards compatibility is needed for your pack. You should always use the highest version currently available when creating packs. In version 3, currently in preview, you must use a string for version. |
| name| String| This is the name of the pack as it appears within Minecraft. This is a required field. |
| pack_scope | String| For resource packs, an optional string that specifies whether this resource pack can be used across the game or at an individual world level. Valid values are "world", which specifies that a pack is only addable in the context of a world "global", which means that a pack is only addable across the game, and "any" which indicates that a pack can apply either across the  game or to a specific world. If not specified, this is interpreted as "any". |
| uuid| String| This is a special type of identifier that uniquely identifies this pack from any other pack. UUIDs are written in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx where each x is a hexadecimal value (0-9 or a-f). We recommend using an online service to generate this and guarantee their uniqueness. |
| version|Vector [a, b, c] or [SemVer](https://semver.org/) String| This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower. In version 3, currently in preview, you must use a string for version. |

## modules

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|description| String| This is a short description of the module. This is not user-facing at the moment but is a good place to remind yourself why the module is defined. |
|type| String|  This is the type of the module. Can be any of the following: `resources`, `data`, `world_template` or `script`. |
|uuid| String| This is a unique identifier for the module in the same format as the pack's UUID in the header. This should be different from the pack's UUID, and different for every module. |
| version| Vector [a, b, c] or [SemVer](https://semver.org/) String | This is the version of the module in the same format as the pack's version in the header. This can be used to further identify changes in your pack. In version 3, currently in preview, you must use a string for version. |
|language| String| Only present if `type` is `script`.  This indicates the language in which scripts are written in the pack.  The only supported value is `javascript`. |

> [!IMPORTANT]
> In order to submit any content to the marketplace, the version `a` value will need to be set to a value greater than 0. e.g `"version": [1, 0, 0]` or `"version": "1.0.0"`

### dependencies

| Name| Type| Description |
|:-----------|:-----------|:-----------|
|uuid| String| This is the unique identifier of the pack that this pack depends on. It needs to be the exact same UUID that the pack has defined in the header section of its manifest file. |
|module_name| String| For dependencies on built-in scripting modules, contains the name of the module. (for example, @minecraft/server) |
|version| Vector [a, b, c] or [SemVer](https://semver.org/) String |  This is the specific version of the pack that your pack depends on. Should match the version the other pack has in its manifest file. |

### capabilities

| Name| Description |
|:-----------|:-----------|
| chemistry| The pack can add, remove, or modify chemistry behavior. |
| editorExtension| Indicates that this pack contains extensions for the Minecraft Editor. |
| experimental_custom_ui| The pack can use HTML files to create custom UI, as well as use or modify the custom UI. |
| raytraced| The pack uses Ray Tracking functionality and may use custom shaders. |

### metadata

|Name| Type| Description |
|:-----------|:-----------|:-----------|
| authors| Array| Name of the author(s) of the pack. |
| license| String| The license of the pack. |
| generated_with | JSON Object | This is used to identify tools used to generate a manifest.json file. The tool names are strings that must be [a-zA-Z0-9_-] and 32 characters maximum. The tool version number are semver strings for each version that modified the manifest.json file. |
| product_type | String | This optional string is used to identify a targeted context for this pack. The only supported value is "addon", indicating this pack is intended to be added to players' worlds. Setting product_type to "addon" should not change how the pack functions in-game. |
| url| String| The home website of your pack. |

### settings - manifest version 3 experimental

In manifest version 3 or later, as a part of preview builds, packs can have an optional user-visible "settings screen" available in the Minecraft menus. Note that this feature is experimental and subject to change or removal in future builds. 

The settings section is an order-dependent list of types of settings. Currently, there can be three types of settings:  label, toggle, and slider.

#### Label setting

A read-only label, used for describing or breaking up the sections of the settings area.

|Name| Type| Description |
|:-----------|:-----------|:-----------|
| type| String| For a label, this value should be "label". |
| text| String| Text value of the label. In future preview versions of settings, localization tokens should be accepted. |

#### Toggle setting

A binary (true or false) toggle or "switch".

|Name| Type| Description |
|:-----------|:-----------|:-----------|
| type| String| For a toggle, this value should be "toggle". |
| text| String| Textual, user-visible label for the toggle. In future preview versions of settings, localization tokens should be accepted. |
| name| String| Programmatic identifier for the value of this toggle. |
| default| boolean| True or false for the default value of this setting.

#### Slider setting

A sliding that allows for setting of a number within a range. Either integers or floating point numbers can be used for a slider.

|Name| Type| Description |
|:-----------|:-----------|:-----------|
| type| String| For a slider, this value should be "slider". |
| text| String| Textual, user-visible label for the slider. In future preview versions of settings, localization tokens should be accepted. |
| name| String| Programmatic identifier for the value of this toggle. |
| min| Number| Minimum value for the slider. |
| max| Number| Maximum value for the slider. |
| step| Number| Incremental "notches" for the slider. |
| default| Number| Default value for the slider. |

## Examples

Listed below are two examples showcasing how a manifest.json file can be written for a behavior pack and a resource pack.

### Behavior Pack

```json
{
    "format_version": 2,
    "header": {
        "description": "Example vanilla behavior pack",
        "name": "Vanilla Behavior Pack",
        "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
        "version": [1, 0, 0],
        "min_engine_version": [1, 20, 0]
    },
    "modules": [
        {
            "description": "Example behavior pack module",
            "type": "data",
            "uuid": "fa6e90c8-c925-460f-8155-c8a60b753caa",
            "version": [1, 0, 0]
        },
        {
            "description": "Example client scripts module",
            "type": "client_data",
            "uuid": "c05a992e-482a-455f-898c-58bbb4975e47",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
            "version": [1, 0, 0]
        }, 
        {
            "module_name": "@minecraft/server",
            "version": "1.9.0"
        }
    ],
    "metadata": {
        "authors": ["exampleAuthor"],
        "license": "MIT",
        "url": "http://www.contoso.com",
        "generated_with": {
            "example_tool": ["1.0.0", "1.1.0"]
        }
    }
}
```

### Resource Pack

```json
{
    "format_version": 2,
    "header": {
        "description": "Example vanilla resource pack",
        "name": "Vanilla Resource Pack",
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
        "pack_scope": "world",
        "version": [1, 0, 0],
        "min_engine_version": [1, 20, 0]
    },
    "modules": [
        {
            "description": "Example vanilla resource pack",
            "type": "resources",
            "uuid": "743f6949-53be-44b6-b326-398005028819",
            "version": [1, 0, 0]
        }
    ]
}
```
