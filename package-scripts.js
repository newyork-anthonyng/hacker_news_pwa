module.exports = {
  scripts: {
    default: "",

    build: {
      default: "webpack",

      watch: "webpack --watch"
    },

    dev: {
      default: "webpack-dev-server --port 8000 --config webpack.dev.config.js --progress --hot --inline --open"
    }
  }
};
