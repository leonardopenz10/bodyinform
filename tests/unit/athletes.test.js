const newAthlete = require("../../models/athletes");

test("Cadastro de novo aluno válido", () => {
  var athlete = newAthlete.newAthlete("123.456.789-01");
  expect(athlete).toBe("Aluno cadstrado com sucesso!");
});

test("Tentando cadastrar um aluno já cadastrado", () => {
  var athlete = newAthlete.newAthlete("123.456.789-00");
  expect(athlete).toBe("ATENÇÃO!! Aluno já cadastrado no sistema!");
});
