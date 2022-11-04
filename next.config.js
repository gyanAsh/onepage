const loaderUtils = require("loader-utils");
const withTM = require("next-transpile-modules")(["reshaped"]);

/** @type {import("next").NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    const rule = config.module.rules.find((rule) => "oneOf" in rule);

    if (rule && rule.oneOf) {
      rule.oneOf.forEach((loader) => {
        if (!Array.isArray(loader.use)) return;

        loader.use.forEach((item) => {
          if (!item.loader || !item.loader.includes("css-loader")) return;

          item.options = {
            ...item.options,
            modules: {
              ...item.options.modules,
              // You can customise the way css modules output classnames in your product using:
              getLocalIdent: (loaderContext, _, localName, options) => {
                return loaderUtils
                  .interpolateName(
                    loaderContext,
                    `[folder]_[name]__${localName}`,
                    options
                  )
                  .replace(/\.module_/, "_")
                  .replace(/[^a-zA-Z0-9-_]/g, "_")
                  .replace(/^(\d|--|-\d)/, "__$1");
              },
              mode: "local",
            },
          };
        });
      });
    }

    return config;
  },
});

module.exports = nextConfig;