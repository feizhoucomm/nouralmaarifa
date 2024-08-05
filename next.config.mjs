import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //     locales: ["fr", "ar"],
  //     defaultLocale: "fr",
  //     localeDetection: false,
  // },
  // webpack(config) {
  //     config.module.rules.push({
  //         test: /\.svg$/,
  //         use: ["@svgr/webpack"],
  //     });
  //     return config;
  // },
  // async redirects() {
  //     return [
  //         {
  //             source: "/fr",
  //             destination: "/",
  //             permanent: true,
  //         },
  //         {
  //             source: "/ar",
  //             destination: "/",
  //             permanent: true,
  //         },
  //     ];
  // },
  // pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default withNextIntl(nextConfig);
