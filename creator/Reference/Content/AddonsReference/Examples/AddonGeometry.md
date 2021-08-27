---
author: v-josjones
ms.author: v-josjones
title: Addons Documentation - Geometry
ms.prod: gaming
---

# Addons Documentation - Geometry

Blocks and Items commonly use geometry to define how an object will look in Minecraft: Bedrock Edition.

## Parameters

|Name |Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| [elements](#elements)|*not set* | List| List of elements that make up the geometry of this block|
| format_version| 0.0.0.0| String| Version of the block geometry being used. This is used to determine if backwards compatibility is needed |
| materials| #0|List| List of materials used by this model |
| parent|*not set* | String| Parent model of this model |

### elements

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| [boxes](#boxes)|*not set* | List| List of cubes that make up the geometry of this element|
| material|*not set* | String|  The material of this element if different from the block's |
| name| | String|  Name of the element |
| parent| | String| Name of the parent element of this element. Pivot and box positions are made relative to the parent element's pivot |
| pivot| [ 0.0, 0.0, 0.0 ]| Vector [a, b, c]| Position in model space of the pivot point of the element. This is used as the "center" position of the element, as well as the point around which to rotate |
| rotation| [ 0.0, 0.0, 0.0 ]| Vector [a, b, c]| The rotation of this element about its pivot |

### boxes

 Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| [faces](#faces)|*not set* | List| List of the 6 faces of the box. If specified, there MUST be 6 faces (front, back, left side, right side, top, bottom)|
|material|*not set* | String| The material of this box if different from the element's |
| origin| [ 0.0, 0.0, 0.0 ]| Vector [a, b, c]| The position of the center of the box relative to the geometry |
| size| [ 0, 0, 0 ]| Vector [a, b, c]| Scale of the box in the x, y and z coordinates. A typical block is of scale 1, 1, 1 |

### faces

Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| material|*not set* | String| The material of this face if different from the box's |
| rotation| 0.0| Decimal| UV Rotation of this face. Only acceptable values are 0, 90 and 270 degrees. This allows reusing a texture and just rotating it for different faces |
| uv| [ 0.0, 0.0, 1.0, 1.0 ]| Vector [a, b, c, d]| Texture coordinates of this face, given as min x, min y, max x, max y with values between 0.0 and 1.0 |

## Learn More

You can learn more about Blocks and Items in the links below:

### Blocks

> [!div class="nextstepaction"]
> [Blocks JSON Documentation](../../BlockReference/index.yml)

> [!div class="nextstepaction"]
> [List of Blocks](AddonBlocks.md#list-of-blocks)

-----------

### Items

> [!div class="nextstepaction"]
> [Item JSON Documentation](../../ItemReference/index.yml)

> [!div class="nextstepaction"]
> [List of Items](AddonItems.md#list-of-items)
