import { Request } from "express";
export const buildHostLink = ({ req }: { req: Request }) => {
  return req.protocol + "://" + req.get("host") + req.originalUrl;
};

export const buildStaticHostLink = ({ req }: { req: Request }) => {
  return req.protocol + "://" + req.get("host");
};
