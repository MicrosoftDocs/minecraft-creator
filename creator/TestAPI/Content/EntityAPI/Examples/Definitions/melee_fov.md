---
author: v-josjones
ms.author: v-josjones
title: melee_fov definition
ms.prod: gaming
---

# melee_fov

This controls how large the field of view of this entity is for considering targets to attack. It is measured in degrees.  

If the target is not within the field of view, then this mob will move towards its target until it is. Once the target is within the field of view, it will attack.

The field of view is calculated by creating a cone in the direction the mob is facing. A 90 degree cone means that the targeted mob can be within 45 degrees on either side of the mob. See the diagram below:

:::image type="content" source="../../Media/melee_fov/melee_fov_diagram.png" alt-text="Diagram showing a cone from the players perpective. The cone is showing 90 degree with an entity located to the right side of the cone.":::