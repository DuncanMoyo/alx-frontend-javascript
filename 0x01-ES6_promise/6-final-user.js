import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

const handleProfileSignup = (firstName, lastName, fileName) => {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((results) => {
    return results.map((result) => {
      return {
        status: result.status,
        value: result.status === "fulfilled" ? result.value : result.reason,
      };
    });
  });
};

export default handleProfileSignup;
