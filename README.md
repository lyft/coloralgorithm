# coloralgorithm

A JavaScript function for producing color sets. Used to build Lyft's color system (Spectrum) and power [ColorBox](https://www.colorbox.io/).

## Background

- [Re-Approaching Color by Lyft Design](https://design.lyft.com/re-approaching-color-9e604ba22c88)
- [Designing a Comprehensive Color System by Linda Dong](https://www.rethinkhq.com/videos/designing-a-comprehensive-color-system-for-lyft)

## Usage

The function takes in a JavaScript object with a `specs` key that describes the properties of the desired color palette:

```javascript
import generate from "./src/generate";

const input = {
  specs: {
    // Number of colors
    steps: 11,
    // Hue Start Value (0 - 359)
    hue_start: 315,
    // Hue End Value (0 - 359)
    hue_end: 293,
    // Hue Curve (See Curves Section)
    hue_curve: "easeInQuad",
    // Saturation Start Value (0 - 100)
    sat_start: 4,
    // Saturation End Value (0 - 100)
    sat_end: 90,
    // Saturation Curve (See Curves Section)
    sat_curve: "easeOutQuad",
    // Saturation Rate (0 - 200)
    sat_rate: 130,
    // Luminosity Start Value (0 - 100)
    lum_start: 100,
    // Luminosity End Value (0 - 100)
    lum_end: 53,
    // Luminosity Curve (See Curves Section)
    lum_curve: "easeOutQuad",
    // Modifier Scale
    // Every generated color gets a modifier (label) that
    // indicates its lightness. A value of 10 results in
    // two-digit modifiers. The lightest color will be 0 (e.g. Red 0)
    // and the darkest color will be 100 (e.g. Red 100), given
    // that you generate 11 colors
    modifier: 10
  }
};

const palette = generate(input);
```

Contrary to ColorBox, this version of the algorithm _does not_ support a lock color.

## Example Output

The function returns the generated palette as an array of color objects:

```javascript
[
  {
    contrastBlack: "19.32",
    contrastWhite: "1.09",
    displayColor: "black",
    hex: "#fff2fc",
    hsl: [315, 1, 0.974],
    hsv: [314.99999999999994, 0.052000000000000074, 1],
    hue: 314.99999999999994,
    hueRange: [315, 293],
    label: 0,
    lum: 1,
    rgb: [255, 242, 252],
    sat: 0.052000000000000074,
    steps: 11
  },
  ...
];
```

## Curves

Hue, Saturation, and Luminosity all allow you to specify a curve. The following curves are supported:

- _easeInQuad_ (Quad - EaseIn)
- _easeOutQuad_ (Quad - EaseOut)
- _easeInOutQuad_ (Quad - EaseInOut)
- _easeInQuart_ (Quart - EaseIn)
- _easeOutQuart_ (Quart - EaseOut)
- _easeInOutQuart_ (Quart - EaseInOut)
- _easeInSine_ (Sine - EaseIn)
- _easeOutSine_ (Sine - EaseOut)
- _easeInOutSine_ (Sine - EaseInOut)
- _easeInCubic_ (Cubic - EaseIn)
- _easeOutCubic_ (Cubic - EaseOut)
- _easeInOutCubic_ (Cubic - EaseInOut)
- _easeInExpo_ (Expo - EaseIn)
- _easeOutExpo_ (Expo - EaseOut)
- _easeInOutExpo_ (Expo - EaseInOut)
- _easeInQuint_ (Quint - EaseIn)
- _easeOutQuint_ (Quint - EaseOut)
- _easeInOutQuint_ (Quint - EaseInOut)
- _easeInCirc_ (Circ - EaseIn)
- _easeOutCirc_ (Circ - EaseOut)
- _easeInOutCirc_ (Circ - EaseInOut)
- _easeInBack_ (Back - EaseIn)
- _easeOutBack_ (Back - EaseOut)
- _easeInOutBack_ (Back - EaseInOut)
- _linear_ (linear)
