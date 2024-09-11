import tailwindConfig from "@repo/tailwind-config/tailwind.config";

const config = {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme?.extend,
      colors: {
        ...tailwindConfig.theme?.colors,
        customPrimary: "rgba(46, 38, 61, 0.9)",
      },
    },
  },
};

export default config;
