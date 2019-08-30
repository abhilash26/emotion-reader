////////////////////////////////////////////////////////////////////////////////

const EXPRESSION2EMOTION = {
  // Anger
  anger: {
    0: -0.5,
    1: -0.5,
    2: 1,
    3: 1,
    4: -0.6,
    5: -0.6,
    6: 0,
    7: 0.05,
    8: 0.05,
    9: 0.05,
    10: -0.3
  },
  // Fear
  fear: {
    0: -0.5,
    1: -0.5,
    2: -0.1,
    3: -0.1,
    4: 0.3,
    5: 0.3,
    6: 0.1,
    7: 0.3,
    8: -0.1,
    9: -0.1,
    10: -0.3
  },
  // Happy
  happy: {
    0: 0.35,
    1: 0.35,
    2: -0.1,
    3: -0.1,
    4: 0.1,
    5: 0.1,
    6: 0.15,
    7: -0.2,
    8: 0,
    9: 0,
    10: 0.15
  },
  // Sad
  sad: {
    0: -0.3,
    1: -0.3,
    2: 0.15,
    3: 0.15,
    4: -0.05,
    5: -0.05,
    7: 0.9,
    6: -0.05,
    8: 0,
    9: 0,
    10: -0.05
  },
  // Surprised
  surprise: {
    0: 0,
    1: 0,
    2: -0.3,
    3: -0.3,
    4: 0.25,
    5: 0.25,
    6: 0.5,
    7: -0.05,
    8: -0.25,
    9: -0.25,
    10: -0.15
  }
};

///////////////////////////////////////////////////////////////////////////////

/**
 */
function get_emotions() {
  for (const emotion in EXPRESSION2EMOTION) {
    if (EXPRESSION2EMOTION.hasOwnProperty(emotion)) {
      const config = EXPRESSION2EMOTION[emotion];
      let mean = 0,
        count = 0;
      for (const key in config) {
        if (config.hasOwnProperty(key)) {
          const value = parseFloat(expressions[parseInt(key)]);
          const weight = parseFloat(config[key]);
          mean += value * weight;
          count++;
        }
      }
      emotions[emotion] = mean < 0 ? 0 : mean;
    }
  }
  return emotions;
}
