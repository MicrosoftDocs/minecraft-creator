---
author: chipotle
ms.author: mikeam
title: Molang Syntax Guide
description: "A reference document covering Molang syntax, concepts, and functions."
ms.service: minecraft-bedrock-edition
ms.date: 08/13/2025
---

# Molang Syntax Guide

> [!NOTE]
> If you haven't read [An Introduction to Molang](./introduction.md), start there first!

Molang is a simple expression language designed to be embedded in Minecraft JSON files. It provides fast, data-driven calculation of values at runtime, with a direct connection to in-game values and systems.  Molang enables low-level systems like animation to support flexible data-driven behavior with high performance.

## Syntax

Molang uses a simple, C-like syntax. An expression can be formed from a simple value, a math calculation or query function, or a series of sub-expressions to allow for more complicated code.

Like C, Molang statements terminate with a semicolon (`;`), but in simple cases, the terminating `;` should be omitted, and the result of the single expression is directly returned.

```text
math.sin(query.anim_time * 1.23)
```

Here's an example of a simple Molang expression used in a condition from the [Block States and Permutations](../../Reference/Content/BlockReference/Examples/BlockStatesAndPermutations.md) article:

```json
{
  "condition": "query.block_state('custom:is_lit') == true",
  "components": {
    "minecraft:light_emission": 15
  }
}
```

For more complex cases with multiple statements, each statement requires the terminating `;`. The last statement in a complex set of subexpressions should be a `return` statement that returns the final value to evaluate.

```text
temp.moo = math.sin(query.anim_time * 1.23);
temp.baa = math.cos(query.life_time + 2.0);
return temp.moo * temp.moo + temp.baa;
```

If you leave off the `return` statement, the return value will be `0.0`, which probably isn't what you want!

> [!NOTE]
> All things in Molang are **case-insensitive**, with the exception of strings, which maintain the case provided.

## Keywords

All identifiers not in a scope listed below are reserved for future use.

> [!CAUTION]
> Some operators are under `Experimental Molang Features` at the moment in the list below. We are hoping people will experiment with them and give us feedback, so we can move them into general usage.

| Keyword| Description |
|:-----------|:-----------|
| `1.23`| Numerical constant value |
| `! || && < <= >= > == !=` | Logical operators |
| `* / + -`| Basic math operators |
| `(` `)`| Parentheses for expression term evaluation control |
| `{` `}`| Braces for execution scope |
| `??`| Null coalescing operator, for handling missing variables or stale actor references |
| `geometry.texture_name`| A reference to a geometry named in the entity definition |
| `material.texture_name`| A reference to a material named in the entity definition |
| `texture.texture_name`| A reference to a texture named in the entity definition |
| `math.function_name`| Various math functions |
| `query.function_name`| Access to an entity's properties |
| `temp.variable_name`| Read/write temporary storage |
| `texture.texture_name`| A reference to a texture named in the entity definition |
| `variable.variable_name`| Read/write storage on an actor |
| `temp.variable_name`| Read/write temporary storage |
| `context.variable_name`| Read-only storage provided by the game in certain scenarios |
| `<test> ? <if true> : <if false>`| Ternary conditional operator. _Nested ternary expressions without parentheses were incorrectly parsed before version 1.18.20._ |
| `<test> ? <if true>`| Binary conditional operator |
| `this`| The current value that this expression will ultimately write to (context specific) |
| `return`| For complex expressions, this evaluates the following statement and stops execution of the expression, returns the value computed |
| `->`| Arrow operator, for accessing data from a different entity |
| `context.variable_name`| Read-only storage provided by the game in certain scenarios |
| `loop`| For repeating one or more commands 'n' times |
| `for_each`| For iterating over an array of entities |
| `break`| For early exiting a loop/for_each scope |
| `continue`| For skipping the rest of the set of statements of a loop/for_each iteration and moving to the next iteration |
| `[` `]`| Brackets for array access |

## Variables

There are three "lifetimes" a variable may have:

- **Temporary variables** (e.g. `temp.moo = 1;`) are valid for the scope they are defined in, as per C rules.  For performance reasons their lifetime is global to the current expression execution and may return a valid value outside of the outermost scope they are defined in for a expression.  Be careful in complex expressions.  We will be adding content errors for invalid accesses as soon as possible.
- **Entity variables** (e.g. `variable.moo = 1;`) store their value on the entity for the lifetime of that entity.  Note that these are currently not saved, so quitting and reloading the world will re-initialize these.  In the same way, if the entity is despawned, any variables on the entity will be lost.
- **Context variables** (e.g. `context.moo`) are _read-only,_ defined by Minecraft itself rather than your code, and valid for the expression they are run on.  Details on what variables are in each will be available in the documentation of the area where that Molang expression exists (such as behaviors defining what context variables they expose).

