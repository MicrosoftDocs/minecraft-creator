---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_maximum_frame_time"
description: "Describes the minecraft:query_maximum_frame_time molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_maximum_frame_time

Returns the time in *seconds* of the most expensive frame over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.maximum_frame_time' (or the equivalent 'query.maximum_frame_time(0)') will return the frame time of the frame before the current one.  'query.maximum_frame_time(1)' will return the maximum frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored.
