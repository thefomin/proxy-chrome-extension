import "react-router-dom";

export const ROUTES = {
  CONNECTION: "/",
  PROXY_LIST: "/proxy-list",
  SIGN_IN: "/auth/sign-in",
  SUGN_UP: "/auth/sign-up",
} as const;

export type PathParams = {
  // [ROUTES.PARAMS]: {
  // 	paramsId: string
  // }
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
