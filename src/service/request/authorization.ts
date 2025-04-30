import getConfig from "next/config";

import cookies from "src/service/util/cookies";
import { safeResponseJson } from "../util/response";
import { FetchError } from "../util/error";

const { publicRuntimeConfig: envConfig } = getConfig();

export const getAuthorizationToken = () => {};
export const setAuthorizationToken = (
  token: string,
  expireIn: number
): void => {
  cookies.set(
    cookies.cookieKeys.authorizationToken,
    token,
    {},
    { maxAge: expireIn - 3600 }
  );
};

export const getRole = (): number => {
  return Number(cookies.get(cookies.cookieKeys.role)) ?? 1;
};
export const setRole = (role: number): void => {
  cookies.set(cookies.cookieKeys.role, role.toString(), {});
};
