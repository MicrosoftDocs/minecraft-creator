---
author: mammerla
ms.author: mikeam
title: "Molang Math Functions Documentation - Molang Math Functions"
description: "A reference document describing all current Molang Math Functions"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Math Functions Documentation

| Molang Math Functions | Description |
|:-----|:----------|
| [math.abs(value)](mathfunctions/math_abs.md)| Absolute value of value |
| [math.acos(value)](mathfunctions/math_acos.md)| arccos of value |
| [math.asin(value)](mathfunctions/math_asin.md)| arcsin of value |
| [math.atan(value)](mathfunctions/math_atan.md)| arctan of value |
| [math.atan2(y, x)](mathfunctions/math_atan2.md)| arctan of y/x. |
| [math.ceil(value)](mathfunctions/math_ceil.md)| Round value up to nearest integral number |
| [math.clamp(value, min, max)](mathfunctions/math_clamp.md)| Clamp value to between min and max inclusive |
| [math.copy_sign(A, B)](mathfunctions/math_copy_sign.md)| Compose a floating-point value with the magnitude of `x` and the sign of `y`. |
| [math.cos(value)](mathfunctions/math_cos.md)| Cosine (in degrees) of value |
| [math.die_roll(num, low, high)](mathfunctions/math_die_roll.md)| Returns the sum of 'num' random numbers, each with a value from low to high. |
| [math.die_roll_integer(num, low, high)](mathfunctions/math_die_roll_integer.md)| Returns the sum of 'num' random integer numbers, each with a value from low to high. |
| [math.ease_in_back(start, end, 0_to_1)](mathfunctions/math_ease_in_back.md)| Output goes from start to end via 0_to_1, overshooting backward before accelerating into the end |
| [math.ease_in_bounce(start, end, 0_to_1)](mathfunctions/math_ease_in_bounce.md)| Output goes from start to end via 0_to_1, starting with bounce oscillations and settling into the end |
| [math.ease_in_circ(start, end, 0_to_1)](mathfunctions/math_ease_in_circ.md)| Output goes from start to end via 0_to_1, starting slow and accelerating along a circular curve toward the end |
| [math.ease_in_cubic(start, end, 0_to_1)](mathfunctions/math_ease_in_cubic.md)| Output goes from start to end via 0_to_1, starting slow and accelerating rapidly toward the end |
| [math.ease_in_elastic(start, end, 0_to_1)](mathfunctions/math_ease_in_elastic.md)| Output goes from start to end via 0_to_1, starting with elastic oscillations before accelerating into the end |
| [math.ease_in_expo(start, end, 0_to_1)](mathfunctions/math_ease_in_expo.md)| Output goes from start to end via 0_to_1, starting slow and accelerating extremely rapidly toward the end |
| [math.ease_in_out_back(start, end, 0_to_1)](mathfunctions/math_ease_in_out_back.md)| Output goes from start to end via 0_to_1, overshooting at both start and end, with smoother change in the middle |
| [math.ease_in_out_bounce(start, end, 0_to_1)](mathfunctions/math_ease_in_out_bounce.md)| Output goes from start to end via 0_to_1, starting and ending with bounce oscillations, smoother in the middle |
| [math.ease_in_out_circ(start, end, 0_to_1)](mathfunctions/math_ease_in_out_circ.md)| Output goes from start to end via 0_to_1, starting and ending slow, with circular acceleration and deceleration in the middle |
| [math.ease_in_out_cubic(start, end, 0_to_1)](mathfunctions/math_ease_in_out_cubic.md)| Output goes from start to end via 0_to_1, starting slow, accelerating rapidly in the middle, then slowing again at the end |
| [math.ease_in_out_elastic(start, end, 0_to_1)](mathfunctions/math_ease_in_out_elastic.md)| Output goes from start to end via 0_to_1, oscillating elastically at both start and end, with stable change in the middle |
| [math.ease_in_out_expo(start, end, 0_to_1)](mathfunctions/math_ease_in_out_expo.md)| Output goes from start to end via 0_to_1, starting and ending slow, with extremely rapid change in the middle |
| [math.ease_in_out_quad(start, end, 0_to_1)](mathfunctions/math_ease_in_out_quad.md)| Output goes from start to end via 0_to_1, starting slow, accelerating in the middle, then slowing again at the end |
| [math.ease_in_out_quart(start, end, 0_to_1)](mathfunctions/math_ease_in_out_quart.md)| Output goes from start to end via 0_to_1, starting slow, accelerating very rapidly in the middle, then slowing again at the end |
| [math.ease_in_out_quint(start, end, 0_to_1)](mathfunctions/math_ease_in_out_quint.md)| Output goes from start to end via 0_to_1, starting slow, accelerating extremely rapidly in the middle, then slowing again at the end |
| [math.ease_in_out_sine(start, end, 0_to_1)](mathfunctions/math_ease_in_out_sine.md)| Output goes from start to end via 0_to_1, starting and ending slow, with smoother change in the middle |
| [math.ease_in_quad(start, end, 0_to_1)](mathfunctions/math_ease_in_quad.md)| Output goes from start to end via 0_to_1, starting slow and accelerating toward the end |
| [math.ease_in_quart(start, end, 0_to_1)](mathfunctions/math_ease_in_quart.md)| Output goes from start to end via 0_to_1, starting slow and accelerating very rapidly toward the end |
| [math.ease_in_quint(start, end, 0_to_1)](mathfunctions/math_ease_in_quint.md)| Output goes from start to end via 0_to_1, starting slow and accelerating extremely rapidly toward the end |
| [math.ease_in_sine(start, end, 0_to_1)](mathfunctions/math_ease_in_sine.md)| Output goes from start to end via 0_to_1, starting slow and accelerating smoothly toward the end |
| [math.ease_out_back(start, end, 0_to_1)](mathfunctions/math_ease_out_back.md)| Output goes from start to end via 0_to_1, overshooting past the end before settling into it |
| [math.ease_out_bounce(start, end, 0_to_1)](mathfunctions/math_ease_out_bounce.md)| Output goes from start to end via 0_to_1, approaching the end with bounce oscillations that diminish over time |
| [math.ease_out_circ(start, end, 0_to_1)](mathfunctions/math_ease_out_circ.md)| Output goes from start to end via 0_to_1, starting fast and decelerating along a circular curve toward the end |
| [math.ease_out_cubic(start, end, 0_to_1)](mathfunctions/math_ease_out_cubic.md)| Output goes from start to end via 0_to_1, starting fast and decelerating rapidly toward the end |
| [math.ease_out_elastic(start, end, 0_to_1)](mathfunctions/math_ease_out_elastic.md)| Output goes from start to end via 0_to_1, overshooting the end with elastic oscillations before settling |
| [math.ease_out_expo(start, end, 0_to_1)](mathfunctions/math_ease_out_expo.md)| Output goes from start to end via 0_to_1, starting extremely fast and decelerating gradually toward the end |
| [math.ease_out_quad(start, end, 0_to_1)](mathfunctions/math_ease_out_quad.md)| Output goes from start to end via 0_to_1, starting fast and decelerating toward the end |
| [math.ease_out_quart(start, end, 0_to_1)](mathfunctions/math_ease_out_quart.md)| Output goes from start to end via 0_to_1, starting fast and decelerating very rapidly toward the end |
| [math.ease_out_quint(start, end, 0_to_1)](mathfunctions/math_ease_out_quint.md)| Output goes from start to end via 0_to_1, starting fast and decelerating extremely rapidly toward the end |
| [math.ease_out_sine(start, end, 0_to_1)](mathfunctions/math_ease_out_sine.md)| Output goes from start to end via 0_to_1, starting fast and decelerating smoothly toward the end |
| [math.exp(value)](mathfunctions/math_exp.md)| Returns _e_ raised to the `value` power |
| [math.floor(value)](mathfunctions/math_floor.md)| Round value down to nearest integral number |
| [math.hermite_blend(value)](mathfunctions/math_hermite_blend.md)| Interpolate points on a smooth curve using one of the Hermite Basis functions: `3t^2 - 2t^3`. |
| [math.inverse_lerp(start, end, value)](mathfunctions/math_inverse_lerp.md)| Returns the normalized progress between start and end given value |
| [math.lerp(start, end, 0_to_1)](mathfunctions/math_lerp.md)| Computes the linear interpolation between `a` and `b` with interpolation weighting factor `t` in the range `[0, 1]`, where `0 = a` and `1 = b`. |
| [math.lerprotate(start, end, 0_to_1)](mathfunctions/math_lerprotate.md)| Computes a linear interpolation around a circle in the shortest direction from `a` degrees to `b` degrees with interpolation weighting factor `t` (see `math.lerp`). |
| [math.ln(value)](mathfunctions/math_ln.md)| Natural logarithm of value |
| [math.max(A, B)](mathfunctions/math_max.md)| Return highest value of A or B |
| [math.min(A, B)](mathfunctions/math_min.md)| Return lowest value of A or B |
| [math.min_angle(value)](mathfunctions/math_min_angle.md)| Minimize angle magnitude (in degrees) into the range [-180, 180) |
| [math.mod(value, denominator)](mathfunctions/math_mod.md)| Return the remainder of value / denominator |
| [math.pi](mathfunctions/math_pi.md)| Returns the float representation of the constant pi. |
| [math.pow(base, exponent)](mathfunctions/math_pow.md)| Elevates `base` to the `exponent`'th power |
| [math.random(low, high)](mathfunctions/math_random.md)| Random value between low and high inclusive |
| [math.random_integer(low, high)](mathfunctions/math_random_integer.md)| Random integer value between low and high inclusive |
| [math.round(value)](mathfunctions/math_round.md)| Round value to nearest integral number |
| [math.sign(value)](mathfunctions/math_sign.md)| Returns 1 if value is positive, -1 otherwise |
| [math.sin(value)](mathfunctions/math_sin.md)| Sine (in degrees) of value |
| [math.sqrt(value)](mathfunctions/math_sqrt.md)| Square root of value |
| [math.trunc(value)](mathfunctions/math_trunc.md)| Round value towards zero |