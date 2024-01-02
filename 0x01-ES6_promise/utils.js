export const uploadPhoto = () => {
  return Promise.resolve({
    status: 200,
    body: "photo-profile-1",
  });
};

export const createUser = () => {
  return Promise.resolve({
    firstName: "Guillaume",
    lastName: "Salva",
  });
};
