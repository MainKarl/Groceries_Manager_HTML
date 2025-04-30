import nookies from "nookies";
import getConfig from "next/config";
import { DEFAULT_COOKIE_MAX_AGE } from "src/constants";

const { publicRuntimeConfig: envConfig } = getConfig();

const self = {
  cookieKeys: {
    authorizationToken: `authorizationToken`,
    email: `email`,
    role: `role`,
  },

  getCookieName(name: string): string {
    return `${envConfig.COOKIE_PREFIX}${name}`;
  },

  destroy(name: string, ctx = {}) {
    self.set(name, "", ctx, { maxAge: -1 });
  },

  get(name: string, ctx = {}) {
    return nookies.get(ctx)[self.getCookieName(name)];
  },

  set(name: string, value: string, ctx = {}, options?: any) {
    const effectiveOptions = {
      path: "/",
      secure: !envConfig.HOST.includes("localhost"),
      sameSite: "strict",
      httpOnly: typeof window === "undefined",
      maxAge: DEFAULT_COOKIE_MAX_AGE,
      ...options,
    };

    nookies.set(ctx, self.getCookieName(name), value, effectiveOptions);
  },
};

export default self;
