---
author: JDHeaden
ms.author: v-bbortree
title: Volume Documentation - Properties & Descriptions
ms.prod: gaming
---

# Volume Documentation - Properties & Descriptions

These properties are part of the Volume Definition and Volume Properties that are used within volume JSON files. This helps the system determine how to parse and initialize this volume.

## Example

### Custom volume behavior JSON

```json
    {
      "format_version": 1.17.0,
      "minecraft:volume": {
        "description": {
          "identifier": "your_custom_namespace:sample_volume"
        },
        "components": {
          "minecraft:bounds": {
            "min": [-50, 0, -50],
            "max": [50, 256, 50]
          },
          "minecraft:fog": {
            "fog_identifier": "minecraft:fog_savanna",
            "priority": 1
          }
        }
      }
    }
```

| Name| Default Value| Type| Description |
|:----------|:----------|:----------|:----------|
| format_version|*not set* | String|  Specifies the version of the game this entity was made in. Minimum supported version is 1.17.0. Current supported version is 1.19.30.|

### Identifier

The identifier parameter is a part of the minecraft:volume JSON object that sets the namespace of the volume.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* | String|  The unique identifier for this volume. The name must use the format 'namespace:name' and the namespace cannot be 'minecraft'.|
