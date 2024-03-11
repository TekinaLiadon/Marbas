import nodemailer from "nodemailer";
import { randomInt } from "node:crypto";
export default async (body, store) => {
  var transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.yandex.ru",
    port: 465,
    auth: {
      user: Bun.env.EMAIL_MAIL,
      pass: Bun.env.PASS_MAIL,
    },
  });
  const n = randomInt(10000, 99999);
  let result = await transporter.sendMail({
    from: "marbasd@yandex.ru",
    to: body.email,
    subject: "Код для регистрации",
    text: "This message with attachments.",
    html: `Ваш код <strong>${n}</strong>.`,
  });
  const status = result.response.substr(0, 3) == "250";
  if (!status) throw { message: "Письмо не отправлено", code: 400 };
  const bcryptHash = await Bun.password.hash(body.password, {
    algorithm: "bcrypt",
    cost: 7,
  });
  await store.redis.connect();
  await store.redis.hSet(body.email, {
    code: n,
    password: bcryptHash,
  });
  await store.redis.expire(body.email, 600);
  // const value = await store.redis.hGetAll(body.email);
  await store.redis.disconnect();
  return {
    status,
  };
};
