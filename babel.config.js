module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "nativewind/babel", // Bu önce gelmeli
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
  };
};
