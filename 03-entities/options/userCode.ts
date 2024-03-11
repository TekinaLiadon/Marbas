import { error, t } from "elysia";
export default {
  body: t.Object({
    email: t.String({
      format: "email",
      error: {
        error: "Invalid email",
      },
    }),
    code: t.Number({
      minimum: 10000,
      maximum: 99999,
    }),
  }),
  response: t.Object({
    token: t.String(),
  }),
  detail: {
    tags: ["Auth"],
    description: "Проверка кода из письма",
    summary: "1.3 Проверка кода",
  },
};
