const config = () => ({
  plugins: [
    require('postcss-preset-env')({
        features: {
            'nesting-rules': true,
        },
    })
  ]
});

module.exports = config;
