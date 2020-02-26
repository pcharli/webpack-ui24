module.exports = ({ file, options, env }) => ({
    plugins: {
      'autoprefixer': env === 'production' ? options.autoprefixer : true,
      'cssnano': env === 'production' ? options.cssnano : true
    }
  })