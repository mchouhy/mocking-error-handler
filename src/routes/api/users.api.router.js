// Importación del Router de Express JS:
import { Router } from "express";
// Creación del Router de Sessions:
const usersApiRouter = Router();
// Importación de Passport:
import passport from "passport";
// Importación del controlador de usuarios:
import { UserController } from "../../controllers/userController.js";

const userController = new UserController();

// Ruta POST de register:
usersApiRouter.post("/register", userController.register);

// Ruta POST de login:
usersApiRouter.post("/login", userController.login);

// Ruta GET de logout de la sesión:
usersApiRouter.get("/logout", userController.logout.bind(userController));

// Ruta Get de profile de usuario:
usersApiRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userController.profile
);

// Ruta Get de profile de admin:
usersApiRouter.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  userController.admin
);

// Exportación del router del api de users:
export { usersApiRouter };
