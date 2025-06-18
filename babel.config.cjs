module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { version: '2023-01' }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
  }