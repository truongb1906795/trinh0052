const { default: Vuetify } = require("vuetify/lib");

module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  devServer: {
    proxy: "http://localhost:5000",
  },
};
 