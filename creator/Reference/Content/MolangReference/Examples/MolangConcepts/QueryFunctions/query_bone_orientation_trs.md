---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_bone_orientation_trs"
description: "Describes the minecraft:query_bone_orientation_trs molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_bone_orientation_trs

TRS stands for Translate/Rotate/Scale; this takes the name of the bone as an argument and returns the bone orientation matrix decomposed into the component translation/rotation/scale parts of the desired bone provided it exists in the queryable geometry of the mob, else this returns the identity matrix and throws a content error.  The returned value is returned as a variable of type 'struct' with members '.t', '.r', and '.s', each with members '.x', '.y', and '.z', and can be accessed as per the following example: v.my_variable = q.bone_orientation_trs('rightarm'); return v.my_variable.r.x;.
