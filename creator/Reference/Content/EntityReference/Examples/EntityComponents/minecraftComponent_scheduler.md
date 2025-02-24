---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:scheduler"
description: "Describes the minecraft:scheduler entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:scheduler

Fires off scheduled mob events at time of day events.


## Scheduler Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_delay_secs | *not set* | Decimal number |  | Villager V2: `10` | 
| min_delay_secs | *not set* | Decimal number |  |  | 
| scheduled_events | *not set* | Array of strings | The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked. | Fox: `[{"filters":[{"test":"is_sleeping","value":true}],"event":"minecraft:ambient_sleep"},{"filters":{"all_of":[{"test":"is_daytime","value":false},{"test":"distance_to_nearest_player","operator":">","value":16}]},"event":"minecraft:ambient_night"},{"filters":{"all_of":[{"test":"is_sleeping","value":false},{"any_of":[{"test":"is_daytime","value":true},{"test":"distance_to_nearest_player","operator":"<=","value":16}]}]},"event":"minecraft:ambient_normal"}]`, Villager V2: `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":8000}]},"event":"minecraft:schedule_work_pro_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":8000},{"test":"hourly_clock_time","operator":"<","value":10000}]},"event":"minecraft:schedule_gather_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":10000},{"test":"hourly_clock_time","operator":"<","value":11000}]},"event":"minecraft:schedule_work_pro_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":11000},{"test":"hourly_clock_time","operator":"<","value":12000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"}]`, `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":8000}]},"event":"minecraft:schedule_wander_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":8000},{"test":"hourly_clock_time","operator":"<","value":10000}]},"event":"minecraft:schedule_gather_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":10000},{"test":"hourly_clock_time","operator":"<","value":11000}]},"event":"minecraft:schedule_wander_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":11000},{"test":"hourly_clock_time","operator":"<","value":12000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"}]`, `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":11000}]},"event":"minecraft:schedule_play_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":11000},{"test":"hourly_clock_time","operator":"<","value":12000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"}]`, `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":2000},{"test":"hourly_clock_time","operator":"<","value":13000}]},"event":"minecraft:schedule_wander_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":13000},{"test":"hourly_clock_time","operator":"<","value":14000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":14000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":2000}]},"event":"minecraft:schedule_bed_villager"}]`, `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":8000}]},"event":"minecraft:schedule_work_fisher"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":8000},{"test":"hourly_clock_time","operator":"<","value":10000}]},"event":"minecraft:schedule_gather_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":10000},{"test":"hourly_clock_time","operator":"<","value":11000}]},"event":"minecraft:schedule_work_fisher"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":11000},{"test":"hourly_clock_time","operator":"<","value":12000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"}]`, `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":8000}]},"event":"minecraft:schedule_work_librarian"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":8000},{"test":"hourly_clock_time","operator":"<","value":10000}]},"event":"minecraft:schedule_gather_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":10000},{"test":"hourly_clock_time","operator":"<","value":11000}]},"event":"minecraft:schedule_work_librarian"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":11000},{"test":"hourly_clock_time","operator":"<","value":12000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"}]`, `[{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":0},{"test":"hourly_clock_time","operator":"<","value":8000}]},"event":"minecraft:schedule_work_farmer"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":8000},{"test":"hourly_clock_time","operator":"<","value":10000}]},"event":"minecraft:schedule_gather_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":10000},{"test":"hourly_clock_time","operator":"<","value":11000}]},"event":"minecraft:schedule_work_farmer"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":11000},{"test":"hourly_clock_time","operator":"<","value":12000}]},"event":"minecraft:schedule_home_villager"},{"filters":{"all_of":[{"test":"hourly_clock_time","operator":">=","value":12000},{"test":"hourly_clock_time","operator":"<","value":24000}]},"event":"minecraft:schedule_bed_villager"}]` | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 0,
  "scheduled_events": [
    {
      "filters": [
        {
          "test": "is_sleeping",
          "value": true
        }
      ],
      "event": "minecraft:ambient_sleep"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_daytime",
            "value": false
          },
          {
            "test": "distance_to_nearest_player",
            "operator": ">",
            "value": 16
          }
        ]
      },
      "event": "minecraft:ambient_night"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_sleeping",
            "value": false
          },
          {
            "any_of": [
              {
                "test": "is_daytime",
                "value": true
              },
              {
                "test": "distance_to_nearest_player",
                "operator": "<=",
                "value": 16
              }
            ]
          }
        ]
      },
      "event": "minecraft:ambient_normal"
    }
  ]
}
```

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/work_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 8000
          }
        ]
      },
      "event": "minecraft:schedule_work_pro_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 8000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 10000
          }
        ]
      },
      "event": "minecraft:schedule_gather_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 10000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 11000
          }
        ]
      },
      "event": "minecraft:schedule_work_pro_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 11000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 12000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```

At /minecraft:entity/component_groups/basic_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 8000
          }
        ]
      },
      "event": "minecraft:schedule_wander_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 8000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 10000
          }
        ]
      },
      "event": "minecraft:schedule_gather_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 10000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 11000
          }
        ]
      },
      "event": "minecraft:schedule_wander_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 11000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 12000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```

At /minecraft:entity/component_groups/child_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 11000
          }
        ]
      },
      "event": "minecraft:schedule_play_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 11000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 12000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```

At /minecraft:entity/component_groups/jobless_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 2000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 13000
          }
        ]
      },
      "event": "minecraft:schedule_wander_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 13000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 14000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 14000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 2000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```

At /minecraft:entity/component_groups/fisher_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 8000
          }
        ]
      },
      "event": "minecraft:schedule_work_fisher"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 8000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 10000
          }
        ]
      },
      "event": "minecraft:schedule_gather_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 10000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 11000
          }
        ]
      },
      "event": "minecraft:schedule_work_fisher"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 11000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 12000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```

At /minecraft:entity/component_groups/librarian_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 8000
          }
        ]
      },
      "event": "minecraft:schedule_work_librarian"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 8000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 10000
          }
        ]
      },
      "event": "minecraft:schedule_gather_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 10000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 11000
          }
        ]
      },
      "event": "minecraft:schedule_work_librarian"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 11000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 12000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```

At /minecraft:entity/component_groups/farmer_schedule/minecraft:scheduler/: 

```json
"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 10,
  "scheduled_events": [
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 0
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 8000
          }
        ]
      },
      "event": "minecraft:schedule_work_farmer"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 8000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 10000
          }
        ]
      },
      "event": "minecraft:schedule_gather_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 10000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 11000
          }
        ]
      },
      "event": "minecraft:schedule_work_farmer"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 11000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 12000
          }
        ]
      },
      "event": "minecraft:schedule_home_villager"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "hourly_clock_time",
            "operator": ">=",
            "value": 12000
          },
          {
            "test": "hourly_clock_time",
            "operator": "<",
            "value": 24000
          }
        ]
      },
      "event": "minecraft:schedule_bed_villager"
    }
  ]
}
```
