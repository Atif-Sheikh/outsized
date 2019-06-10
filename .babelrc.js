module.exports = function(api) {
  let obj = {
    presets: [
      [
        "next/babel",
        {
          "preset-env": {
            targets: {
              chrome: "49",
              safari: "9",
              ie: "11"
            }
          }
        }
      ]
    ],
    plugins: ["lodash"]
  };
  if (api.env(["development", "test"])) {
    obj.plugins.push([
      "emotion",
      {
        labelFormat: "[filename]-[local]",
        autoLabel: true
      }
    ]);
  }
  return obj;
};
