const withTM = require('next-transpile-modules')(['reshaped'])

/** @type {import("next").NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    const rule = config.module.rules.find((rule) => 'oneOf' in rule)

    if (rule && rule.oneOf) {
      rule.oneOf.forEach((loader) => {
        if (!Array.isArray(loader.use)) return

        loader.use.forEach((item) => {
          if (!item.loader || !item.loader.includes('css-loader')) return

          // eslint-disable-next-line no-param-reassign
          const { modules } = item.options
          let changedModules = undefined
          if (modules) changedModules = { ...modules, mode: 'local' }
          item.options = { ...item.options, modules: changedModules }
        })
      })
    }

    return config
  },
})

module.exports = nextConfig