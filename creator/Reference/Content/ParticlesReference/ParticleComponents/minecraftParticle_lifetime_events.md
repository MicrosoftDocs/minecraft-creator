---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Lifetime Events component
ms.prod: gaming
---

# Particle Documentation - Particle Lifetime Events component

This component allows for triggering events based on various lifetime events.

```json
"minecraft:particle_lifetime_events": {
      // all events use the event names in the event section
      // all events can be either an array or a string
      "creation_event": [<string>, ...] // fires when the particle is created
      "creation_event": <string>
      "expiration_event": [<string>, ...] // fires when the particle expires (does not wait for particles to expire too)
      "expiration_event": <string>,

      // event timeline
      "timeline": {
        // a series of times, e.g. 0.0 or 1.0, that trigger the event
        // "time" is the time, e.g. one line might be:
        // "0.4": "event"
        "time": [<string>", ...]
        "time": <string>
      }
}
```
