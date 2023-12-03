import database from "infra/database.js";

function status(request, response) {
  const result = database.query("SELECT 1 + 1");
  response.status(200).json({ chave: "valor" });
}

export default status;
