---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:conditional_list
ms.prod: gaming
---

# Features Documentation - minecraft:conditional_list

`minecraft:conditional_list` Places the first suitable feature within a collection. These conditional features will be evaluated in order.

**Succeeds if**
A condition is successfully resolved.

**Fails if**
No condition is successfully resolved.

## Example

### Assigning a feature to an expression

```json
"conditional_features" : [
  {
    "places_feature" : "minecraft:some_feature_or_other",
    "condition" : "query.check_some_block_property()",
  },
],
"early_out_scheme": "placement_success"
```
