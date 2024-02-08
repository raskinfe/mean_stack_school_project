import { Strategy, ExtractJwt } from "passport-jwt";
import { UserController } from "../controllers/UserController";
import { IUser } from "../models/User";

export const pass = (passport: any, secret: string | undefined): any => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: secret,
  };

  passport.use(
    new Strategy(options, function (
      jwtPayload: string | any,
      done: (arg0: null, arg1: boolean) => any
    ) {
      UserController.getUserById(
        jwtPayload?._user.id,
        (err: Error | any, user: any) => {
          if (err) {
            return done(err, false);
          }
          if (user !== null) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
    })
  );
};
