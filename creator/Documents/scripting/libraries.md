---
author: chipotle
ms.author: mikeam
title: Open-Source Scripting Libraries
description: "A guide to the currently available scripting libraries for Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
ms.date: 12/03/2025
---

# Open Source Scripting Libraries

Mojang provides a number of open source scripting libraries for you to use in your own projects. There are two kinds available:

- TypeScript/JavaScript libraries that can be included in your add-ons
- Development tools

Since the libraries are open source, you can contribute fixes and enhancements, and even submit your own libraries for possible inclusion!

> [!NOTE]
> If you want to contribute to the scripting libraries, be sure to look at our [Contributing Guide](https://github.com/Mojang/minecraft-scripting-libraries/blob/main/CONTRIBUTING.md).

## Libraries

The two main libraries below, [`math`](#math) and [`gameplay-utilities`](#gameplay-utilities), have their source code hosted on GitHub in the [`minecraft-scripting-libraries`](https://github.com/Mojang/minecraft-scripting-libraries) repository.

### Math

The [math library](https://www.npmjs.com/package/@minecraft/math) provides a set of vector math operations, including addition, subtraction, scaling, distance computation, and more. The `Vector3Utils` module offers a functional style of operations (e.g., `Vector3Utils.add(vectorA, vectorB)`), while the `Vector3Builder` module offers an objected-oriented style using the builder pattern (e.g., `vectorA.add(vectorB)`, directly modifying `vectorA`). There's no computational difference between the two styles&mdash;the builder pattern is just a wrapper around the functional operations.

> [!TIP]
> While the examples focus on 3-D vector types (`Vector3`), the libraries also contain operations for 2-D XY vector types (`Vector2`) and 2-D XZ vector types (`VectorXZ`). Import the modules `Vector2Utils` and `VectorXZUtils` for functional operations, and `Vector2Builder` and `VectorXZBuilder` for the object-oriented builder wrappers. The method names and parameters are otherwise the same.

#### Functional style example

```typescript
import { Vector3, world } from '@minecraft/server';
import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';
import { Vector3Utils } from '@minecraft/math';

const vectorA: Vector3 = {x: 1, y: 2, z:3};
const vectorB: Vector3 = {x: 4, y: 5, z:6};

const resultAdd = Vector3Utils.add(vectorA, vectorB); // {x:5, y:7, z:9}
const resultSubtract = Vector3Utils.subtract(vectorA, vectorB); // {x:-3, y:-3, z:-3}
const resultAdd = Vector3Utils.cross(vectorA, vectorB); // {x:-3, y:6, z:-3}

console.log(toString(vectorA)); // Prints out "1, 2, 3"

// Use your vectors with any @minecraft/server API
const = dimension = world.getDimension(MinecraftDimensionTypes.Overworld);
dimension.spawnParticle("minecraft:colored_flame_particle", resultAdd);
```

#### Builder style example

```typescript
import { Vector3, world } from '@minecraft/server';
import { Vector3Builder } from '@minecraft/math';
import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';

const vectorA: Vector3Builder = new Vector3Builder({x: 1, y: 2, z:3});
const vectorB: Vector3 = {x: 4, y: 5, z:6};
const vectorC: Vector3 = {x: 1, y: 3, z:5};

// Mutates vectorA directly each time
vectorA.add(vectorB).subtract(vectorC).cross(vectorB); // Final result {x:4, y:-8, z:4}

console.log(vectorA.toString()); // Prints out "4, -8, 4"

// Vector3Builder type can directly be used in APIs that accept Vector3
const dimension = world.getDimension(MinecraftDimensionTypes.Overworld);
dimension.spawnParticle("minecraft:colored_flame_particle", vectorA);
```

#### Available methods

`v`, `v1`, and `v2` are always a type of `Vector3`, `Vector2`, or `VectorXZ` depending on the imported module, and the return value matches the input. These methods are given in the functional form; the wrapper form applies the second parameter to the first, e.g., `v1.equals(v2)`, `v1.scale(scalar)`.

| Method                | Returns | Function                                                               |
|-----------------------|---------|------------------------------------------------------------------------|
| equals(v1, v2)        | boolean | Check equality                                                         |
| add(v1, v2)           | vector  | Add two vectors                                                        |
| subtract(v1, v2)      | vector  | Subtract v2 from v1                                                    |
| scale(v1, scalar)     | vector  | Multiply all entries in a vector by a single scalar value              |
| dot(v1, v2)           | number  | Calculate the dot product of two vectors                               |
| cross(v1, v2)         | vector  | Calculate the cross product of two vectors                             |
| magnitude(v1)         | number  | Return the magnitude of a vector                                       |
| distance(v1, v2)      | number  | Calculate the distance between two vectors                             |
| normalize(v)          | vector  | Normalizes a vector to a unit vector                                   |
| floor(v)              | vector  | Floor the components of a vector                                       |
| clamp(v, {min, max})  | vector  | Clamps the components of a vector to min/max limits                    |
| lerp(v1, v2, number)  | vector  | Uses linear interpolation on each component from two vectors           |
| slerp(v1, v2, number) | vector  | Uses spherical linear interpolation on each component from two vectors |
| multiply(v1, v2)      | vector  | Element-wise multiplication of two vectors                             |
| rotateX(v, radians)   | vector  | Rotates the vector around the x axis counterclockwise (left-hand rule) |
| rotateY(v, radians)   | vector  | Rotates the vector around the y axis counterclockwise (left-hand rule) |
| rotateZ(v, radians)   | vector  | Rotates the vector around the z axis counterclockwise (left-hand rule) |
| toString(v, options)  | string  | Create a string representation of a vector. See below for options      |
| fromString(v, delim)  | vector  | Create a vector from a `toString()` string representation              |

- `toString(vector: vector, options?: { decimals?: number, delimiter?: string })`optionally takes a key/value object of options:
  - `decimals` is the precision level: how many digits to keep after the decimal point. The default is 2 (e.g., `1.23`).
  - `delimiter` is the delimiter to use between vector coordinators. The default is a comma (`,`).
- `fromString(str: string, delimiter?: string)` _optionally_ specifies the delimiter used in the string representation of the vector; the default is a comma (`,`). This method expects the string parameter to be formatted the way a return value from `toString()` is formatted; if the string cannot be parsed, the method returns `undefined`.

### Gameplay utilities

The `gameplay-utilities` library allows your add-on code to handle Minecraft event signals using [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It provides a new function, `nextEvent()`, which wraps a promise around an event signal, and returns a new type, `EventPromise`. When the event is raised, the promise resolves with the event data and unsubscribes from the event signal.

```javascript
import { EventPromise, nextEvent } from "@minecraft/gameplay-utilities";

// handle buttonPush event through async/await
await function handleButton() {
  let buttonPushEvent = await nextEvent(world.afterEvents.buttonPush);
  let eventLoc = await buttonPushEvent.block.location;
  log("Button pushed");
}

// handle leverAction event as promise
await nextEvent(world.afterEvents.leverAction).then(
  (event) => {
    // do something with the event
  }).finally(() => {
    // something else to do
  });

// You can optionally provide filters for the signal and
// use a helper function.
const creeperDeathEvent = await nextEvent(
  world.afterEvents.entityDie, { entityTypes: ['minecraft:creeper'] }
);
```

### Script API libraries

Other open source libraries from Mojang provide APIs for Minecraft scripting. Check out [Script API Reference Documentation](../../ScriptAPI/index.yml) for more details.

## Development tools

### Core build tasks

The [core build tasks library](https://www.npmjs.com/package/@minecraft/core-build-tasks) contains common build tasks used in the `minecraft-scripting-libraries` build, but it can be used in other repositories as well. The tasks are designed for use with the [`just`](https://github.com/microsoft/just) task runner, which is integrated into all Minecraft starter kits and libraries. When a task is used by `just` in more than one package, it's moved into `core-build-tasks` to reduce duplication.

>[!Note]
> This subdirectory only runs the `build` step (specifically, `tsc`), as this package itself defines build tasks and must be kept lightweight.

#### Available tasks

There are several "group" tasks which run individual smaller tasks in order to perform one common multi-step operation. You'll most likely use those regularly:

- **lint**: runs the `verify-lint` task, and, if it succeeds, the `eslint` task.
- **build**: runs the `typescript` task followed by the `bundle` task.
- **clean**: runs both the `clean-local` and the `clean-collateral` tasks.
- **local-deploy**: runs build and deployment tasks in one action for testing your development add-ons. This runs `build` and `package`, so it steps through, in order, `typescript`, `bundle`, `clean-collateral`, and finally `copyArtifacts`.
- **mcaddon**: runs all the tasks necessary to create an **.mcaddon** file: first `build`, then `createMcaddonFile`.

Here are the smaller tasks used by the tasks above, which can be executed on their own:

- **verify-lint**: verify that the working directory has an `eslint` configuration file. (See [Linting](#linting), below.)
- **eslint**: run `eslint` in the working directory. (See [Linting](#linting), below.)
- **prettier-fix**: run `prettier` in the working directory, with the option to automatically fix errors when possible enabled.
- **prettier-check**: run `prettier` in the working directory, checking formatting only.
- **typescript**: runs `tsc`, the TypeScript compiler, in the working directory.
- **bundle**: runs [`esbuild`](https://esbuild.github.io/) with the `--bundle` option in the working directory.
- **clean-local**: cleans build artifacts in the local `temp`, `lib`, and `dist` subdirectories.
- **clean-collateral**: cleans the project's output directory.
- **copyArtifacts**: copies resource and behavior packs to the local game development folder. (This requires the `build` task to have been run first.)
- **package**: runs both the `clean-collateral` and the `copyArtifacts` tasks.
- **packBP**: creates an **.mcpack** file with your behavior packs. (Requires the `build` task to have been run first.)
- **packRP**: creates an **.mcpack** file with your resource packs. (Requires the `build` task to have been run first.)
- **packMcaddon**: creates an **.mcaddon** file with the packs previously created in `packBP` and `packRP`.
- **createMcaddonFile**: runs `packBP`, `packRP`, and `packMcaddon` in order.

### Linting

The [linting library plugin](https://www.npmjs.com/package/eslint-plugin-minecraft-linting) selects a set of [ESLint rules](https://eslint.org/) considered best practices for Minecraft scripts. The rules include suggestions for formatting and naming conventions, points to specific APIs, and callouts for antipatterns to help you avoid pitfalls.

To use the plugin:

- add `eslint-plugin-minecraft-linting` to `devDependencies` in your **package.json** file.
- specify it as a plugin in your **eslint.config.mjs** file, e.g.:

```javascript
import minecraftLinting from "eslint-plugin-minecraft-linting";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
export default [
  {
    files: ["scripts/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
    },
    plugins: {
      ts,
      "minecraft-linting": minecraftLinting,
    },
    rules: {
      "minecraft-linting/avoid-unnecessary-command": "error",
    },
  },
];
```

To author a new rule, add a file under **src/rules** named after the rule. Rules are authored via the `ESLintUtils` rule creator; more information on rule creation can be found in [TypeScript-ESLint's Custom Rules documentation](https://typescript-eslint.io/developers/custom-rules).

Once you have a new rule, update **src/index.ts** and add it to the exported **rules** key in the module exports. Then, update the default `eslint` configuration as to whether the new rule is an error or a warning.
