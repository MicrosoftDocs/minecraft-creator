<big>Version: 1.18.10.3</big>

[[_TOC_]]

# Why Does Molang Exist?

Molang is a simple expression-based language designed for fast, data-driven calculation of values at run-time, and with a direct connection to in-game values and systems.  Its focus is to enable low-level systems like animation to support flexible data-driven behavior for both internal and external creators, while staying highly performant.



# Lexical Structure

The language structure is largely based on simple 'C' language family style syntax.  An expression can be made of either one simple value or math calculation, or can be made of several sub-expressions where more complicated code is required.

 In simple cases, the terminating `;` is omitted and the expression result is returned. 
 In complex cases, multiple sub-expressions are each terminated with a semicolon `;`.  Complex expressions evaluate to `0.0` unless there is a `return` statement, in which case the evaluated value of the `return`'s sub-expression will be returned out of the current scope.



## Case Sensitivity

All things in Molang are case-INsensitive, with the exception of strings, which maintain the case provided.



## Keywords

All identifiers not in a scope listed below are reserved for future use

| Keyword| Description |
|:-----------:|:-----------:|
| `1.23`| Numerical constant value |
| `! && || < <= >= > == !=`| Logical operators |
| `* / + -`| Basic math operators |
| `(` `)`| Parentheses for expression term evaluation control |
| `{` `}`| Braces for execution scope |
| `??`| Null coalescing operator, for handling missing variables or stale actor references |
| `geometry.texture_name`| A reference to a geometry named in the entity definition |
| `material.texture_name`| A reference to a material named in the entity definition |
| `texture.texture_name`| A reference to a texture named in the entity definition |
| `math.function_name`| Various math functions |
| `query.function_name`| Access to an entity's properties |
| `variable.variable_name`| Read/write storage on an actor |
| `temp.variable_name`| Read/write temporary storage |
| `context.variable_name`| Read-only storage provided by the game in certain scenarios |
| `<test> ? <if true>`| Binary conditional operator |
| `<test> ? <if true> : <if false>`| Ternary conditional operator - NOTE: Nested ternary expressions without parentheses were incorrectly parsed before a Versioned Change was made to fix it (see 'Versioned Changes' below) |
| `this`| The current value that this expression will ultimately write to (context specific) |
| `return`| For complex expressions, this evaluates the following statement and stops execution of the expression, returns the value computed |
| `->`| Arrow operator, for accessing data from a different entity |
| `loop`| For repeating one or more commands 'n' times |
| `for_each`| For iterating over an array of entities |
| `break`| For early exiting a loop/for_each scope |
| `continue`| For skipping the rest of the set of statements of a loop/for_each iteration and moving to the next iteration |
| `[` `]`| Brackets for array access |




## Variables

There are three variable lifetimes a variable may belong to: Temporary, Entity, and Context:
- Temporary variables (eg: `temp.moo = 1;`) are read/write and valid for the scope they are defined in, as per C rules.  For performance reasons their lifetime is global to the current expression execution and may return a valid value outside of the outermost scope they are defined in for an expression.  Be careful in complex expressions.  We will be adding content errors for invalid accesses as soon as possible.
- Entity variables (eg: `variable.moo = 1;`) are read/write and store their value on the entity for the lifetime of that entity.  Note that these are currently not saved, so quitting and reloading the world will re-initialize these.  In the same way, if the entity is despawned, any variables on the entity will be lost.
- Context variables (eg: `context.moo`) are read-only and specified by the game in certain situations. Details on what variables are specified and when will be available in the documentation of the area where that Molang expression is used (such as behaviors defining what context variables they expose).



## Values




- All numerical values are floats.
- Boolean values such as actor flags are converted and stored as a float value of either 0.0 or 1.0 for values of false or true respectively.
- For boolean tests, a float value equivalent to 0.0 is false, and anything not equal to 0.0 is true.
- For array indices, floats are C-style-cast to ints, and clamped at zero for negative values or wrapped by the array size for large values.
- Other supported types are:


****
```
Geometry
Texture
Material
Actor Reference
Actor Reference Array
String
Struct (see 'structs' section below)
```



- Errors (such as divide by zero, missing variables, null references, etc) generally return a value of 0.0.




## Query Functions

Query functions (eg: `query.is_baby` or `query.is_item_equipped('main_hand')`) allow expressions to read game data.  If a query function takes no arguments, do not use parentheses. Otherwise, use parentheses and separate arguments with commas. For a full list of query functions, see below.



## Aliases

To reduce typing burden and increase clarity when reading and writing Molang, the following keyword aliases can make life a bit easier.  Note that left and right sides function identically.




**Alias Mapping**

| Full Name| Aliased Name |
|:-----------:|:-----------:|
| `context.moo`| `c.moo` |
| `query.moo`| `q.moo` |
| `temp.moo`| `t.moo` |
| `variable.moo`| `v.moo` |




As an example...

****
```
math.cos(query.anim_time * 38) * variable.rotation_scale + variable.x * variable.x * query.life_time;
```



...can also be written as:

****
```
math.cos(q.anim_time * 38) * v.rotation_scale + v.x * v.x * q.life_time
```



Either syntax will work, and can be intermixed as desired. eg:

****
```
math.cos(q.anim_time * 38) * variable.rotation_scale + v.x * variable.x * query.life_time
```



## Structs

Structures of data, unlike C, are implicitly defined by usage.  Their purpose is to more efficiently pass data around, such as passing `v.location` rather than `v.x`, `v.y`, and `v.z`.  eg:

****
```
v.location.x = 1;
v.location.y = 2;
v.location.z = 3;
v.another_mobs_location = v.another_mob_set_elsewhere->v.location;
```



For some more usage examples, each of the following expressions return 1.23

****
```
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; return v.cowcow.friend->v.test.a.b.c;
```

****
```
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test; return v.moo.a.b.c;
```

****
```
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a; return v.moo.b.c;
```

****
```
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a.b; return v.moo.c;
```

****
```
v.cowcow.friend = v.pigpig; v.pigpig->v.test.a.b.c = 1.23; v.moo = v.cowcow.friend->v.test.a.b.c; return v.moo;
```



Note that structures can be arbitrarily deep in their nesting/recursiveness.  That said, it is recommended that you don't copy full structures inside other structures to avoid exploding memory, and not making structures too deep as there is a slight performance cost for each layer.



## Strings

Strings in Molang are surrounded by single quotes, eg: `'minecraft:pig'` or `'hello world!'`. An empty string is defined as two consecutive single quotes.  String operations only support `==` and `!=` at this time.
Note: strings don't support the ' character as there is no support for escape characters at this time.




