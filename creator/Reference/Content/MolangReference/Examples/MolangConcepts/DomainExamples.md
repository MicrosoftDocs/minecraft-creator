---
author: JDHeaden
ms.author: v-jillheaden
title: Molang Documentation - Domain Examples
ms.prod: gaming
---

# Molang Documentation - Domain Examples

Here are a few examples of how Molang can be used in a variety of solutions.

## Entity Definition Scripts

In the definition file, there is a section for pre-computing values. These are executed immediately before animation and render controllers are processed, and are stored in the entity. The purpose is to pre-compute any expensive and complex values you may want to reuse in your scripts, long-living index variable updates, or generally any one-off computation per render tick.

### Example

```JSON
"scripts": {
    "pre_animation": [
      "variable.my_constant = (Math.cos(query.modified_distance_moved * 38.17) * query.modified_move_speed;",
      "variable.my_constant2 = Math.exp(1.5);",
    ]
  },
```

## Animation and Animation Controller Files

These are numerical operations to control which animations are playing and how to animate bones. `variable.variable_name` and `query.function_name` refer to the entity currently being rendered.

> [!CAUTION]
> Animation and Animation Controller files have access to everything available in Molang except `material`, `texture`, and `geometry` types.

## Render Controllers

There are a few different kinds of expressions here, where context implies what is allowed. As with animations, the entity accessors refer to the current entity. However, depending on the context, one also has access to materials, textures, and geometries.

There are two sections in a render controller:

- Array definitions (optional)
- Resource usage (required)

The array definition section allows you to create arrays of resources by resource type if you so desire. These can then be referenced in the resource usage section.

## Array Expressions

For each of the three resource types (`materials`, `textures`, and `geometry`), you can define an array of resources. The name of the resource is the "nice-name" from the definition file.

### Example

Using `materials` as an example:

```JSON
"arrays":
{
  "materials": {
    "array.my_array_1": ["material.a", "material.b", "material.c"],
    "array.my_array_2" : ["material.d", "material.e"],
    "array.my_array_3" : ["array.my_array_1", "material.my_array_2"],
    "array.my_array_4" : ["array.my_array_2", "material.my_array_3"],
    "array.my_array_5" : ["array.my_array_1", "material.my_array_1", "material.my_array_4"],
    "array.my_array_6" : ["array.my_array_1", "material.f"],
  },
```

> [!NOTE]
> All elements of an array must be of the same type. For example, a texture array must contain only textures.

An array can reference any combination of zero or more arrays (including duplicates) and/or zero or more materials (again, including duplicates if you like), and you may have as many arrays as you like, each with as many elements as you like. If an array includes arrays in its members, they do not need to be the same length.

When indexing into an array in the resource usage section, you use numerical expressions. If the resulting number is negative, it will use zero as the index. Any non - negative index will converted to an integer, and will wrap based on the size of the array as shown here:

```C#
index = max(0, expression_result) % array_size
```

## Resource Expression

A resource expression must return a single resource of a specific type depending on the context. For example, in the "geometry" section, you must produce an expression that will result in a single geometry. Listed below are some examples:

**Use a specific geometry**

```C#
"geometry": "geometry.my_geo"
```

**Cycle through an array of geometries at a rate of one per second**

```C#
"geometry": "array.my_geometries[query.anim_time]"
```

**Use a specific geometry when sleeping, otherwise flip through an array based on a cosine curve, using index zero for almost half the time while the cosine curve is negative**

```C#
"geometry": "query.is_sleeping ? geometry.my_sleeping_geo : array.my_geos[math.cos(query.anim_time * 12.3 + 41.9) * 10 + 0.6]"
```

**Pick a geometry based on an entity flag**

```C#
"geometry": "query.is_sheared ? geometry.sheared : geometry.woolly"
```

## Resource Sections

Geometry and Materials are the two resource sections available.

### Geometry

The geometry section specifies which geometry to use when rendering. As you can specify as many render controllers as you like in the definition file, a single render controller is only concerned with how to render a single geometry. Note that a geometry can be arbitrarily complex using any number of bones and polygons.

### Materials

The materials section specifies how to map what material to what bone of the geometry. A single material is mapped to a whole bone. Material expressions are evaluated in the order listed. The first part of each statement is the name of the model part to apply the material to, and the second part is the material to use. The model part name can use `*` for wildcard matching of characters.

### Example

```JSON
  "materials": [
      { "*": "Material.default" },
      { "TailA": "array.hair_colors[variable.hair_color]" },
      { "Mane": "array.hair_colors[variable.hair_color]" },
      { "*Saddle*": "variable.is_leather_saddle ? material.leather_saddle : material.iron_saddle" }
    ],
```

- This will start by applying `Material.default` to all model parts.
- Next, it will set the material on a model part named "TailA" to the result of the expression "Array.hairColors[variable.hair_color]". This will look up some previously created variable on the entity named `hair_color` and use that to index into a material array called `array.hair_colors` defined in this render controller. This will overwrite the Material.default material set in the line above.
- Third, it will look up the same material as the expression is identical, and apply it to the "Mane" model part.
- Lastly, it will find any model part starting with, ending with, or containing "Saddle" (notice it's case sensitive) and change its material to either `material.leather_saddle` or `material.iron_saddle` depending on the previously set entity variable `variable.is_leather_saddle`.
