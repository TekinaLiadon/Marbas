import userAuth from "./options/userAuth";
import userRegistration from "./options/userRegistration";
import userCode from "./options/userCode";
export default {
  userAuth,
  userRegistration,
  userCode,
  userLogout: {
    detail: {
      tags: ["Auth"],
      description: "Удаление токена",
      summary: "1.4 Логаут",
    },
  },
};
