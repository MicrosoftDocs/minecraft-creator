---
author: kakinnun
ms.author: kakinnun
title: 1.19.70 Update Notes
description: Update summary of Creator changes in Bedrock 1.19.70
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.19.70 Update Notes for Creators

Minecraft Bedrock has been updated to 1.19.70 and there are a number of changes of note for add-on creators.

## Holiday Creator Features ##

We continue to work on bringing the Holiday Creator Features out of experimental. Our current focus is on block components. The following block components are now available outside of the experimental toggle in 1.19.70.

- [Block States and Permutations](../Reference/Content/BlockReference/Examples/BlockStatesAndPermutations.md)

## Components ##

We've removed support for field "data" in the following commands:

- /clone
- /execute
- /fill
- /setblock
- /testforblock

**Example:**

No longer supported:

```/setblock ~ ~ ~ minecraft:wool 1```

Supported:

```/setblock ~ ~ ~ minecraft:wool ["color":"orange"]```

## Creator API ##

A reminder that a limited number of APIs were released out of experimental in [1.19.50](Update1.19.50.md). There are no new APIs leaving experimental in 1.19.70 but there are a number of new APIs behind experimental.

To use Beta APIs, you need to enable the Beta APIs experimental toggle.

**IMPORTANT BREAKING CHANGE:** The classes Location and BlockLocation no longer exist in the beta script API. All usages of these classes have been changed to use the Vector3 interface (that is, { x: 1, y: 2, z: 3} objects).

**BlockPermutation**

BlockPermutation has been significantly refactored! Every BlockPermutation now share a unique JavaScript handle so exact equality (===) will work for permutations that share exactly the same state values. We've also added utility methods that make interacting with permutations easier, which includes the removal of the XBlockProperty classes and now directly return properties (boolean | number | string) or a while collection of properties ( Record<string, boolean | number | string>).

Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.1.0-beta. Read more about [script versioning](ScriptVersioning.md).

Looking ahead to upcoming releases, we are looking to release our next set of APIs out of experimental, potentially including read-only block and entity APIs.

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).