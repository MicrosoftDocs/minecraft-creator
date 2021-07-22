---
author: v-josjones
ms.author: v-josjones
title: Introduction to MoLang
ms.prod: gaming
---

# Introduction to MoLang

MoLang is a simple expression-based language designed for fast, data-driven calculation of values at run-time, and with a direct connection to in-game values and systems.

### Why Does MoLang Exist?

MoLang's focus is solely to enable script-like capabilities in high-performance systems where languages such as JavaScript are not performant at scale.  We need scripting capabilities in these low-level systems to support end-user modding capabilities, and custom entities, rendering, and animation.

## Lexical Structure

The language structure is largely based on simple 'C' language family style syntax.  A script is made of either one expression for simple math calculations, or can be made of several statements where more complicated code is required.

In simple cases, the terminating `;` is omitted and the expression result is returned.  In complex cases (where there are multiple statements terminated with `;`s, `0.0` is returned unless there is a `return` statement, which will exit the current script scope returning the computed value of that return expression (exactly like C).

> [!NOTE]
> All things in MoLang are **case-INsensitive**, with the exception of strings, which maintain the case provided.

> [!TIP]
> Code examples below are tagged with `C#` to have a similar syntax highlighting as MoLang.

## Keywords

All identifiers not in a scope listed below are reserved for future use.

> [!CAUTION]
> Some operators are under `Experimental MoLang Features` at the moment in the list below. We are hoping people will experiment with them and give us feedback, so we can move them into general usage.

| Keyword| Description |
|:-----------|:-----------|
| `1.23`| Numerical constant value |
| `! && || < <= >= > == !=`| Logical operators |
| `* / + -`| Basic math operators |
| `(` `)`| Parentheses for expression term evaluation control |
| `{` `}`| Braces for execution scope |
| `??`| Null coalescing operator, for handling missing variables or stale actor references |
| `geometry.texture_name`| A reference to a geometry named in the entity definition |
| `material.texture_name`| A reference to a material named in the entity definition |
| `math.function_name`| Various math functions |
| `query.function_name`| Access to an entity's properties |
| `temp.variable_name`| Read/write temporary storage |
| `texture.texture_name`| A reference to a texture named in the entity definition |
| `variable.variable_name`| Read/write storage on an actor |
| `<test> ? <if true> : <if false>`| Trinary conditional operator |
| `<test> ? <if true>`| Binary conditional operator |
| `this`| The current value that this script will ultimately write to (context specific) |
| `return`| For complex expressions, this evaluates the following statement and stops execution of the script, returns the value computed |
| `->`| (EXPERIMENTAL) Arrow operator, for accessing data from a different entity |
| `context.variable_name`| (EXPERIMENTAL) Read-only storage provided by the game in certain scenarios |
| `loop`| (EXPERIMENTAL) For repeating one or more commands 'n' times |
| `for_each`| (EXPERIMENTAL) For iterating over an array of entities |
| `break`| (EXPERIMENTAL) For early exiting a loop/for_each scope |
| `continue`| (EXPERIMENTAL) For skipping the rest of the set of statements of a loop/for_each iteration and moving to the next iteration |
| `[` `]`| Brackets for array access |

## Variables

There are three variable lifetimes a variable may belong to: Temporary, Entity, and Context:

- **Temporary variables** (eg: `temp.moo = 1;`) are read/write and valid for the scope they are defined in, as per C rules.  For performance reasons their lifetime is global to the current script execution and may return a valid value outside of the outermost scope they are defined in for a script.  Be careful in complex scripts.  We will be adding content errors for invalid accesses as soon as possible.
- **Entity variables** (eg: `variable.moo = 1;`) are read/write and store their value on the entity for the lifetime of that entity.  Note that these are currently not saved, so quitting and reloading the world will re-initialize these.  In the same way, if the entity is despawned, any variables on the entity will be lost.
- **Context variables** (eg: `context.moo`) are read-only and valid for the script they are run on.  The game defines these, and details on what variables are in each will be available in the documentation of the area where that MoLang script exists (such as behaviors defining what context variables they expose).

## Public Variables

In general, variables of a mob are considered private to that mob and cannot be accessed by another.  To expose read-only access of a variable to other mobs, you need to set the 'public' setting on that variable in the owning entity's resource definition.  It is also recommended to default-initialize the variable.

### Example

```JSON
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
- Boolean values such as actor flags are converted and stored as a float value of either 0.0 or 1.0 for values of false or true respectively.
- For boolean tests, a float value equivalent to 0.0 is false, and anything not equal to 0.0 is true.
- For array indices, floats are C-style-cast to ints, and clamped at zero for negative values or wrapped by the array size for large values.
- Errors (such as divide by zero, missing variables, null references, etc) generally return a value of 0.0.

MoLang supports the following value types as well:

```C#
Geometry
Texture
Material
Actor Reference
Actor Reference Array
String
Struct
```

> [!TIP]
> See the [Structs](#structs) section below to learn more on how MoLang handles them.

## Query Functions

Query functions (eg: `query.is_baby` or `query.is_item_equipped('main_hand')`) allow scripts to read game data.  If a query function takes no arguments, the parentheses are optional.  For a full list of query functions, click on the hyperlink to view [Query Functions](QueryFunctions.md).

## Aliases

To reduce typing burden and increase clarity when reading and writing MoLang, the following keyword aliases can make life a bit easier.

> [!NOTE]
> Note that left and right sides function identically in the Atlas Map.

### Alias Mapping

| Full Name| Aliased Name |
|:-------|:-------|
| `context.moo`| `c.moo` |
| `query.moo`| `q.moo` |
| `temp.moo`| `t.moo` |
| `variable.moo`| `v.moo` |

### Example of Alias

The following example shows how using aliases will keep the code short while functioning the same way.

```C#
math.cos(query.anim_time * 38) * variable.rotation_scale + variable.x * variable.x * query.life_time;
```

```C#
math.cos(q.anim_time * 38) * v.rotation_scale + v.x * v.x * q.life_time
```

MoLang will also allow you to use either syntax and intermix as desired as shown in this last example below.

```C#
math.cos(q.anim_time * 38) * variable.rotation_scale + v.x * variable.x * query.life_time
```

## Structs

One difference between MoLang and the C style syntax is that structures of data are **implicitly** defined by usage.  Their purpose is to more efficiently pass data around, such as passing `v.location` rather than `v.x`, `v.y`, and `v.z`. An example of this is shown below:

```C#
v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
v.another_mob_set_elsewhere->v.first_mobs_location = v.location;
```

### Examples

For some more usage examples, each of the following scripts return `1.23`

```C#
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; return v.cowcow.friend->v.test.a.b.c;
```

```C#
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test; return v.moo.a.b.c;
```

```C#
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a; return v.moo.b.c;
```

```C#
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a.b; return v.moo.c;
```

```C#
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a.b.c; return v.moo;
```

Note that structures can be arbitrarily deep in their nesting/recursiveness. With that being said, it is recommended that you **do not** copy full structures inside other structures to avoid exploding memory, and not making structures too deep as there is a slight performance cost for each layer.

## Strings

Strings in MoLang are surrounded by single - quotes shown here as `'minecraft:pig'` or `'hello world!'`. An empty string is defined as two back - to - back single quotes shown here as `''`.

String operations only support `= =` and `! =` at this time.

> [!NOTE]
> Strings don't support the ' character as there is no support for escape characters at this time.

## Math Functions

Listed below are the mathematical functions available for use in MoLang.

|Function |Description |
|:--------|:-----------|
| `math.abs(value)`| Absolute value of value |
| `math.acos(value)`| arccos of value |
| `math.asin(value)`| arcsin of value |
| `math.atan(value)`| arctan of value |
| `math.atan2(y, x)`| arctan of y/x.  NOTE: the order of arguments! |
| `math.ceil(value)`| Round value up to nearest integral number |
| `math.clamp(value, min, max)`| Clamp value to between min and max inclusive |
| `math.cos(value)`| Cosine (in degrees) of value |
| `math.die_roll(num, low, high)`| returns the sum of 'num' random numbers, each with a value from low to high. Note: the generated random numbers are not integers like normal dice.  For that, use `math.die_roll_integer`. |
| `math.die_roll_integer(num, low, high)`| returns the sum of 'num' random integer numbers, each with a value from low to high.  Note: the generated random numbers are integers like normal dice. |
| `math.exp(value)`| Calculates e to the value 'th power |
| `math.floor(value)`| Round value down to nearest integral number |
| `math.hermite_blend(value)`| Useful for simple smooth curve interpolation using one of the Hermite Basis functions: `3t^2 - 2t^3`.  Note that while any valid float is a valid input, this function works best in the range [0,1]. |
| `math.lerp(start, end, 0_to_1)`| Lerp from start to end via 0_to_1 |
| `math.lerprotate(start, end, 0_to_1)`| Lerp the shortest direction around a circle from start degrees to end degrees via 0_to_1 |
| `math.ln(value)`| Natural logarithm of value |
| `math.max(A, B)`| Return highest value of A or B |
| `math.min(A, B)`| Return lowest value of A or B |
| `math.mod(value, denominator)`| Return the remainder of value / denominator |
| `math.pi`| Returns the float representation of the constant pi. |
| `math.pow(base, exponent)`| Elevates `base` to the `exponent`'th power |
| `math.random(low, high)`| Random value between low and high inclusive |
| `math.random_integer(low, high)`| Random integer value between low and high inclusive |
| `math.round(value)`| Round value to nearest integral number |
| `math.sin(value)`| Sine (in degrees) of value |
| `math.sqrt(value)`| Square root of value |
| `math.trunc(value)`| Round value towards zero |

## Arrow Operator `->`

Some return values of query function, or values stored in temp/entity/context variables can be a reference to another entity.  The `->` operator allows a script to access variables or run queries on that entity.  For example, the example below will find all pigs within four metres of the current entity(including itself if it's a pig), and increment a variable `v.x` on itself if the block immediately above each pig is flammable (such as an oak button).

> [!CAUTION]
> In the case where the left - hand - side of the `- >` operator has an error(value is null, the entity was killed previously, or some other issue), the expression will not evaluate the right - hand - side and will return 0.
>
> This implementation style was a choice between performance and not requiring content creators to overly worry about checking for potentially bad values everywhere.

### Example

```C#
"v.x = 0;
for_each(v.pig, query.get_nearby_entities(4, 'minecraft:pig'), {
    v.x = v.x + v.pig->query.get_relative_block_state(0, 1, 0, 'flammable');
});
```

## Brace Scope Delimiters `{ }`

One can group a series of statements into a single group by wrapping them in { and } symbols.  This is used primarily in loops and conditional statements:

```C#
(v.moo > 0) ? {
    v.x = math.sin(q.life_time * 45);
    v.x = v.x * v.x + 17.3;
    t.sin_x = math.sin(v.x);
    v.x = t.sin_x * t.sin_x + v.x * v.x;
    v.x = math.sqrt(v.x) * v.x * math.pi;
}
```

## Loop

Sometimes you may want to execute an expression multiple times. Rather than copy-pasting it a bunch, you can use `loop(<count>, <expression>);`. We have placed some arbitrary restrictions on these for safety for now.The maximum loop counter is 1024.

> [!CAUTION]
> Also, note that while you can nest loops inside loops pretty much as deep as you want, be careful you don't make a loop so long it will hang your game.

### Example

The example below showcases how a Fibonacci Calculator can be written in MoLang.

```C#
v.x = 1;
v.y = 1;
loop(10, {
 t.x = v.x + v.y;
 v.x = v.y;
 v.y = t.x;
});
```

## for_each

[`query.get_nearby_entities`](QueryFunctions.md#list-of-entity-queries) returns an array of entities.  In order to iterate through them, you can use the following new built-in function `for_each`.  It takes three parameters: `for_each(<variable>, <array>, <expression>);`  The variable can be any variable, either a `temp.` or `variable.`, although we would recommend using `temp.` to not pollute the entity's variable space.  The expression is any MoLang expression you want to execute for each entry in the array).

## break

This will exit out of a `loop` or `for_each` early.

### Example

```C#
v.x = 1;
v.y = 1;
loop(10, {t.x = v.x + v.y; v.x = v.y; v.y = t.x; (v.y > 20) ? break;});
```

This will immediately exit the inner-most active loop, as per C - style language rules.  If you have:

```C#
v.x = 0;
loop(10, {loop(10, {v.x = v.x + 1; (v.x > 5) ? break;});});
```

The `break` statement will terminate the inner loop when `v.x > 5`, and continue processing the outer loop's script.  Note that as v.x is not reset between the outer loops, the second time into the inner loop this will add one more to `v.x` and then exit the inner loop again, resulting in a final value of `v.x` of `6 + 1 + 1 + 1 + ... + 1` = `15`.)

## continue

`continue` functions as per C-style language rules.  Currently only supported in loops, this will skip to the next iteration of the current loop.  See `break` above for more details on inner/outer loops.

### Example

The following example will result in v.x becoming 6.0, as the increment will be skipped once it reaches that value.  Note that it is better to break out of the loop in this contrived example, as it would be more performant than continuing to perform all 10 iterations.

```C#
v.x = 0;
loop(10, {
 (v.x > 5) ? continue;
 v.x = v.x + 1;
});
```

## Null Coalescing Operator `??`

Similar to how the null-coalescing operator works in C#, you can now reference a variable that may or may not exist without seeing a content error.  If it doesn't, you can now provide a default value to use.  Previously, if a variable didn't exist you would get a content error.  This was to make sure variables were always initialized correctly to avoid uninitialized variable bugs.

Unfortunately this then required initialize scripts, or in some cases some complex work-arounds to make sure variables were initialized.  Now, if you know a variable won't be initialized in the first run of a script, you can use the following:

```C#
variable.x = (variable.x ?? 1.2) + 0.3;
```

This will use the value of `variable.x` if it is valid, or else 1.2 if `variable.x`:

- has not yet been initialized
- is a reference to a deleted entity
- is an invalid reference
- holds an error

Note that the `??` operator will work with `variable.`s, `temp.`s, and `context.`s that hold numbers or entity references, but not resources such as materials, textures, or geometries (as those must exist and be valid else it's a content error).  If the first argument would result in something that can't be resolved, it will return the second argument.

> [!IMPORTANT]
> Reminder: the standing rule of thumb in MoLang is that if something would error or be a bad value, it is converted to 0.0 (and generally throw a content error on screen in non-publish builds.  Note that content errors may prevent uploading content to the marketplace, so please ensure expressions aren't going to do bad things such as dividing by zero).

## Simple vs Complex Expressions

A simple expression is a single statement, the value of which is returned to the system that evaluated the expression. This is showcased in the example below.

```C#
math.sin(query.anim_time * 1.23)
```

A complex expression is one with multiple statements, each ending in a ';'.  Each statement is evaluated in order.  In the current implementation, the last statement requires the use of the return keyword and defines the resulting value of the expression as shown here:

```C#
temp.moo = math.sin(query.anim_time * 1.23);
temp.baa = math.cos(query.life_time + 2.0);
return temp.moo * temp.moo + temp.baa;
```

Note that in a simple expression, `;` is not allowed, whereas in a complex expression, each statement requires a `;` including the last.  Also, note that if you don't `return` a value from a complex expression, the expression will evaluate to 0.0.
