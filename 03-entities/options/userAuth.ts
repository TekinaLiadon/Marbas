import { t } from "elysia";
export default {
  body: t.Object({
    email: t.String({
      format: "email",
      error: "Invalid email",
    }),
    pasword: t.String(),
  }),
  response: t.Object({
    token: t.String(),
  }),
  detail: {
    tags: ["Auth"],
    description: "Получение токена",
    summary: "1.1 Авторизация",
  },
};
