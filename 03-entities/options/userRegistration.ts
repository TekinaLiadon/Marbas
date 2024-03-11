import { t } from "elysia";
export default {
  body: t.Object({
    email: t.String({
      format: "email",
      error: "Invalid email",
    }),
    pasword: t.String(),
  }),
  response: {
    200: t.Object(
      {
        status: t.Boolean(),
      },
      {
        description: "Чисто для подтверждения, что письмо отправлено",
      }
    ),
    400: t.Object(
      {
        message: t.String(),
      },
      {
        description: "Не получилось отправить письмо",
      }
    ),
  },
  detail: {
    tags: ["Auth"],
    description: "Получение письма",
    summary: "1.2 Регистрация",
    // deprecated: true,
  },
};
