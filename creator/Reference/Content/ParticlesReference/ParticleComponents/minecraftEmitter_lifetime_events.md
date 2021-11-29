---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Emitter Lifetime Events component
ms.prod: gaming
---

# Particle Documentation - Emitter Lifetime Events component

Allows for lifetime events on the emitter to trigger certain events.

```json
"minecraft:emitter_lifetime_events": {
      // all events use the event names in the event section
      // all events can be an array or a string
      "creation_event": [ <string>, ...] // fires when the emitter is created
      "creation_event": <string>
      "expiration_event": [ <string>, ...] // fires when the emitter expires (does not wait for particles to expire too)
      "expiration_event": <string>

      // event timeline
      "timeline: {
        // a series of times, e.g. 0.0 or 1.0, that trigger the event
        // these get fired on every loop the emitter goes through
        // "time" is the time, e.g. one line might be:
        // "0.4": "event"
        "time": [ <string>, ... ]
        "time": <string>
      }
    }

    // travel_distance_events
    "travel_distance_events: {
        // a series of distances, e.g. 0.0 or 1.0, that trigger the event
        // these get fired when the emitter has moved by the specified input
		    // distance, e.g. one line might be:
        // "0.4": "event"
        "distance": [ <string>, ... ]
        "distance": <string>
    }

    // looping_travel_distance_events
    "looping_travel_distance_events: [
        // a series of events that occur at set intervals
    		// these get fired every time the emitter has moved the specified input
    		// distance from the last time it was fired.
    		// An example for how to format these events would be:
        // {
        //   "distance": 1.0,
        //   "effects": [ "effect_one" ]
        // },
        // {
        //   "distance": 2.0,
        //   "effects": [ "effect_two" ]
        // }
		//
		// Note that "effect_one" and "effect_two" must be defined events within the particle_effect
    ]

}
```
