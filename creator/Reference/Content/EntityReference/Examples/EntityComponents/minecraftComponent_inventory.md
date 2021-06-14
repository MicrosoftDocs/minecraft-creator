---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:inventory
ms.prod: gaming
---
​
# minecraft:inventory
​
`minecraft:inventory` allows an entity to
​
## Parameters
​
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| additional_slots_per_strength| 0| Integer| Number of slots that this entity can gain per extra strength |
| can_be_siphoned_from| False| Boolean| If true, the contents of this inventory can be removed by a hopper |
| container_type| *not set*| String| Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper |
| inventory_size| 5| Integer| Number of slots the container has |
| private| False| Boolean| If true, the entity will not drop it's inventory on death |
| restrict_to_owner| False| Boolean| If true, the entity's inventory can only be accessed by its owner or itself |
​
## Example
​
```json
"minecraft:inventory":{
    "additional_slots_per_strength": 0,
    "can_be_siphoned_from": false,
    "container_type": ,
    "inventory_size": 5,
    "private": false,
    "restrict_to_owner": false,
}
```
​
## Vanilla entities examples
​
### chest_minecart

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/chest_minecart.json" range="20-24":::
​
## Vanilla entities using `minecraft:inventory`
​
- [chest_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/chest_minecart.md)
- [command_block_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/command_block_minecart.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [hopper_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/hopper_minecart.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)