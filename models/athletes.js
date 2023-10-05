function newAthlete(athlete_id) {
  if (athlete_id !== "123.456.789-00") return "Aluno cadstrado com sucesso!";
  else return "ATENÇÃO!! Aluno já cadastrado no sistema!";
}

exports.newAthlete = newAthlete;
