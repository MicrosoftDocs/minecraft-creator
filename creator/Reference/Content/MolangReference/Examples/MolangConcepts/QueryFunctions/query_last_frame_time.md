---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_last_frame_time"
description: "Describes the minecraft:query_last_frame_time molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_last_frame_time

Returns the time in *seconds* of the last frame.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.last_frame_time' (or the equivalent 'query.last_frame_time(0)') will return the frame time of the frame before the current one.  'query.last_frame_time(1)' will return the frame time of two frames ago.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Passing an index more than the available data will return the oldest frame stored.
