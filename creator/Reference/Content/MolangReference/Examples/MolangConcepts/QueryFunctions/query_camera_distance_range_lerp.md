---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_camera_distance_range_lerp"
description: "Describes the minecraft:query_camera_distance_range_lerp molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_camera_distance_range_lerp

Takes two distances (any order) and return a number from 0 to 1 based on the camera distance between the two ranges clamped to that range.  For example, 'query.camera_distance_range_lerp(10, 20)' will return 0 for any distance less than or equal to 10, 0.2 for a distance of 12, 0.5 for 15, and 1 for 20 or greater.  If you pass in (20, 10), a distance of 20 will return 0.0.