## Math Functions

| Function| Description |
|:-----------:|:-----------:|
| `math.abs(value)`| Absolute value of value |
| `math.acos(value)`| arccos of value |
| `math.asin(value)`| arcsin of value |
| `math.atan(value)`| arctan of value |
| `math.atan2(y, x)`| arctan of y/x.  NOTE: the order of arguments! |
| `math.ceil(value)`| Round value up to nearest integral number |
| `math.clamp(value, min, max)`| Clamp value to between min and max inclusive |
| `math.cos(value)`| Cosine (in degrees) of value |
| `math.die_roll(num, low, high)`| returns the sum of 'num' random numbers, each with a value from low to high`.  Note: the generated random numbers are not integers like normal dice.  For that, use `math.die_roll_integer`. |
| `math.die_roll_integer(num, low, high)`| returns the sum of 'num' random integer numbers, each with a value from low to high`.  Note: the generated random numbers are integers like normal dice. |
| `math.exp(value)`| Calculates e to the value'th power |
| `math.floor(value)`| Round value down to nearest integral number |
| `math.hermite_blend(value)`| Useful for simple smooth curve interpolation using one of the Hermite Basis functions: `3t^2 - 2t^3`.  Note that while any valid float is a valid input, this function works best in the range [0,1]. |
| `math.lerp(start, end, 0_to_1)`| Lerp from start to end via 0_to_1 |
| `math.lerprotate(start, end, 0_to_1)`| Lerp the shortest direction around a circle from start degrees to end degrees via 0_to_1 |
| `math.ln(value)`| Natural logarithm of value |
| `math.max(A, B)`| Return highest value of A or B |
| `math.min(A, B)`| Return lowest value of A or B |
| `math.min_angle(value)`| Minimize angle magnitude (in degrees) into the range [-180, 180) |
| `math.mod(value, denominator)`| Return the remainder of value / denominator |
| `math.pi`| Returns the float representation of the constant pi. |
| `math.pow(base, exponent)`| Elevates `base` to the `exponent`'th power |
| `math.random(low, high)`| Random value between low and high inclusive |
| `math.random_integer(low, high)`| Random integer value between low and high inclusive |
| `math.round(value)`| Round value to nearest integral number |
| `math.sin(value)`| Sine (in degrees) of value |
| `math.sqrt(value)`| Square root of value |
| `math.trunc(value)`| Round value towards zero |




## ->  Arrow Operator



Some return values of query function, or values stored in temp/entity/context variables can be a reference to another entity.  The `->` operator allows an expression to access variables or run queries on that entity.  For example, the example below will find all pigs within four meters of the current entity (including itself if it's a pig), and increment a variable `v.x` on itself if the block immediately above each pig is flammable (such as an oak button) :
Note that in the case where the left-hand side of the `->` operator has an error (value is null, the entity was killed previously, or some other issue), the expression will not evaluate the right-hand side and will return 0. This implementation style was a choice between performance and not requiring content creators to overly worry about checking for potentially bad values everywhere.



****
```

"v.x = 0;
for_each(v.pig, query.get_nearby_entities(4, 'minecraft:pig'), {
    v.x = v.x + v.pig->query.get_relative_block_state(0, 1, 0, 'flammable');
});"

```



**Public Variables**



In general, variables of a mob are considered private to that mob and cannot be accessed by another.  To expose read-only access of a variable to other mobs, you need to set the 'public' setting on that variable in the owning entity's resource definition.  It is also recommended to default-initialize the variable.

****
```

{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      ...
      "scripts": {
        "variables": {
          "variable.oink": "public"
        },
        "initialize": [
          "variable.oink = 0;"
        ],
        ...
      },
      ...
    }
  }
}

```



## { } Brace Scope Delimiters

One can group a series of statements into a single group by wrapping them in `{` and `}` symbols.  This is used primarily in loops and conditional statements:

****
```

(v.moo > 0) ? {
	v.x = math.sin(q.life_time * 45);
	v.x = v.x * v.x + 17.3;
	t.sin_x = math.sin(v.x);
	v.x = t.sin_x * t.sin_x + v.x * v.x;
	v.x = math.sqrt(v.x) * v.x * math.pi;
}

```



## Conditionals

The conditional '?' operator allows for two convenient ways to implement simple branching logic.
 The first way is to use '?' by itself to conditionally execute part of an expression, for example `A ? B`. The part after the '?' is only run if the part before it evaluates to a true boolean.
 The second way is to use '?' with a ':' as a 'conditional ternary', for example `A ? B : C`. If the part before the '?' is evaluated as true, the part before the ':' is returned. Otherwise the part after is returned.
 NOTE: Nested ternary expressions without parentheses were incorrectly parsed before a Versioned Change was made to fix it (see 'Versioned Changes' below).

**Conditional Examples**
```

v.should_reset_a ? { v.a = 0; }

v.larger_value = (v.a > v.b) ? v.a : v.b;

```



## loop

Sometimes you want to execute an expression multiple times.  Rather than copy-pasting it a bunch, you can use `loop(<count>, <expression>);`.  We have placed some arbitrary restrictions on these for safety for now. The maximum loop counter is (as of this document being written) 1024.  Also, note that while you can nest loops inside loops pretty much as deep as you want, be careful you don't make a loop so long it will hang your game.

**A Fibonacci Calculator**
```

v.x = 1;
v.y = 1;
loop(10, {
	t.x = v.x + v.y;
	v.x = v.y;
	v.y = t.x;
});

```



## for_each

`query.get_nearby_entities` (see below) returns an array of entities.  In order to iterate through them, you can use the following new built-in function `for_each`.  It takes three parameters: `for_each(<variable>, <array>, <expression>);`  The variable can be any variable, either a `temp.` or `variable.`, although I'd recommend using `temp.` to not pollute the entity's variable space.  The expression is any Molang expression you want to execute for each entry in the array)

****
```

"v.x = 0;
for_each(t.pig, query.get_nearby_entities(4, 'minecraft:pig'), {
    v.x = v.x + 1;
});"

```



## break



This will exit out of a `loop` or `for_each` early.  Eg:

****
```

v.x = 1;
v.y = 1;
loop(10, {t.x = v.x + v.y; v.x = v.y; v.y = t.x; (v.y > 20) ? break;});

```



This will immediately exit the inner-most active loop, as per C-style language rules.  If you have:

****
```

v.x = 0;
loop(10, {loop(10, {v.x = v.x + 1; (v.x > 5) ? break;});});

```



