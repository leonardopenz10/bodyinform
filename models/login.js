function verifyFields(user, password) {
  return typeof user === "string" && typeof password === "string";
}

exports.verifyFields = verifyFields;
