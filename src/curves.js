import bezier from 'bezier-easing';

export const linear = bezier(0.5, 0.5, 0.5, 0.5);

export const easeInCubic = bezier(0.55, 0.055, 0.675, 0.19);
export const easeOutCubic = bezier(0.215, 0.61, 0.355, 1);
export const easeInOutCubic = bezier(0.645, 0.045, 0.355, 1);

export const easeInSine = bezier(0.47, 0, 0.745, 0.715);
export const easeOutSine = bezier(0.39, 0.575, 0.565, 1);
export const easeInOutSine = bezier(0.445, 0.05, 0.55, 0.95);


export const easeInQuad = bezier(0.55, 0.085, 0.68, 0.53);
export const easeOutQuad = bezier(0.25, 0.46, 0.45, 0.94);
export const easeInOutQuad = bezier(0.455, 0.03, 0.515, 0.955);

export const easeInQuart = bezier(0.895, 0.03, 0.685, 0.22);
export const easeOutQuart = bezier(0.165, 0.84, 0.44, 1);
export const easeInOutQuart = bezier(0.77, 0, 0.175, 1);

export const easeInCirc = bezier(0.6, 0.04, 0.98, 0.335);
export const easeOutCirc = bezier(0.075, 0.82, 0.165, 1);
export const easeInOutCirc = bezier(0.785, 0.135, 0.15, 0.86);

export const easeInQuint = bezier(0.755, 0.05, 0.855, 0.06);
export const easeOutQuint = bezier(0.23, 1, 0.32, 1);
export const easeInOutQuint = bezier(0.86, 0, 0.07, 1);

export const easeInExpo = bezier(0.95, 0.05, 0.795, 0.035);
export const easeOutExpo = bezier(0.19, 1, 0.22, 1);
export const easeInOutExpo = bezier(1, 0, 0, 1);

export const easeInBack = bezier(0.6, -0.28, 0.735, 0.045);
export const easeOutBack = bezier(0.175, 0.885, 0.32, 1.275);
export const easeInOutBack = bezier(0.68, -0.55, 0.265, 1.55);