The `break` statement will terminate the inner loop when `v.x > 5`, and continue processing the outer loop's expression.  Note that as v.x is not reset between the outer loops, the second time into the inner loop this will add one more to `v.x` and then exit the inner loop again, resulting in a final value of `v.x` of `6 + 1 + 1 + 1 + ... + 1` = `15`.)



## continue

`continue` functions as per C-style language rules.  Currently only supported in `loop` and `for_each`, this will skip to the next iteration of the current loop.  See `break` above for more details on inner/outer loops.  The following example will result in v.x becoming 6.0, as the increment will be skipped once it reaches that value.  Note that it is better to break out of the loop in this contrived example, as it would be more performant than continuing to perform all 10 iterations.

****
```

v.x = 0;
loop(10, {
	(v.x > 5) ? continue;
	v.x = v.x + 1;
});

```



## ?? Null Coalescing Operator

Similar to how the null-coalescing operator works in C#, one can now reference a variable that may or may not exist without seeing a content error.  If it doesn't, you can now provide a default value to use.  Previously, if a variable didn't exist you would get a content error.  This was to make sure variables were always initialized correctly to avoid uninitialized variable bugs.  Unfortunately this then required initialize scripts, or in some cases some complex work-arounds to make sure variables were initialized.  Now, if you know a variable won't be initialized in the first run of a script, you can use the following:


****
```
variable.x = (variable.x ?? 1.2) + 0.3;
```




This will use the value of `variable.x` if it is valid, or else 1.2 if `variable.x`:
- has not yet been initialized
- is a reference to a deleted entity
- is an invalid reference
- holds an error

