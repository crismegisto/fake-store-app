module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          screens: './src/screens',
          config: './src/config',
          constants: './src/constants',
          interfaces: './src/interfaces',
          services: './src/services',
          slices: './src/slices',
          utils: './src/utils'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
