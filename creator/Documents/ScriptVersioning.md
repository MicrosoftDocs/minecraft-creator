---
ms.author: mikeam
title: Script Module Versioning
author: mammerla
description: "Describes the fundamentals of how script API modules are versioned"
ms.service: minecraft-bedrock-edition
---
# Script Module Versioning

At its foundation, all script modules use a common version numbering scheme known as [Semantic Versioning](https://semver.org) (or semver). Semantic versions use a numeric version number of [major].[minor].[patch] with an optional suffix. Note that this version number is not connected to the overall Minecraft version numbering scheme (for example, `1.19.60`); rather, these version numbers increment as changes occur to the API surface.

Minecraft API modules currently operate on three tracks:

* a stable track (for example, version `1.1.0`)
* a beta track (for example, version `1.3.0-beta`)
* an internal track (for example, version `1.4.0-internal`)

When specifying dependencies within `manifest.json` of a behavior pack, it is important to consider the impact of the versions of APIs that you wish to use. Where possible, try to use stable track APIs (although admittedly, as of version 1.19.60, stable track APIs are fairly limited.)

## @minecraft/server script versions to product versions

For reference, @minecraft/server is our most frequently updating script module. It tends to increment
in version number with every major release of Minecraft. Here are the mappings of @minecraft/server version
to Minecraft product version:

| @minecraft/server module version | Minecraft product version |
|:-----------|:-----------|
| 1.0.0 | 1.19.70 |
| 1.1.0 | 1.19.80 |
| 1.2.0 | 1.20.0 |
| 1.3.0 | 1.20.10 |
| 1.4.0 | 1.20.20 |
| 1.5.0 | 1.20.30 |
| 1.6.0 | 1.20.40 |
| 1.7.0 | 1.20.50 |
| 1.8.0 | 1.20.60 |
| 1.9.0 | 1.20.70 |
| 1.10.0 | 1.20.80 |
| 1.11.0 | 1.21.0 |

## Stable Track

API modules in the stable track are numbered with a version number like `1.1.0`, and with no suffix on the end. These APIs are considered "finished" and should not change in functionality across releases where minor or patch versions are incremented. With stable APIs, Minecraft uses the rules of semantic versioning, which mean:

* Major version increments (for example, `2.3.0` -> `3.0.0`) imply changes that break backwards-compatibility, potentially in both API signature and functionality. Across major versions, a method signature might not change but it may work differently and impact the gameplay of worlds. Note that Minecraft may support multiple major versions of APIs in the future, so if a behavior pack has a dependency on an older major version of the API, it may still continue to work even if a newer major version of the script API module is available.

* Minor and patch version increments could imply new functionality and API signature additions, but should be backwards-compatible within the same major version.

This implies that as minor versions increment, and even if additional "minor releases" feature new APIs, they must be fully backwards compatible with earlier minor versions of the API. For example, if a script module has a dependency on version `1.3.0` of the `@minecraft/server` API, it may actually have that dependency fulfilled with `1.8.0` of the `@minecraft/server` - and those script modules should continue to function as expected. For those familiar with NPM semantic versioning, this is similar to the `^` signifier within version dependencies.

> [!IMPORTANT]
> As you share or publish behavior packs that use stable APIs, please base your dependencies for APIs on the latest and highest version number that is supported within Minecraft at the time of your release.

As of version 1.19.70, only `@minecraft/server` has APIs that are in the stable track. See the following objects specifically:

* [World](../ScriptAPI/minecraft/server/World.md)
* [Dimension](../ScriptAPI/minecraft/server/Dimension.md)
* [Entity](../ScriptAPI/minecraft/server/Entity.md)

Note that only a subset of the members of these types are currently exposed in the stable track.

## Beta Track

API modules in the beta track are labeled with the "-beta" suffix - for example, `1.2.0-beta`. Beta APIs do not follow the rules of semantic versioning. With beta APIs, no backwards compatibility is implied, and even minor version increments can include backwards-compatibility breaking changes like the removal of properties or methods. Moreover, with every major release of Minecraft, it is likely that several `-beta` modules will increment their version number (for example, from `1.2.0-beta` to `1.3.0-beta`) without having an automatic upgrade from the old `-beta` version to the next. As a consequence, you may need to update the version number of `manifest.json` dependencies at every major release if you are using `-beta` APIs.

> [!IMPORTANT]
> In order to use -beta APIs, you must enable the "Beta APIs" experiment within worlds that use these behavior packs.

## Internal Track

Internal APIs are not functional or supported for use in custom behavior packs. Their API signatures might change at any time.

## Using versioned type definitions when scripting

For the definitive resource on APIs and types that are exposed in various versions, consider using the type definitions available through **npm** at [npmjs.com](https://npmjs.com). The [@minecraft/server](https://www.npmjs.com/package/@minecraft/server) definitions contain different variants of type definitions for stable and beta tracks, as well as across both main and preview releases of Minecraft Bedrock Edition. See more on how to use these type definitions in [this article](ScriptDeveloperTools.md)
