Particle Lifetime Expression component

```json
"minecraft:particle_lifetime_expression": {
    // this expression makes the particle expire when true (non-zero)
    // The float/expr is evaluated once per particle
    // evaluated every frame
    "expiration_expression": <float/molang> <default:0>
 
    // alternate way to express lifetime
    // particle will expire after this much time
    // evaluated once
    "max_lifetime": <float/molang>
}
```
