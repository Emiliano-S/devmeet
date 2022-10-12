const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./server/users.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "4548548478786";

const expiresIn = "1h";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

server.post("/api/auth/register", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Email & Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./server/users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    let newData = JSON.parse(data.toString());

    let last_item_id = newData.users[newData.users.length - 1].id;

    newData.users.push({
      id: last_item_id + 1,
      email: email,
      password: password,
    });
    let writeData = fs.writeFile(
      "./server/users.json",
      JSON.stringify(newData),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Incorrect Email or Password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.listen(3030, () => {
  console.log("Running fake api json server");
});
