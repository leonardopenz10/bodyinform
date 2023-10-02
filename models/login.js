function verifyFields(user, password) {
  if (typeof user === "string" && typeof password === "string") return true;
  else return false;
}

exports.verifyFields = verifyFields;
