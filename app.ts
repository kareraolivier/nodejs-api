import express from "express";
import { Request, Response } from "express";
const app = express();
import session from "express-session";
import blogsRoutes from "./src/blogs";
// import usersRouter from "./users/routes";
import { noStore } from "./src/middlewares";
const passport = require("passport");

//google auth
const { OAuth2Client } = require("google-auth-library");
const oauth2Client = new OAuth2Client();
require("./src/users/auth");

app.use(express.json());

// Middleware
app.use(noStore);

app.use(
  session({
    secret: process.env.SECRETKEY as string,
    cookie: {
      secure: false,
      maxAge: 60 * 60 * 1000,
      sameSite: "lax",
    },
  })
);
// Routes
app.get("/", (_: Request, res: Response) =>
  res.send("Hello welcome to my blog")
);

app.get(
  "/divine",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
app.get("/login", (_: Request, res: Response) =>
  res.send("<a href='/divine'>Karera login</a>")
);

app.get("/welcome", (_: Request, res: Response) =>
  res.send(`<div>
    <h1>Karera login is not successfull</h1>
    <p>Go to the next page here:</p>
    <a href='/nextpage'>nextpage</a>
    </div>`)
);

app.get("/nextpage", (_: Request, res: Response) =>
  res.send(`<div>
    <h1>Karera welcome here</h1>
    <p>Go back to the login page here:</p>
    <a href='/login'>login</a>
    </div>`)
);
app.get("/failure", (_: Request, res: Response) =>
  res.send(
    `<div>
    <h1>Karera login is not successfull</h1>
    <p>Go back to the login page here:</p>
    <a href='/login'>login</a>
    </div>`
  )
);
app.get(
  "/karera",
  passport.authenticate("google", {
    successRedirect: "/welcome",
    failureRedirect: "/failure",
  })
);
app.use("/blogs", blogsRoutes.router);
// app.use("/users", usersRouter);

export default app;
