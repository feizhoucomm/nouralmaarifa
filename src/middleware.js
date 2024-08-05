// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["fr", "ar"],

//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: "fr",
// });

// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["fr", "ar"],

  // Used when no locale matches
  defaultLocale: "fr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|ar)/:path*"],
};
