module.exports = {
  plugins: [
    require('postcss-preset-env')({
        autoprefixer: {
            grid: true,
        },
        features: {
            'nesting-rules': true,
        },
    })
  ]
}
