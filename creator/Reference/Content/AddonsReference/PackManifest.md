---
author: mammerla, PandaMine5
ms.author: mikeam
title: "Add-Ons Reference: manifest.json"
description: "A detailed documentation about manifest.json files"
ms.service: minecraft-bedrock-edition
ms.date: 29/08/2026
---

# manifest.json for Behavior/Resource/Skin Packs and World Templates

The manifest file contains all the basic information about the pack that Minecraft needs to identify it. The tables below contain all the components of the manifest, their individual properties, and what they mean.

Note that in versions of preview Minecraft <b>1.21.110</b> and higher, MCBE now supports <b>version 3</b> of manifest. The main differences are: usage of semver-style strings for version values, and additional support for custom pack settings. For more information on custom pack settings, see [custom pack settings article](../../../Documents/AddOns/CustomPackSettings.md)

> [!NOTE]
> To learn more about how to get started with writing manifest.json files in Minecraft: Bedrock Edition, you can view the [Introduction to Resource Packs](../../../Documents/ResourcePack.md) Tutorial.

## Properties

| Name           | Description                                                                                                                                                                                    |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format_version | The syntax version of `manifest.json`. Use `1` for skin packs, `2` for resource / behavior packs, and world templates. Version `3` is a newest version of manifest, only works after 1.21.110. |
| header         | Section containing information regarding the name of the pack, description, and other features that are public facing.                                                                         |
| modules        | Section containing information regarding the type of content that is being brought in.                                                                                                         |
| dependencies   | Section containing definitions for any other packs that are required in order for this manifest.json file to work.                                                                             |
| capabilities   | Section containing optional features that can be enabled in Minecraft.                                                                                                                         |
| metadata       | Section containing the metadata about the file such as authors and licensing information.                                                                                                      |

### header

