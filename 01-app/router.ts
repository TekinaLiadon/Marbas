import { Elysia } from "elysia";
import { list } from "../02-routes/index.js";
import options from "../03-entities/options.js";

const router = new Elysia({ prefix: "/api" })
  .group("/user", (app) =>
    app
      .post("/auth", () => list.user.auth.default, options.userAuth)
      .post(
        "/registration",
        async ({ body, store }) => {
          return await list.user.registration.default(body, store);
        },
        options.userRegistration
      )
      .post("/code", (all) => list.user.code.default(all), options.userCode)
      .delete("/logout", () => "a", options.userLogout)
      .get("/info", () => {
        return "a";
      })
  )
  .get("/", () => "Hello Elysia")
  .get("/plugin", () => "Hi")
  .get("/test", () => "Test");

export default router;
