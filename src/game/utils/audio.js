const sfx = {
  eat: {
    frequency: 440,
    attack: 0.05,
    decay: 0.2,
    type: 'sine',
    volume: 2,
    pan: 0.8,
    pitchBend: 600,
    reverse: true,
    random: 100
  },
  death: {
    frequency: 16,
    decay: 1,
    type: 'sawtooth',
    dissonance: 50
  }
};

export default sfx;