| Name                      | Type                                                      | Required?          | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------ | :-------------------------------------------------------- | :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allow_random_seed         | Boolean                                                   | Optional           | This option will generate a random seed every time a template is loaded and allow the player to change the seed before creating a new world. (world template manifest JSON only)                                                                                                                                                                                                      |
| lock_template_options     | Boolean                                                   | Optional           | This option is required for world templates. This will lock the player from modifying the options of the world. (world template manifest JSON only)                                                                                                                                                                                                                                   |
| name                      | String                                                    | Required           | This is the name of the pack that appears in Minecraft. Allows formatting codes and font unicodes.                                                                                                                                                                                                                                                                                    |
| description               | String                                                    | Optional           | This is a description of the pack. It will appear in the game below the name of the pack. Recommended to use 2-3 lines, allows formatting codes, linebreaks & unicodes. If not specified, in log you'll see `"Unknown pack description"`                                                                                                                                              |
| uuid                      | String                                                    | Required           | This is a special type of identifier that uniquely identifies this pack from any other pack. UUIDs are written in the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` where each `x` is a hexadecimal value (0-9 or a-f). It's recommended to use websites to generate `v4 UUIDs` lowest collision chance. Allowed UUID versions v4, v7                                                 |
| version                   | Vector [a, b, c] or [SemVer](https://semver.org/) "a.b.c" | Required           | This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower. In version 3, currently in preview, you must use a string for version.                                  |
| pack_optimization_version | [SemVer](https://semver.org/) "a.b.c"                     | Optional           | This is the property that allows pack to work with `__brachive` folder. The only supported version is `0.1.0`. Works on v2 and v3 manifests, above Minecraft 1.21.110                                                                                                                                                                                                                 |
| base_game_version         | Vector [a, b, c] or [SemVer](https://semver.org/) "a.b.c" | Optional           | This is the version of the base game your world template requires, specified as [majorVersion, minorVersion, patch]. We use this to determine what version of the base game resource and behavior packs to apply when your content is used. (world template manifest JSON only). In version 3, currently in preview, you must use a string for version.                               |
| min_engine_version        | Vector [a, b, c] or [SemVer](https://semver.org/) "a.b.c" | Required in v2, v3 | This is the minimum version of the game that this pack was written for. This is a required field for resource and behavior packs. This helps the game identify whether any backwards compatibility is needed for your pack. You should always use the highest version currently available when creating packs. In version 3, currently in preview, you must use a string for version. |
| pack_scope                | String                                                    | Optional           | Resource-pack property that controls where pack can be used. Use `"world"` for world-only texture packs, `"global"` for Global only packs. If value not specified, then it'll use `"any"` which will make pack show `"Global Resources" tab` or in specific world.                                                                                                                    |

## modules

| Name        | Type                                                      | Required? | Description                                                                                                                                                                                                                 |
| :---------- | :-------------------------------------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description | String                                                    | Optional  | This is a short description of the module. This text won't be visible to the player, so it's not recommended to use this property.                                                                                          |
| type        | String                                                    | Required  | This is the type of the module. Can be any of the following: `resources`, `data`, `world_template` or `script`.                                                                                                             |
| uuid        | String                                                    | Required  | This is a unique identifier for the module in the same format as the pack's UUID in the header. This should be different from the pack's UUID, and different for every module.                                              |
| version     | Vector [a, b, c] or [SemVer](https://semver.org/) "a.b.c" | Required  | This is the version of the module in the same format as the pack's version in the header. This can be used to further identify changes in your pack. In version 3, currently in preview, you must use a string for version. |
| language    | String                                                    | Optional  | Only present if `type` is `script`. This indicates the language in which scripts are written in the pack. The only supported value is `javascript`.                                                                         |

### dependencies

| Name        | Type                                                      | Description                                                                                                                                                                   |
| :---------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uuid        | String                                                    | This is the unique identifier of the pack that this pack depends on. It needs to be the exact same UUID that the pack has defined in the header section of its manifest file. |
| module_name | String                                                    | For dependencies on built-in scripting modules, contains the name of the module. (for example, @minecraft/server)                                                             |
| version     | Vector [a, b, c] or [SemVer](https://semver.org/) "a.b.c" | This is the specific version of the pack that your pack depends on. Should match the version the other pack has in its manifest file.                                         |

### capabilities

| Name                   | Required?                | Description                                                                                            |
| :--------------------- | :----------------------- | :----------------------------------------------------------------------------------------------------- |
| pbr                    | Required in v3           | Enables Vibrant Visuals' features on supported devices. Disables Vibrant visuals in v3 if not defined. |
| raytraced              | Required for RTX to work | Enables Ray-Tracing functionality and enables the RTX option mode on supported devices.                |
| chemistry              | Optional                 | The pack can add, remove, or modify chemistry behavior.                                                |
| editorExtension        | Optional                 | Indicates that this pack contains extensions for the Minecraft Editor.                                 |
| experimental_custom_ui | Optional                 | The pack can use HTML files to create custom UI, as well as use or modify the custom UI.               |

### metadata

The manifest proporties that aren't visible in game, are used as metadata.
|Name| Type| Required?| Description |
|:-----------|:-----------|:-----------|:-----------|
| authors| Array| Required in v3| Name of the author(s) of the pack. |
| license| String| Optional|The license of the pack. |
| generated*with | JSON Object | Optional|Used to show the tools used to generate a `manifest.json` file. The tool names are strings that must be [a-zA-Z0-9*-] and 32 characters maximum. The tool version number are Semver strings for each version that modified the `manifest.json` file. Doesn't affect gameplay. |
| product_type | String | Optional| Indicates context for this pack. The only supported value is `"addon"`, forcing this pack to work without disabling Achievements. |
| url| String| Optional| The link to your website or your author profile. |

### settings - manifest version 3 experimental

In manifest version 3 or later, as a part of preview builds, packs can have an optional user-visible "settings screen" available in the Minecraft menus. Note that this feature is experimental and subject to change or removal in future builds.

The settings section is an order-dependent list of types of settings. There are 4 types of settings: label, toggle, slider and dropdown.

#### Label setting

A read-only label, used for describing or breaking up the sections of the settings area.

| Name | Type   | Description                                                            |
| :--- | :----- | :--------------------------------------------------------------------- |
| type | String | For a label, this value should be "label".                             |
| text | String | Text value of the label. Allows localization, color codes and unicode. |

```json
"settings": [
   {
      "type": "label",
      "text": "Example §aText\n"
   }
]
```

#### Toggle setting

A binary (true or false) toggle or "switch".

| Name    | Type    | Description                                                                                                                                                 |
| :------ | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type    | String  | For a toggle, value must be `"toggle"`.                                                                                                                     |
| text    | String  | Text for the toggle. Allows localization, color codes and unicode.                                                                                          |
| name    | String  | Programmatic identifier for the value of this toggle: `example:toggle1` <br>Can be queried with Molang using `q.is_pack_setting_enabled('example:toggle1')` |
| default | boolean | `true` or `false` for the default value of this setting.                                                                                                    |

```json
"settings": [
   {
      "type": "toggle",
      "text": "Example §bToggle\n",
      "name": "example:toggle1",
      "default": false
   }
]
```

#### Slider setting

A slider allows to change a number within a range. Either integers or floating point numbers can be used for a slider.

| Name    | Type   | Description                                                                                                                                          |
| :------ | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| type    | String | For a slider, value must be `"slider"`.                                                                                                              |
| text    | String | Text for the slider. Allows localization, color codes and unicode.                                                                                   |
| name    | String | Programmatic identifier for the value of this slider: `example:slider1` <br>Can be queried with Molang using `q.get_pack_setting('example:slider1')` |
| min     | Number | Minimum value for the slider.                                                                                                                        |
| max     | Number | Maximum value for the slider.                                                                                                                        |
| step    | Number | Incremental "notches" for the slider.                                                                                                                |
| default | Number | Default value for the slider.                                                                                                                        |

```json
"settings": [
   {
      "type": "slider",
      "text": "Example §cSlider\n",
      "name": "example:slider1",
      "min": 0,
      "max": 10,
      "step": 1,
      "default": 5
   }
]
```

#### Dropdown setting

A dropdown that allows the user to select one option from defined list of values.

| Name    | Type   | Description                                                          |
| :------ | :----- | :------------------------------------------------------------------- |
| type    | String | For a dropdown, this value must be `"dropdown"`.                     |
| text    | String | Text for the dropdown. Allows localization, color codes and unicode. |
| name    | String | Programmatic identifier for the dropdown...                          |
| default | String | The name of the option selected by default.                          |
| options | Array  | List of options that the user can select.                            |

Each option is an object with these properties:

| Name | Type   | Description                                                                  |
| :--- | :----- | :--------------------------------------------------------------------------- |
| name | String | Programmatic value of the dropdown option.                                   |
| text | String | Text for this dropdown option. Allows localization, color codes and unicode. |

```json
"settings": [
   {
      "type": "dropdown",
      "text": "Example §qDropdown\n",
      "name": "example:dropdown1",
      "default": "value_1",
      "options": [
         {
            "name": "value_1",
            "text": "Value1 Text"
         },
         {
            "name": "value_2",
            "text": "Value2 Text"
         }
      ]
   }
]
```

#### Subpacks

Subpacks is a slider option that allows you to have multiple variations of textures to switch between - instead of using seperate packs. Unlike Pack Settings, subpacks can only be changed in `Global Resources` Tab: [More about Subpacks](https://learn.microsoft.com/en-us/minecraft/creator/documents/buildingsubpacks?view=minecraft-bedrock-stable)

## Examples

Listed below are two examples showcasing how a manifest.json file can be written for a behavior pack and a resource pack.

### manifest.json V1

```json
{
   "format_version": 1,
   "header": {
      "name": "Pack Name",
      "description": "Pack Description",
      "uuid": "00000000-0000-0000-0000-000000000000",
      "version": [1, 0, 0]
   },
   "modules": [
      {
         "type": "resources",
         "uuid": "00000000-0000-0000-0000-000000000001",
         "version": [1, 0, 0]
      }
   ],
   "metadata": {
      "authors": ["PandaMine5", "Author N2"],
      "license": "MIT",
      "url": "https://example.com",
      "generated_with": {
         "Example Tool": ["1.0.0"]
      }
   }
}
```

### manifest.json V2

```json
{
   "format_version": 2,
   "header": {
      "allow_random_seed": true,
      "lock_template_options": false,
      "name": "Pack Name",
      "description": "Pack Description",
      "uuid": "00000000-0000-0000-0000-000000000001",
      "pack_scope": "any",
      "version": [1, 0, 0],
      "pack_optimization_version": "0.1.0", // Only 1.21.110+
      "base_game_version": [1, 21, 0],
      "min_engine_version": [1, 21, 0]
   },
   "modules": [
      {
         "description": "Resource Module",
         "type": "resources",
         "uuid": "00000000-0000-0000-0000-000000000002",
         "version": [1, 0, 0]
      }
   ],
   "capabilities": [
      "pbr",
      "raytraced",
      "chemistry",
      "editorExtension",
      "experimental_custom_ui"
   ],
   "metadata": {
      "authors": ["PandaMine5", "Author N2"],
      "license": "MIT",
      "url": "https://example.com",
      "product_type": "addon",
      "generated_with": {
         "Example Tool": ["1.0.0"]
      }
   }
}
```

### manifest.json V3

```json
{
   "format_version": 3,
   "header": {
      "allow_random_seed": true,
      "lock_template_options": false,
      "name": "Pack Name",
      "description": "Pack Description",
      "uuid": "00000000-0000-0000-0000-000000000003",
      "pack_scope": "any",
      "version": "1.0.0",
      "pack_optimization_version": "0.1.0",
      "min_engine_version": "1.21.110",
      "base_game_version": "1.21.110"
   },
   "modules": [
      {
         "type": "resources",
         "uuid": "00000000-0000-0000-0000-000000000004",
         "version": "1.0.0"
      }
   ],
   "settings": [
      {
         "type": "label",
         "text": "Example Text"
      },
      {
         "type": "toggle",
         "text": "Example Toggle",
         "name": "pandamine5:example_toggle",
         "default": true
      },
      {
         "type": "slider",
         "text": "Example Slider",
         "name": "pandamine5:example_value",
         "min": 0,
         "max": 100,
         "step": 1,
         "default": 50
      },
      {
         "type": "dropdown",
         "text": "Example Dropdown",
         "name": "pandamine5:example_dropdown",
         "default": "value_1",
         "options": [
            { "name": "value_1", "text": "Value1 Text" },
            { "name": "value_2", "text": "Value2 Text" }
         ]
      }
   ],
   "capabilities": [
      "pbr",
      "raytraced",
      "chemistry",
      "editorExtension",
      "experimental_custom_ui"
   ],
   "authors": ["PandaMine5", "Author N2"],
   "license": "MIT",
   "url": "https://example.com",
   "product_type": "addon",
   "generated_with": {
      "Example Tool": ["1.0.0"]
   }
}
```

### Behavior Pack

```json
{
   "format_version": 2,
   "header": {
      "name": "Vanilla Behavior Pack",
      "description": "Example vanilla behavior pack",
      "uuid": "00000000-0000-0000-1000-000000000005",
      "version": [1, 0, 0],
      "min_engine_version": [1, 21, 0]
   },
   "modules": [
      {
         "type": "data",
         "uuid": "00000000-0000-0000-0000-000000000006",
         "version": [1, 0, 0]
      },
      {
         "type": "script",
         "uuid": "00000000-0000-0000-0000-000000000007",
         "version": [1, 0, 0]
      }
   ],
   "dependencies": [
      {
         "uuid": "00000000-0000-0000-0000-000000000003",
         "version": [1, 0, 0]
      },
      {
         "module_name": "@minecraft/server",
         "version": "2.0.0-beta"
      }
   ],
   "metadata": {
      "authors": ["PandaMine5", "Author N2"],
      "license": "MIT",
      "url": "https://example.com",
      "product_type": "addon",
      "generated_with": {
         "Example Tool": ["1.0.0"]
      }
   }
}
```