Note that the `??` operator will work with `variable.`s, `temp.`s, and `context.`s that hold numbers or entity references, but not resources such as materials, textures, or geometries (as those must exist and be valid else it's a content error).  If the first argument would result in something that can't be resolved, it will return the second argument.

_Reminder: the standing rule of thumb in Molang is that if something would error or be a bad value, it is converted to 0.0 (and generally throw a content error on screen in non-publish builds.  Note that content errors may prevent uploading content to the Marketplace, so please ensure expressions aren't going to do bad things such as dividing by zero)._




## Simple vs Complex Expressions



A simple expression is a single statement, the value of which is returned to the system that evaluated the expression.  eg:

****
```
math.sin(query.anim_time * 1.23)
```



A complex expression is one with multiple statements, each ending in a ';'.  Each statement is evaluated in order.  In the current implementation, the last statement requires the use of the return keyword and defines the resulting value of the expression.  eg:

****
```
temp.moo = math.sin(query.anim_time * 1.23);
temp.baa = math.cos(query.life_time + 2.0);
return temp.moo * temp.moo + temp.baa;
```



Note that in a simple expression, `;` is not allowed, whereas in a complex expression, each statement requires a `;` including the last.  Also, note that if you don't `return` a value from a complex expression, the expression will evaluate to 0.0.



# Domain Examples



## Entity Definition Scripts

In the definition file there is a section for pre-computing values.  These are executed immediately before animation and render controllers are processed, and stored in the entity.  The purpose is to pre-compute any expensive and complex values you may want to reuse in your scripts, long-living index variable updates, or generally any one-off computation per render tick.

****
```
"scripts": {
    "pre_animation": [
      "variable.my_constant = (Math.cos(query.modified_distance_moved * 38.17) * query.modified_move_speed;",
      "variable.my_constant2 = Math.exp(1.5);",
    ]
  },
```



## Animation and Animation Controller Files

These are numerical operations to control which animations are playing and how to animate bones.  "variable.variable_name" and "query.function_name" refer to the entity currently being rendered.  They have access to everything in the language except material, texture, and geometry types.



## Render Controllers

There are a few different kinds of expressions here, where context implies what is allowed.  As with animations, the entity accessors refer to the current entity, however depending on the context one also has access to materials, textures, and geometries.  There are two sections in a render controller:
-Array definitions (optional)
-Resource usage (required)
The array definition section allows you to create arrays of resources by resource type if you so desire.  These can then be referenced in the resource usage section.



**Array Expressions**

For each of the three resource types (materials, textures, and geometry), you can define an array of resources.  The name of the resource is the nice-name from the definition file.  Using materials as an example:

****
```
"arrays":
{
  "materials": {
    "array.my_array_1": ["material.a", "material.b", "material.c"],
    "array.my_array_2" : ["material.d", "material.e"],
    "array.my_array_3" : ["array.my_array_1", "material.my_array_2"],
    "array.my_array_4" : ["array.my_array_2", "material.my_array_3"],
    "array.my_array_5" : ["array.my_array_1", "material.my_array_1", "material.my_array_4"],
    "array.my_array_6" : ["array.my_array_1", "material.f"],
    ...
  },
```



Note that all elements of an array must be of the same type.  eg: a texture array must only contain textures.

An array can reference any combination of zero or more arrays (including duplicates if desired) and/or zero or more materials (again, including duplicates if you like), and you can have as many arrays as you like, each with as many elements as you like.  If an array includes arrays in its members, they do not need to be the same length.  When indexing into an array in the resource usage section, you use numerical expressions.  If the resulting number is negative, it will use zero as the index.  Any non - negative index will converted to an integer, and will wrap based on the size of the array:

****
```
index = max(0, expression_result) % array_size
```



**Resource Expression**

A resource expression must return a single resource of a specific type depending on the context.
For example, in the "geometry" section, you must produce an expression that will result in a single geometry.  Some examples:

**Cycle through an array of geometries at a rate of one per second**
```
"geometry": "array.my_geometries[query.anim_time]"
```

**Pick a geo based on an entity flag**
```
"geometry": "query.is_sheared ? geometry.sheared : geometry.woolly"
```

**Use a specific geometry**
```
"geometry": "geometry.my_geo"
```

**Use specific geo when sleeping, otherwise flip through an array based on a cosine curve, using index zero for almost half the time while the cosine curve is negative**
```
"geometry": "query.is_sleeping ? geometry.my_sleeping_geo : array.my_geos[math.cos(query.anim_time * 12.3 + 41.9) * 10 + 0.6]"
```



**Resource Sections**



Geometry

The geometry section specifies which geometry to use when rendering.  As you can specify as many render controllers as you like in the definition file, a single render controller is only concerned with how to render a single geometry.  Note that a geometry can be arbitrarily complex using any number of bones and polygons.



Materials

The materials section specifies how to map what material to what bone of the geometry.  A single material is mapped to a whole bone.  Material expressions are evaluated in the order listed.  The first part of each statement is the name of the model part to apply the material to, and the second part is the material to use.  The model part name can use * for wild - card matching of characters.  For example: 

****
```
  "materials": [
      { "*": "Material.default" },
      { "TailA": "array.hair_colors[variable.hair_color]" },
      { "Mane": "array.hair_colors[variable.hair_color]" },
      { "*Saddle*": "variable.is_leather_saddle ? material.leather_saddle : material.iron_saddle" }
    ],
```



- This will start by applying Material.default to all model parts.
- Next, it will set the material on a model part named "TailA" to the result of the expression "Array.hairColors[variable.hair_color]".  This will look up some previously created variable on the entity named hair_color and use that to index into a material array called "array.hair_colors" defined in this render controller.  This will overwrite the Material.default material set in the line above.
- Third, it will look up the same material as the expression is identical, and apply it to the "Mane" model part.
- Lastly, if will find any model part starting with, ending with, or containing "Saddle" (case sensitive) and change its material to either material.leather_saddle or material.iron_saddle depending on the previously set entity variable variable.is_leather_saddle.



# Query Functions

Query Functions are operators that access a wide variety of information. They can return simple true or false values (1.0 or 0.0) or more complex data. See the list of functions below for per-query documentation. Query Functions might not take any parameters. In that case, just `query.function_name` is used. Otherwise parentheses with commas separating arguments should be used, ie `query.function_name(1, 2, 'three')`. For example:

****
```
"position": [ 0.0, "query.is_baby ? -8.0 : 0.0", "query.is_baby ? 4.0 : 0.0" ]
```



## List of Entity Queries

| Name| Description |
|:-----------:|:-----------:|
| query.above_top_solid| Returns the height of the block immediately above the highest solid block at the input (x,z) position |
| query.actor_count| Returns the number of actors rendered in the last frame |
| query.all| Requires at least 3 arguments. Evaluates the first argument, then returns 1.0 if all of the following arguments evaluate to the same value as the first. Otherwise it returns 0.0. |
| query.all_animations_finished| Only valid in an animation controller.  Returns 1.0 if all animations in the current animation controller state have played through at least once, else it returns 0.0 |
| query.all_tags| Returns if the item or block has all of the tags specified |
| query.anim_time| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation |
| query.any| Requires at least 3 arguments. Evaluates the first argument, then returns 1.0 if any of the following arguments evaluate to the same value as the first. Otherwise it returns 0.0. |
| query.any_animation_finished| Only valid in an animation controller.  Returns 1.0 if any animation in the current animation controller state has played through at least once, else it returns 0.0 |
| query.any_tag| Returns if the item or block has any of the tags specified |
| query.approx_eq| Returns 1.0 if all of the arguments are within 0.000000 of each other, else 0.0 |
| query.armor_color_slot| Takes the armor slot index as a parameter, and returns the color of the armor in the requested slot |
| query.armor_material_slot| Takes the armor slot index as a parameter, and returns the armor material type in the requested armor slot |
| query.armor_texture_slot| Takes the armor slot index as a parameter, and returns the texture type of the requested slot |
| query.average_frame_time| Returns the time in *seconds* of the average frame time over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.average_frame_time' (or the equivalent 'query.average_frame_time(0)') will return the frame time of the frame before the current one.  'query.average_frame_time(1)' will return the average frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored. |
| query.block_face| Returns the block face for this (only valid for certain triggers such as placing blocks, or interacting with block) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.block_property| Returns the value of the associated Blocks Block State |
| query.blocking| Returns 1.0 if the entity is blocking, else it returns 0.0 |
| query.body_x_rotation| Returns the body pitch rotation if called on an actor, else it returns 0.0 |
| query.body_y_rotation| Returns the body yaw rotation if called on an actor, else it returns 0.0 |
| query.bone_aabb| Returns the axis aligned bounding box of a bone as a struct with members '.min', '.max', along with '.x', '.y', and '.z' values for each. |
| query.bone_origin| Returns the initial (from the .geo) pivot of a bone as a struct with members '.x', '.y', and '.z'. |
| query.bone_rotation| Returns the initial (from the .geo) rotation of a bone as a struct with members '.x', '.y', and '.z' in degrees. |
| query.camera_distance_range_lerp| Takes two distances (any order) and return a number from 0 to 1 based on the camera distance between the two ranges clamped to that range.  For example, 'query.camera_distance_range_lerp(10, 20)' will return 0 for any distance less than or equal to 10, 0.2 for a distance of 12, 0.5 for 15, and 1 for 20 or greater.  If you pass in (20, 10), a distance of 20 will return 0.0 |
| query.camera_rotation| Returns the rotation of the camera.  Requires one argument representing the rotation axis you would like (0 for x, 1 for y) |
| query.can_climb| Returns 1.0 if the entity can climb, else it returns 0.0 |
| query.can_damage_nearby_mobs| Returns 1.0 if the entity can damage nearby mobs, else it returns 0.0 |
| query.can_fly| Returns 1.0 if the entity can fly, else it returns 0.0 |
| query.can_power_jump| Returns 1.0 if the entity can power jump, else it returns 0.0 |
| query.can_swim| Returns 1.0 if the entity can swim, else it returns 0.0 |
| query.can_walk| Returns 1.0 if the entity can walk, else it returns 0.0 |
| query.cape_flap_amount| returns value between 0.0 and 1.0 with 0.0 meaning cape is fully down and 1.0 is cape is fully up |
| query.cardinal_block_face_placed_on| DEPRECATED (please use query.block_face instead) Returns the block face for this (only valid for on_placed_by_player trigger) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_facing| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_facing_2d| Returns the current facing of the player ignoring up/down part of the direction (North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_player_facing| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.combine_entities| Combines any valid entity references from all arguments into a single array.  Note that order is not preserved, and duplicates and invalid values are removed. |
| query.count| Counts the number of things passed to it (arrays are counted as the number of elements they contain; non-arrays count as 1). |
| query.current_squish_value| Returns the squish value for the current entity, or 0.0 if this doesn't make sense |
| query.day| Returns the day of the current level. |
| query.death_ticks| Returns the elapsed ticks since the mob started dying. |
| query.debug_output| debug log a value to the output debug window for builds that have one |
| query.delta_time| Returns the time in seconds since the previous frame |
| query.distance_from_camera| Returns the distance of the root of this actor or particle emitter from the camera |
| query.effect_emitter_count| Returns the total number of active emitters of the callee's particle effect type |
| query.effect_particle_count| Returns the total number of active particles of the callee's particle effect type |
| query.equipment_count| returns the equipment count for an actor |
| query.equipped_item_all_tags| takes a slot name followed by any tag you want to check for in the form of 'tag_name' and returns 1 if all of the tags are on that equipped item, 0 otherwise |
| query.equipped_item_any_tag| takes a slot name followed by any tag you want to check for in the form of 'tag_name' and returns 0 if none of the tags are on that equipped item or 1 if at least 1 tag exists |
| query.equipped_item_is_attachable| Takes the desired hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns whether the item is an attachable or not. |
| query.eye_target_x_rotation| returns the X eye rotation of the entity if it makes sense, else it returns 0.0 |
| query.eye_target_y_rotation| returns the Y eye rotation of the entity if it makes sense, else it returns 0.0 |
| query.facing_target_to_range_attack| Returns 1.0 if the entity is attacking from range (i.e. minecraft:behavior.ranged_attack), else it returns 0.0 |
| query.frame_alpha| Returns the ratio (from 0 to 1) of how much between AI ticks this frame is being rendered |
| query.get_actor_info_id| Returns the integer id of an actor by its string name |
| query.get_animation_frame| Returns the current texture of the item |
| query.get_default_bone_pivot| Gets specified axis of the specified bone orientation pivot |
| query.get_equipped_item_name| DEPRECATED (Use query.is_item_name_any instead if possible so names can be changed later without breaking content.) Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''. |
| query.get_locator_offset| Gets specified axis of the specified locator offset |
| query.get_name| DEPRECATED (Use query.is_name_any instead if possible so names can be changed later without breaking content.) Get the name of the mob if there is one, otherwise return ''. |
| query.get_root_locator_offset| Gets specified axis of the specified locator offset of the root model |
| query.ground_speed| Returns the ground speed of the entity in meters/second |
| query.has_any_family| Returns 1 if the entity has any of the specified families, else 0. |
| query.has_armor_slot| Takes the armor slot index as a parameter, and returns 1.0 if the entity has armor in the requested slot, else it returns 0.0 |
| query.has_biome_tag| Returns whether or not a Block Placement Target has a specific biome tag |
| query.has_block_property| Returns 1.0 if the associated block has the given block property or 0.0 if not |
| query.has_cape| Returns 1.0 if the player has a cape, else it returns 0.0 |
| query.has_collision| Returns 1.0 if the entity has collisions enabled, else it returns 0.0 |
| query.has_gravity| Returns 1.0 if the entity is affected by gravity, else it returns 0.0 |
| query.has_owner| Returns true if the entity has an owner ID else it returns false |
| query.has_rider| Returns 1.0 if the entity has a rider, else it returns 0.0 |
| query.has_target| Returns 1.0 if the entity has a target, else it returns 0.0 |
| query.head_roll_angle| returns the roll angle of the head of the entity if it makes sense, else it returns 0.0 |
| query.head_x_rotation| Takes one argument as a parameter.  Returns the nth head x rotation of the entity if it makes sense, else it returns 0.0 |
| query.head_y_rotation| Takes one argument as a parameter.  Returns the nth head y rotation of the entity if it makes sense, else it returns 0.0 |
| query.health| Returns the health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| query.heightmap| Queries Height Map |
| query.hurt_direction| returns the hurt direction for the actor, otherwise returns 0 |
| query.hurt_time| returns the hurt time for the actor, otherwise returns 0 |
| query.in_range| Requires 3 numerical arguments: some value, a minimum, and a maximum. If the first argument is between the minimum and maximum (inclusive), returns 1.0. Otherwise returns 0.0. |
| query.invulnerable_ticks| Returns the number of ticks of invulnerability the entity has left if it makes sense, else it returns 0.0 |
| query.is_admiring| Returns 1.0 if the entity is admiring, else it returns 0.0 |
| query.is_alive| returns 1.0 if the entity is alive, and 0.0 if it's dead |
| query.is_angry| Returns 1.0 if the entity is angry, else it returns 0.0 |
| query.is_attached_to_entity| Returns 1.0 if the actor is attached to an entity, else it will return 0.0  |
| query.is_avoiding_block| Returns 1.0 if the entity is fleeing from a block, else it returns 0.0 |
| query.is_avoiding_mobs| Returns 1.0 if the entity is fleeing from mobs, else it returns 0.0 |
| query.is_baby| Returns 1.0 if the entity is a baby, else it returns 0.0 |
| query.is_breathing| Returns 1.0 if the entity is breathing, else it returns 0.0 |
| query.is_bribed| Returns 1.0 if the entity has been bribed, else it returns 0.0 |
| query.is_carrying_block| Returns 1.0 if the entity is carrying a block, else it returns 0.0 |
| query.is_casting| Returns 1.0 if the entity is casting, else it returns 0.0 |
| query.is_celebrating| Returns 1.0 if the entity is celebrating, else it returns 0.0 |
| query.is_celebrating_special| Returns 1.0 if the entity is doing a special celebration, else it returns 0.0 |
| query.is_charged| Returns 1.0 if the entity is charged, else it returns 0.0 |
| query.is_charging| Returns 1.0 if the entity is charging, else it returns 0.0 |
| query.is_chested| Returns 1.0 if the entity has chests attached to it, else it returns 0.0 |
| query.is_critical| Returns 1.0 if the entity is critical, else it returns 0.0 |
| query.is_croaking| Returns 1.0 if the entity is croaking, else it returns 0.0 |
| query.is_dancing| Returns 1.0 if the entity is dancing, else it returns 0.0 |
| query.is_delayed_attacking| returns 1.0 if the entity is attacking using the delayed attack, else it returns 0.0 |
| query.is_eating| Returns 1.0 if the entity is eating, else it returns 0.0 |
| query.is_eating_mob| Returns 1.0 if the entity is eating a mob, else it returns 0.0 |
| query.is_elder| Returns 1.0 if the entity is an elder version of it, else it returns 0.0 |
| query.is_emoting| Returns 1.0 if the entity is emoting, else it returns 0.0 |
| query.is_enchanted| Returns 1.0 if the entity is enchanted, else it returns 0.0 |
| query.is_fire_immune| Returns 1.0 if the entity is immune to fire, else it returns 0.0 |
| query.is_first_person| Returns 1.0 if the entity is being rendered in first person mode, else it returns 0.0 |
| query.is_ghost| returns 1.0 if an entity is a ghost, else it returns 0.0 |
| query.is_gliding| Returns 1.0 if the entity is gliding, else it returns 0.0 |
| query.is_grazing| Returns 1.0 if the entity is grazing, or 0.0 if not |
| query.is_idling| Returns 1.0 if the entity is idling, else it returns 0.0 |
| query.is_ignited| Returns 1.0 if the entity is ignited, else it returns 0.0 |
| query.is_illager_captain| Returns 1.0 if the entity is an illager captain, else it returns 0.0 |
| query.is_in_contact_with_water| Returns 1.0 if the entity is in contact with any water (water, rain, splash water bottle), else it returns 0.0 |
| query.is_in_love| Returns 1.0 if the entity is in love, else it returns 0.0 |
| query.is_in_ui| Returns 1.0 if the entity is rendered as part of the UI, else it returns 0.0 |
| query.is_in_water| Returns 1.0 if the entity is in water, else it returns 0.0 |
| query.is_in_water_or_rain| Returns 1.0 if the entity is in water or rain, else it returns 0.0 |
| query.is_interested| Returns 1.0 if the entity is interested, else it returns 0.0 |
| query.is_invisible| Returns 1.0 if the entity is invisible, else it returns 0.0 |
| query.is_item_equipped| takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns 1.0 if there is an item in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| query.is_item_name_any| Takes an equipment slot name (see the replaceitem command) and an optional slot index value. After that, takes one or more full name (with 'namespace:') strings to check for. Returns 1.0 if an item in the specified slot has any of the specified names, otherwise returns 0.0. An empty string '' can be specified to check for an empty slot. Note that querying slot.enderchest, slot.saddle, slot.armor, or slot.chest will only work in behavior packs. A preferred query to query.get_equipped_item_name, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_jumping| Returns 1.0 if the entity is jumping, else it returns 0.0 |
| query.is_laying_down| Returns 1.0 if the entity is laying down, else it returns 0.0 |
| query.is_laying_egg| Returns 1.0 if the entity is laying an egg, else it returns 0.0 |
| query.is_leashed| Returns 1.0 if the entity is leashed to something, else it returns 0.0 |
| query.is_levitating| Returns 1.0 if the entity is levitating, else it returns 0.0 |
| query.is_lingering| Returns 1.0 if the entity is lingering, else it returns 0.0 |
| query.is_moving| Returns 1.0 if the entity is moving, else it returns 0.0 |
| query.is_name_any| Takes one or more arguments. If the entity's name is any of the specified string values, returns 1.0. Otherwise returns 0.0. A preferred query to query.get_name, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_on_fire| returns 1.0 if the entity is on fire, else it returns 0.0 |
| query.is_on_ground| Returns 1.0 if the entity is on the ground, else it returns 0.0 |
| query.is_on_screen| returns 1.0 if this is called on an entity at a time when it is known if it is on screen, else it returns 0.0 |
| query.is_onfire| Returns 1.0 if the entity is on fire, else it returns 0.0 |
| query.is_orphaned| Returns 1.0 if the entity is orphaned, else it returns 0.0 |
| query.is_owner_identifier_any| Takes one or more arguments. Returns whether the root actor identifier is any of the specified strings. A preferred query to query.owner_identifier, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_persona_or_premium_skin| Returns 1.0 if the player has a persona or premium skin, else it returns 0.0 |
| query.is_playing_dead| Returns 1.0 if the entity is playing dead, else it returns 0.0 |
| query.is_powered| Returns 1.0 if the entity is powered, else it returns 0.0 |
| query.is_pregnant| Returns 1.0 if the entity is pregnant, else it returns 0.0 |
| query.is_ram_attacking| Returns 1.0 if the entity is using a ram attack, else it returns 0.0 |
| query.is_resting| Returns 1.0 if the entity is resting, else it returns 0.0 |
| query.is_riding| Returns 1.0 if the entity is riding, else it returns 0.0 |
| query.is_roaring| returns 1.0 if the entity is currently roaring, else it returns 0.0 |
| query.is_rolling| Returns 1.0 if the entity is rolling, else it returns 0.0 |
| query.is_saddled| Returns 1.0 if the entity has a saddle, else it returns 0.0 |
| query.is_scared| Returns 1.0 if the entity is scared, else it returns 0.0 |
| query.is_selected_item| returns true if the player has selected an item in the inventory, else it returns 0.0 |
| query.is_shaking| Returns 1.0 if the entity is casting, else it returns 0.0 |
| query.is_shaking_wetness| returns 1.0 if the entity is shaking water off, else it returns 0.0 |
| query.is_sheared| Returns 1.0 if the entity is able to be sheared and is sheared, else it returns 0.0 |
| query.is_shield_powered| Returns 1.0f if the entity has an active powered shield if it makes sense, else it returns 0.0 |
| query.is_silent| Returns 1.0 if the entity is silent, else it returns 0.0 |
| query.is_sitting| Returns 1.0 if the entity is sitting, else it returns 0.0 |
| query.is_sleeping| Returns 1.0 if the entity is sleeping, else it returns 0.0 |
| query.is_sneaking| Returns 1.0 if the entity is sneaking, else it returns 0.0 |
| query.is_sneezing| Returns 1.0 if the entity is sneezing, else it returns 0.0 |
| query.is_sprinting| Returns 1.0 if the entity is sprinting, else it returns 0.0 |
| query.is_stackable| Returns 1.0 if the entity is stackable, else it returns 0.0 |
| query.is_stalking| Returns 1.0 if the entity is stalking, else it returns 0.0 |
| query.is_standing| Returns 1.0 if the entity is standing, else it returns 0.0 |
| query.is_stunned| returns 1.0 if the entity is currently stunned, else it returns 0.0 |
| query.is_swimming| Returns 1.0 if the entity is swimming, else it returns 0.0 |
| query.is_tamed| Returns 1.0 if the entity is tamed, else it returns 0.0 |
| query.is_transforming| Returns 1.0 if the entity is transforming, else it returns 0.0 |
| query.is_using_item| Returns 1.0 if the entity is using an item, else it returns 0.0 |
| query.is_wall_climbing| Returns 1.0 if the entity is climbing a wall, else it returns 0.0 |
| query.item_in_use_duration| Returns the amount of time an item has been in use in seconds up to the maximum duration, else 0.0 if it doesn't make sense |
| query.item_is_charged| takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns 1.0 if the item is charged in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| query.item_max_use_duration| Returns the maximum amount of time the item can be used, else 0.0 if it doesn't make sense |
| query.item_remaining_use_duration| Returns the amount of time an item has left to use, else 0.0 if it doesn't make sense. Item queried is specified by the slot name 'main_hand' or 'off_hand'. Time remaining is normalized using the normalization value, only if one is given, else it is returned in seconds. |
| query.item_slot_to_bone_name| query.item_slot_to_bone_name requires one parameter: the name of the equipment slot.  This function returns the name of the bone this entity has mapped to that slot. |
| query.key_frame_lerp_time| Returns the ratio between the previous and next key frames |
| query.last_frame_time| Returns the time in *seconds* of the last frame.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.last_frame_time' (or the equivalent 'query.last_frame_time(0)') will return the frame time of the frame before the current one.  'query.last_frame_time(1)' will return the frame time of two frames ago.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Passing an index more than the available data will return the oldest frame stored. |
| query.last_hit_by_player| Returns 1.0 if the entity was last hit by the player, else it returns 0.0. If called by the client always returns 0.0 |
| query.lie_amount| Returns the lie down amount for the entity |
| query.life_span| returns the limited life span of an entity, or 0.0 if it lives forever |
| query.life_time| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation |
| query.lod_index| Takes an array of distances and returns the zero - based index of which range the actor is in based on distance from the camera. For example, 'query.lod_index(10, 20, 30)' will return 0, 1, or 2 based on whether the mob is less than 10, 20, or 30 units away from the camera, or it will return 3 if it is greater than 30. |
| query.log| debug log a value to the content log |
| query.main_hand_item_max_duration| Returns the use time maximum duration for the main hand item if it makes sense, else it returns 0.0 |
| query.main_hand_item_use_duration| Returns the use time for the main hand item. |
| query.mark_variant| Returns the entity's mark variant |
| query.max_durability| Returns the max durability an item can take |
| query.max_health| Returns the maximum health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| query.max_trade_tier| Returns the maximum trade tier of the entity if it makes sense, else it returns 0.0 |
| query.maximum_frame_time| Returns the time in *seconds* of the most expensive frame over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.maximum_frame_time' (or the equivalent 'query.maximum_frame_time(0)') will return the frame time of the frame before the current one.  'query.maximum_frame_time(1)' will return the maximum frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored. |
| query.minimum_frame_time| Returns the time in *seconds* of the least expensive frame over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.minimum_frame_time' (or the equivalent 'query.minimum_frame_time(0)') will return the frame time of the frame before the current one.  'query.minimum_frame_time(1)' will return the minimum frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored. |
| query.model_scale| Returns the scale of the current entity |
| query.modified_distance_moved| Returns the total distance the entity has moved horizontally in meters (since the entity was last loaded, not necessarily since it was originally created) modified along the way by status flags such as is_baby or on_fire |
| query.modified_move_speed| Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire |
| query.moon_brightness| Returns the brightness of the moon (FULL_MOON=1.0, WANING_GIBBOUS=0.75, FIRST_QUARTER=0.5, WANING_CRESCENT=0.25, NEW_MOON=0.0, WAXING_CRESCENT=0.25, LAST_QUARTER=0.5, WAXING_GIBBOUS=0.75). |
| query.moon_phase| Returns the phase of the moon (FULL_MOON=0, WANING_GIBBOUS=1, FIRST_QUARTER=2, WANING_CRESCENT=3, NEW_MOON=4, WAXING_CRESCENT=5, LAST_QUARTER=6, WAXING_GIBBOUS=7). |
| query.movement_direction| returns the specified axis of the normalized position delta of the entity |
| query.noise| Queries Perlin Noise Map |
| query.on_fire_time| returns the time that the entity is on fire, else it returns 0.0 |
| query.out_of_control| Returns 1.0 if the entity is out of control, else it returns 0.0 |
| query.overlay_alpha| DEPRECATED (Do not use - this function is deprecated and will be removed) |
| query.owner_identifier| DEPRECATED (Use query.is_owner_identifier_any instead if possible so names can be changed later without breaking content.) Returns the root actor identifier. |
| query.player_level| returns the players level if the actor is a player, otherwise returns 0 |
| query.position| Returns the absolute position of an actor.  Takes one argument that represents the desired axis (0 == x-axis, 1 == y-axis, 2 == z-axis). |
| query.position_delta| Returns the position delta for an actor.  Takes one argument that represents the desired axis (0 == x-axis, 1 == y-axis, 2 == z-axis). |
| query.previous_squish_value| Returns the previous squish value for the current entity, or 0.0 if this doesn't make sense |
| query.remaining_durability| Returns the how much durability an item has remaining |
| query.roll_counter| Returns the roll counter of the entity |
| query.rotation_to_camera| Returns the rotation required to aim at the camera.  Requires one argument representing the rotation axis you would like (0 for x, 1 for y) |
| query.shake_angle| returns the shaking angle of the entity if it makes sense, else it returns 0.0 |
| query.shake_time| Returns the shake time of the entity. |
| query.shield_blocking_bob| Returns the how much the offhand shield should translate down when blocking and being hit. |
| query.show_bottom| Returns 1.0 if we render the entity's bottom, else it returns 0.0 |
| query.sit_amount| Returns the current sit amount of the entity |
| query.skin_id| Returns the entity's skin ID |
| query.sleep_rotation| returns the rotation of the bed the player is sleeping on. |
| query.sneeze_counter| Returns the sneeze counter of the entity |
| query.spellcolor| Returns a struct representing the entity spell color for the specified entity. The struct contains '.r' '.g' '.b' and '.a' members, each 0.0 to 1.0. If no actor is specified, each member value will be 0.0 |
| query.standing_scale| Returns the scale of how standing up the entity is |
| query.structural_integrity| returns the structural integrity for the actor, otherwise returns 0 |
| query.swell_amount| Returns how swollen the entity is |
| query.swelling_dir| Returns the swelling direction of the entity if it makes sense, else it returns 0.0 |
| query.swim_amount| Returns the amount the current entity is swimming |
| query.tail_angle| returns the angle of the tail of the entity if it makes sense, else it returns 0.0 |
| query.target_x_rotation| Returns the x rotation required to aim at the entity's current target if it has one, else it returns 0.0 |
| query.target_y_rotation| Returns the y rotation required to aim at the entity's current target if it has one, else it returns 0.0 |
| query.texture_frame_index| Returns the icon index of the experience orb |
| query.time_of_day| Returns the time of day (midnight=0.0, sunrise=0.25, noon=0.5, sunset=0.75) of the dimension the entity is in. |
| query.time_stamp| Returns the current time stamp of the level |
| query.total_emitter_count| Returns the total number of active emitters in the world |
| query.total_particle_count| Returns the total number of active particles in the world |
| query.trade_tier| Returns the trade tier of the entity if it makes sense, else it returns 0.0 |
| query.unhappy_counter| Returns how unhappy the entity is |
| query.variant| Returns the entity's variant index |
| query.vertical_speed| Returns the speed of the entity up or down in meters/second, where positive is up |
| query.walk_distance| Returns the walk distance of the entity. |
| query.wing_flap_position| Returns the wing flap position of the entity, or 0.0 if this doesn't make sense |
| query.wing_flap_speed| Returns the wing flap speed of the entity, or 0.0 if this doesn't make sense |
| query.yaw_speed| Returns the entity's yaw speed |




## List of Experimental Entity Queries

| Name| Description |
|:-----------:|:-----------:|
| query.actor_property| (EXPERIMENTAL. Enable 'Holiday Creator Features' AND 'Upcoming Creator Features' to use.) Takes one argument: the name of the property on the entity. Returns the value of that property if it exists, else 0.0 if not. |
| query.biome_has_all_tags| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes either no position (assumes the current entity position) or three parameters: x, y, z (representing the world-origin-relative position), followed by whatever tags you want to query for, and returns 1 if all of them exist in the biome, else it returns 0.  Eg: query.biome_has_all_tags('is_cold', 'has_trees') |
| query.biome_has_any_tag| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes either no position (assumes the current entity position) or three parameters: x, y, z (representing the world-origin-relative position), followed by whatever tags you want to query for, and returns 1 if any of them exist in the biome, else it returns 0.  Eg: query.biome_has_any_tag('is_cold', 'has_trees') |
| query.block_has_all_tags| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided |
| query.block_has_any_tag| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided |
| query.block_neighbor_has_all_tags| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided |
| query.block_neighbor_has_any_tag| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided |
| query.bone_orientation_matrix| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes the name of the bone as an argument. Returns the bone orientation (as a matrix) of the desired bone provided it exists in the queryable geometry of the mob, else this returns the identity matrix and throws a content error. |
| query.bone_orientation_trs| (EXPERIMENTAL. Enable 'Molang Features' to use.) TRS stands for Translate/Rotate/Scale.  Takes the name of the bone as an argument.  Returns the bone orientation matrix decomposed into the component translation/rotation/scale parts of the desired bone provided it exists in the queryable geometry of the mob, else this returns the identity matrix and throws a content error.  The returned value is returned as a variable of type 'struct' with members '.t', '.r', and '.s', each with members '.x', '.y', and '.z', and can be accessed as per the following example: v.my_variable = q.bone_orientation_trs('rightarm'); return v.my_variable.r.x; |
| query.client_input_type| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns either 'mouse', 'touch', 'gamepad', or 'motion_controller' depending on the type of input used by the current client. |
| query.cooldown_time| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the total cooldown time in seconds for the item held or worn by the specified equipment slot name (and optional second numerical slot id), otherwise returns 0. Uses the same name and id that the replaceitem command takes when querying entities. |
| query.cooldown_time_remaining| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the cooldown time remaining in seconds for specified cooldown type or the item held or worn by the specified equipment slot name (and optional second numerical slot id), otherwise returns 0. Uses the same name and id that the replaceitem command takes when querying entities. Returns highest cooldown if no parameters are supplied. |
| query.get_nearby_entities| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (eg: 'minecraft:pig'). |
| query.get_nearby_entities_except_self| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (eg: 'minecraft:pig'). |
| query.get_ride| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the entity this entity is riding if it is riding something, else it returns 0 |
| query.get_riders| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the array of entities that are riding this entity |
| query.has_actor_property| (EXPERIMENTAL. Enable 'Holiday Creator Features' AND 'Upcoming Creator Features' to use.) Takes one argument: the name of the property on the Actor. Returns 1.0 if a property with the given name exists, 0 otherwise.  |
| query.has_player_rider| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns 1 if the entity has a player riding it, else it returns 0 |
| query.is_attached| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns 1.0 if the actor is attached to another actor (such as being held or worn), else it will return 0.0 |
| query.is_cooldown_type| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns 1.0 if the specified held or worn item has the specified cooldown type name, otherwise returns 0.0. First argument is the cooldown name to check for, second argument is the equipment slot name, and optional third argument is the numerical slot id. For second and third arguments, uses the same name and id that the replaceitem command takes when querying entities. |
| query.relative_block_has_all_tags| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided |
| query.relative_block_has_any_tag| (EXPERIMENTAL. Enable 'Molang Features' to use.) Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided |
| query.scoreboard| (EXPERIMENTAL. Enable 'Molang Features' to use.) DEPRECATED (The coming Actor Property feature will replace the need for querying hidden scoreboard data. Current client-side scoreboard code is only meant for supporting the standard UI elements.) Takes one argument - the name of the scoreboard entry for this entity.  Returns the specified scoreboard value for this entity. |
| query.self| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the current entity |
| query.target| (EXPERIMENTAL. Enable 'Molang Features' to use.) Returns the target of the current entity if one exists |




# Experimental Operators

Some operators may be behind experimental gameplay toggles (see list below).  After getting feedback, we can adjust them further or move them into general availability.

- (There are currently no Experimental Operators)




# Versioned Changes

Molang uses the `"min_engine_version"` from the `manifest.json` of the resource or behavior pack that contains each Molang expression to determine which version of the rules to apply. This allows for changes to how Molang works without breaking existing content. 

Molang Versioned Change versions apply to each expression separately, so it's possible to have different versions active if multiple packs are loaded. 

This is a list of the Versioned Changes that have been added, along with the corresponding game version. 

To know which Versioned Changes are in effect, look at the `"min_engine_version"` of the `manifest.json` of the resource or behavior pack that contains your Molang expression. Any Versioned Change with a version less than or equal to that version number will be in effect. 



## Versioned Change Versions

| Pack min_engine_version| Description |
|:-----------:|:-----------:|
| 1.17.0| Initial support for Versioned Changes added. (Not actually a Versioned Change) |
| 1.17.30| Fixed query.item_remaining_use_duration conversion from ticks to seconds (multiplied by 20 instead of dividing). Also fixed normalization logic in that query to go from 1 down to 0 instead of 0 up to 1. |
| 1.17.40| Added some new error messages for invalid expressions which previously ran with probably unexpected results. For example "'text' + 1" will now cause a content error. |
| 1.18.10| Fixed conditional (ternary) operator associativity. Previously nested conditional expressions like `A ? B : C ? D : E` would evaluate as `(A ? B : C) ? D : E`. Now they evaluate as `A ? B : (C ? D : E)`. |