## Public variables

In general, variables of a mob are considered private to that mob and cannot be accessed by another.  To expose read-only access of a variable to other mobs, you need to set the 'public' setting on that variable in the owning entity's resource definition.  It is also recommended to default-initialize the variable.

### Example

```json
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      "scripts": {
        "variables": {
          "variable.oink": "public"
        },
        "initialize": [
          "variable.oink = 0;"
        ],
      },
    }
  }
}

```

## Values

- All numerical values are floats.
- Boolean values such as actor flags are converted and stored as a float value of either `0.0` or `1.0` for values of false or true respectively.
- For boolean tests, a float value equivalent to `0.0` is false, and anything not equal to `0.0` is true.
- For array indexes, floats are C-style-cast to integers, and clamped at `0` for negative values or wrapped by the array size for large values.
- Errors (such as divide by zero, missing variables, null references, etc) generally return a value of `0.0`.

Molang supports the following value types as well:

- Geometry
- Texture
- Material
- Actor Reference
- Actor Reference Array
- String
- [Struct](#structs)

## Query functions

Query functions (such as `query.is_baby` or `query.is_item_equipped('main_hand')`) allow expressions to read game data.  If a query function takes no arguments, do not use parentheses. Otherwise, use parentheses and separate arguments with commas. For a full list of query functions, read the [Query Functions](../../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions.md) article.

## Aliases

To reduce typing burden and increase clarity when reading and writing Molang, the following keyword aliases can make life a bit easier.

> [!NOTE]
> Note that left and right sides function identically in the Alias Map.

### Alias mapping

| Full Name| Aliased Name |
|:-------|:-------|
| `context.moo`| `c.moo` |
| `query.moo`| `q.moo` |
| `temp.moo`| `t.moo` |
| `variable.moo`| `v.moo` |

### Example of Alias

The following example shows how using aliases will keep the code short while functioning the same way.

```text
math.cos(query.anim_time * 38) * variable.rotation_scale + variable.x * variable.x * query.life_time;
```

```text
math.cos(q.anim_time * 38) * v.rotation_scale + v.x * v.x * q.life_time
```

Molang will also allow you to use either syntax and intermix as desired as shown in this last example below.

```text
math.cos(q.anim_time * 38) * variable.rotation_scale + v.x * variable.x * query.life_time
```

## Structs

One difference between Molang and the C style syntax is that structures of data are **implicitly** defined by usage.  Their purpose is to more efficiently pass data around, such as passing `v.location` rather than `v.x`, `v.y`, and `v.z`. An example of this is shown below:

```text
v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
v.another_mobs_location = v.another_mob_set_elsewhere->v.location;
```

For some more usage examples, each of the following expressions return `1.23`:

```text
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; return v.cowcow.friend->v.test.a.b.c;
```

```text
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test; return v.moo.a.b.c;
```

```text
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a; return v.moo.b.c;
```

```text
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a.b; return v.moo.c;
```

```text
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a.b.c; return v.moo;
```

Note that structures can be arbitrarily deep in their nesting/recursiveness. With that being said, it is recommended that you **do not** copy full structures inside other structures to avoid exploding memory, and not making structures too deep as there is a slight performance cost for each layer.

## Strings

Strings in Molang are surrounded by single quotes, such as `'minecraft:pig'` or `'hello world!'`. An empty string is defined as two consecutive single quotes shown here as `''`.

String operations only support `==` and `!=` at this time.

> [!NOTE]
> Strings cannot contain the `'` character, as there is no support for escape characters at this time.

## Math Functions

Molang has a rich set of math functions, modeled on the C math library.

|Function |Description |
|:--------|:-----------|
| `math.abs(value)`| Absolute value of `value` |
| `math.acos(value)`| arccos of `value` |
| `math.asin(value)`| arcsin of `value` |
| `math.atan(value)`| arctan of `value` |
| `math.atan2(y, x)`| arctan of `y` / `x`. _Note the order of arguments!_ |
| `math.ceil(value)`| Round `value` up to nearest integral number |
| `math.clamp(value, min, max)`| Clamp `value` to between min and max inclusive |
| `math.copy_sign(x, y)` | Compose a floating-point value with the magnitude of `x` and the sign of `y`. |
| `math.cos(value)`| Cosine (in degrees) of `value` |
| `math.die_roll(num, low, high)`| returns the sum of 'num' random floating point numbers, each with a value from low to high |
| `math.die_roll_integer(num, low, high)`| returns the sum of 'num' random integer numbers, each with a value from low to high |
| `math.exp(value)`| Returns _e_ raised to the `value` power |
| `math.floor(value)`| Round `value` down to nearest integral number |
| `math.hermite_blend(value)` | Interpolate points on a smooth curve using one of the Hermite Basis functions: `3t^2 - 2t^3`. While any valid float is a valid input, this function works best in the range `[0, 1]`. |
| `math.lerp(a, b, t)`| Computes the linear interpolation between `a` and `b` with interpolation weighting factor `t` in the range `[0, 1]`, where `0 = a` and `1 = b` |
| `math.lerprotate(a, b, t)` | Computes a linear interpolation around a circle in the shortest direction from `a` degrees to `b` degrees with interpolation weighting factor `t` (see `math.lerp`) |
| `math.ln(value)`| Natural logarithm of `value` |
| `math.max(a, b)`| Return highest value of `a` or `b` |
| `math.min(a, b)`| Return lowest value of `a` or `b` |
| `math.min_angle(value)` | Minimize angle magnitude (in degrees) into the range [-180, 180) |
| `math.mod(value, denominator)`| Return the remainder of `value` / `denominator` |
| `math.pi`| Returns the float representation of the constant pi. |
| `math.pow(base, exponent)`| Elevates `base` to the `exponent` power |
| `math.random(low, high)`| Random value between `low` and `high` inclusive |
| `math.random_integer(low, high)`| Random integer value between `low` and `high` inclusive |
| `math.round(value)`| Round `value` to nearest integral number |
| `math.sign(value)` | Return `-1.0` if `value` is less than `0.0`; otherwise, return `1.0` |
| `math.sin(value)`| Sine (in degrees) of `value` |
| `math.sqrt(value)`| Square root of `value` |
| `math.trunc(value)`| Round `value` towards zero |

Notes:

1. The difference between `math.die_roll` and `math.die_roll_integer` is that the former uses floating point and can return non-integer numbers; the latter works only with integers. If you're really trying to simulate actual dice, use `math.die_roll_integer`.

## Brace scope delimiters

You can group a series of statements into a single group by wrapping them in `{` and `}` symbols.  This is used primarily in loops and conditional statements:

```text
(v.moo > 0) ? {
    v.x = math.sin(q.life_time * 45);
    v.x = v.x * v.x + 17.3;
    t.sin_x = math.sin(v.x);
    v.x = t.sin_x * t.sin_x + v.x * v.x;
    v.x = math.sqrt(v.x) * v.x * math.pi;
}
```

## Conditionals

The conditional `?` operator allows for two convenient ways to implement simple branching logic.

- The first way is to use `?` by itself to conditionally execute part of an expression: `A ? B`.  In this case, `B` will only be executed if `A` evaluates to `true`. Think of this as a shorthand for "if A, then B".
- The second way is to use `?` with a `:` as a conditional ternary: `A ? B : C`. In this case, if `A` evaluates to `true`, then `B` is returned; otherwise `C` is returned. Think of this as a shorthand for "if A, then B, else C".

> [!WARNING]
> Nested ternary expressions without parentheses were incorrectly parsed before version 1.18.20. See [versioned changes](#versioned-changes).

Here are some examples of conditionals in use:

```text
v.should_reset_a ? { v.a = 0; }
v.larger_value = (v.a > v.b) ? v.a : v.b;
```

## Loop

Sometimes you want to execute an expression multiple times. Rather than copy-pasting it a bunch, you can use `loop(<count>, <expression>);`.

> [!CAUTION]
> The maximum loop counter is 1024 for safety reasons. While you can nest loops inside loops pretty much as deep as you want, be careful you don't make a loop so long it will hang your game!

The example below showcases how a Fibonacci Calculator can be written in Molang:

```text
v.x = 1;
v.y = 1;
loop(10, {
 t.x = v.x + v.y;
 v.x = v.y;
 v.y = t.x;
});
```

### break

This will exit out of a `loop` or `for_each` early.

```text
v.x = 1;
v.y = 1;
loop(10, {t.x = v.x + v.y; v.x = v.y; v.y = t.x; (v.y > 20) ? break;});
```

If there are multiple loops, `break` exits the innermost active loop:

```text
v.x = 0;
loop(10, {loop(10, {v.x = v.x + 1; (v.x > 5) ? break;});});
```

The `break` statement will terminate the inner loop when `v.x > 5`, and continue processing the outer loop's expression.  Since `v.x` is not reset between the outer loops, the second time through the inner loop this will add one more to `v.x` and then exit the inner loop again, resulting in a final value of `v.x` of `6 + 1 + 1 + 1 + ... + 1` = `15`.)

### continue

The `continue` statement immediately skips to the next iteration of the loop. It's currently supported in `loop` and `for_each`; see `break` above for details on behavior with nested loops.

The following results in `v.x` becoming `6.0`, as the increment will be skipped once it reaches that value.  (Note that it is better to break out of the loop in this contrived example, rather than performing all 10 iterations.)

```text
v.x = 0;
loop(10, {
 (v.x > 5) ? continue;
 v.x = v.x + 1;
});
```

## Null-coalescing operator

Normally, if your Molang expression references a variable that hasn't been defined yet, your code will stop with a content error. The null-coalescing operator, `??`, lets you work with variables that might not have been set yet by providing a default value to use when the variable hasn't been initialized.

```text
variable.x = (variable.y ?? 1.2) + 0.3;
```

If `variable.y` has a value, this expression will set `variable.x` to `variable.y + 0.3`. However, if `variable.y` hasn't been initialized or is otherwise invalid or unresolvable (for instance, it's a reference to a deleted entity), the expression will use `1.2` in place of it, and evaluate to `1.2 + 0.3`. In other words, `a ?? b` will return `a` if it can be resolved to a value; otherwise, it will return `b`.

The `??` operator will work with variables (`variable.*`, `temp.*`, and `context.*`) that hold number or entity references, but _not_ resources such as materials, textures, or geometries: those must exist and be valid, or a content error will be generated.

> [!IMPORTANT]
> The standing rule of thumb in Molang is that if something would error or be a bad value, it is converted to `0.0`, and generally throws a content error on screen in non-published builds.  Content errors may prevent uploading content to the Marketplace, so please ensure expressions aren't going to do bad things such as dividing by zero!

## Versioned changes

Molang uses the `"min_engine_version"` from the **manifest.json** of the resource or behavior pack that contains each Molang expression to determine which version of the rules to apply. This allows for changes to how Molang works without breaking existing content. Molang change versions apply to each expression separately, so it's possible to have different versions active if multiple packs are loaded.

> [!TIP]
> To know which versioned changes are in effect, look at the `"min_engine_version"` of the **manifest.json** of the resource or behavior pack that contains your Molang expression. Any versioned change with a version less than or equal to that version number will be in effect.

This is a list of the versioned changes that have been added, along with the corresponding game version.

| Pack min_engine_version| Description |
|:---|:---|
| 1.17.0| Initial support for Versioned Changes added. (Not actually a Versioned Change) |
| 1.17.30| Fixed query.item_remaining_use_duration conversion from ticks to seconds (multiplied by 20 instead of dividing). Also fixed normalization logic in that query to go from 1 to 0 instead of 0 to 1. |
| 1.17.40| Added new error messages for invalid expressions which previously ran with unexpected results. For example "'text' + 1" will now cause a content error. |
| 1.17.40| Added error detection for too many operators in parentheses or brackets, such as '1+(2 3)'. Also added more explicit error detection for when an unknown token is encountered. |
| 1.18.10| Fixed conditional (ternary) operator associativity. Previously nested conditional expressions like `A ? B : C ? D : E` would evaluate as `(A ? B : C) ? D : E`. Now they evaluate as `A ? B : (C ? D : E)`. |
| 1.18.20 | Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators.|
| 1.19.60| Fixed error where dividing by a dynamically determined negative variable resulted in a division by the absolute (positive) value of the number instead. |
| 1.20.0| Fixed query.cape_flap_amount using the wrong player rotation (head rotation instead of body rotation). |
| 1.20.10| Renamed `block_property` and `has_block_property` to `block_state` and `has_block_state` post this version. |
| 1.20.40| Deprecated `block_property` and `has_block_property` |
| 1.20.50| `block_property` is no longer supported, as that logic is done in the animation. Additionally, `is_scenting` `is_rising` and `is_feelingHappy` queries are no longer available;  `timer_flag_1`, `timer_flag_2`, and `timer_flag_3` can be used instead. |
| 1.20.70| Queries surface_particle_texture_size, surface_particle_texture_coordinate, and surface_particle_texture_size now register leaf blocks as supporting for step particles|
