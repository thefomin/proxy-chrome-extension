import "react-router-dom";

export const ROUTES = {
  CONNECTION: "/",
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
