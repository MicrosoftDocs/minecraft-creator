---
author: JimSeaman42
ms.author: mikeam
title: Open-Source Scripting Libraries
description: "A guide to the currently available scripting libraries for Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Open-Source Scripting Libraries

Mojang provides a number of open-source scripting libraries, which allow you to see all of the changes and behind-the-scenes code. Some libraries can be used in your Minecraft projects, while others are helper tools and build scripts. Additionally, since the libraries are open-source you can contribute fixes and even submit your own libraries! For more information, please be sure to look at our [Contributing Guide](https://github.com/Mojang/minecraft-scripting-libraries/blob/main/CONTRIBUTING.md). Now that you're familiar with the concept, let's take a look at the libraries:

## Math

The [math library](https://www.npmjs.com/package/@minecraft/math) contains a set of utility functions and a wrapper class for common Vector operations. Two patterns are supported; a more computational approach operating on the Vector3 interface with no mutation, and a separate wrapper object-oriented approach following a "builder" pattern. The choice of pattern is based on your preference; behind the scenes, the same helpers are used.

## Core Build Tasks

The [core build tasks library](https://www.npmjs.com/package/@minecraft/core-build-tasks) contains common build tasks used in the minecraft-scripting-libraries build, but can be used in other repositories as well. If a task is used by the 'just' build infrastructure in multiple packages, it is moved into this package to reduce duplication.

>[!Note]
> This subdirectory only runs the 'build' step - specifically, 'tsc' - since this package itself defines build tasks and must be kept lightweight.

## Linting

The [linting library](https://www.npmjs.com/package/eslint-plugin-minecraft-linting) contains best practices for authoring Minecraft script. Rules may include suggestions, such as "Use this API instead of this command!", or errors against anti-patterns to avoid pitfalls.

To author a new rule, add a file under 'src/rules' named after the rule. Rules are authored via the 'ESLintUtils' rule creator; more information on rule creation can be found [here](https://typescript-eslint.io/custom-rules#utils-package).

Once you have a new rule, update 'src/index.ts' and add it to the exported 'rules' key in the module exports and update the default 'eslint' configuration as to whether the new rule is an error or a warning.
