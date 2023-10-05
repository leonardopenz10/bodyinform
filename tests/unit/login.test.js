const login = require("../../models/login");

test("Campos de Usuário e Senha válidos", () => {
  var logon = login.verifyFields("admin", "senha");
  expect(logon).toBe(true);
});

test("Campos de Usuário e Senha inválidos - campo password numeral", () => {
  var logon = login.verifyFields("admin", 12345);
  expect(logon).toBe(false);
});

test("Campos de Usuário e Senha inválidos - campo user vazio", () => {
  var logon = login.verifyFields(null, "senha");
  expect(logon).toBe(false);
});

test("Campos de Usuário e Senha inválidos - campo password vazio", () => {
  var logon = login.verifyFields("admin", null);
  expect(logon).toBe(false);
});
/**
 * Faltam testes verificando se o usuário e senha existem no banco de dados
 */
