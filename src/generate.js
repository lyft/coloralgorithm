/* eslint-disable camelcase */
import chroma from 'chroma-js';

import * as Curves from './curves';

function distribute(value, rangeA, rangeB) {
  const [fromLow, fromHigh] = Array.from(rangeA);
  const [toLow, toHigh] = Array.from(rangeB);

  const result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow));

  if (toLow < toHigh) {
    if (result < toLow) { return toLow; }
    if (result > toHigh) { return toHigh; }
  } else {
    if (result > toLow) { return toLow; }
    if (result < toHigh) { return toHigh; }
  }

  return result;
}

export default function ({ specs }) {
  function generateNumberOfSteps(curve, steps) {
    const array = [];

    Array.from(Array(steps).keys()).forEach((step) => {
      const value = curve(step / (steps - 1));
      array.push(value);
    });
    array.reverse();
    return array;
  }

  let lum_array = generateNumberOfSteps(Curves[specs.lum_curve], specs.steps);
  let sat_array = generateNumberOfSteps(Curves[specs.sat_curve], specs.steps);
  let hue_array = generateNumberOfSteps(Curves[specs.hue_curve], specs.steps);
  const lum_array_adjusted = [];
  const sat_array_adjusted = [];
  const hue_array_adjusted = [];

  lum_array.forEach((step) => {
    lum_array_adjusted.push(
      distribute(step, [0, 1], [specs.lum_end * 0.01, specs.lum_start * 0.01], true),
    );
  });

  sat_array.forEach((step) => {
    let sat_step = distribute(step, [0, 1], [specs.sat_start * 0.01, specs.sat_end * 0.01], true);

    sat_step *= (specs.sat_rate * 0.01);
    sat_array_adjusted.push(sat_step);
  });

  hue_array.forEach((step) => {
    hue_array_adjusted.push(distribute(step, [0, 1], [specs.hue_start, specs.hue_end]));
  });

  sat_array_adjusted.reverse();
  hue_array_adjusted.reverse();

  lum_array = lum_array_adjusted;
  sat_array = sat_array_adjusted;
  hue_array = hue_array_adjusted;

  const colorMap = [];


  lum_array.forEach((step, i) => {
    const params = {
      hue: hue_array[i],
      saturation: sat_array[i],
      luminosity: lum_array[i],
    };

    if (params.saturation > 1) { params.saturation = 1; }

    const hex = chroma(chroma.hsv([params.hue, params.saturation, params.luminosity]));

    const contrastWhite = chroma.contrast(hex, 'white').toFixed(2);
    const contrastBlack = chroma.contrast(hex, 'black').toFixed(2);

    let displayColor = '';
    if (contrastWhite >= 4.5) { displayColor = 'white'; } else { displayColor = 'black'; }

    const colorObj = {
      hex: chroma(hex).hex(),
      hue: chroma(hex).hsv()[0],
      sat: chroma(hex).hsv()[1],
      lum: chroma(hex).hsv()[2],
      hsv: chroma(hex).hsv(),
      hsl: chroma(hex).hsl(),
      rgb: chroma(hex).rgb(),
      hueRange: [specs.hue_start, specs.hue_end],
      steps: specs.steps,
      label: specs.modifier * i,
      contrastBlack,
      contrastWhite,
      displayColor,
    };
    colorMap.push(colorObj);
  });

  return colorMap;
}
