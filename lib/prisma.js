import { Prismaclient } from "@prisma/client";

export const db = globalThis.prisma || new Prismaclient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
