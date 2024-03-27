import { TRPCError } from "@trpc/server";
import { randomUUID } from "crypto";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(({ input, ctx }) => {
      const { REGISTERED_USER, LOGGED_IN_USER: loggedUser } = ctx;
      const foundUser = REGISTERED_USER.find(
        (user) => user.email === input.email,
      );
      const tmploggedUser = [...loggedUser];
      if (foundUser === undefined) {
        throw new TRPCError({
          message: "User not found",
          code: "NOT_FOUND",
        });
      }
      if (tmploggedUser.length > 0) {
        throw new TRPCError({
          message: "App is already signed in with a user",
          code: "CONFLICT",
        });
      }
      const user = {
        email: input.email,
        password: input.password,
        id: randomUUID(),
      };
      tmploggedUser.push(user);
      return { ...ctx, LOGGED_IN_USER: tmploggedUser };
    }),
  verifyOtp: publicProcedure
    .input(z.object({ otp: z.string() }))
    .mutation(({ input: { otp }, ctx }) => {
      const {
        FIXED_OTP,
        TMP_USER: tmpUser,
        LOGGED_IN_USER: loggedDetails,
        REGISTERED_USER,
      } = ctx;
      const isUserPresent = REGISTERED_USER.find(
        (inHouseUser) => inHouseUser.email === tmpUser.email,
      );
      const tmpRegisterredUser = [...REGISTERED_USER];
      const tmpLoggedDetails = [...loggedDetails];
      if (otp !== FIXED_OTP) {
        throw new TRPCError({
          message: "OTP is not Valid",
          code: "UNAUTHORIZED",
        });
      }
      tmpLoggedDetails.push(tmpUser);
      if (isUserPresent === undefined) {
        tmpRegisterredUser.push(tmpUser);
      }
      const resultCtx = {
        ...ctx,
        LOGGED_IN_USER: tmpLoggedDetails,
        REGISTERED_USER: tmpRegisterredUser,
      };
      return resultCtx;
    }),
  registerUser: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), password: z.string() }),
    )
    .mutation(({ input: { email, name, password }, ctx }) => {
      const { REGISTERED_USER } = ctx;
      const isUserAlreadyPresent = REGISTERED_USER.find(
        (user) => user.email === email,
      );
      if (isUserAlreadyPresent !== undefined)
        throw new TRPCError({
          message: "User already Registered",
          code: "CONFLICT",
        });
      const user = {
        email,
        name,
        password,
        id: randomUUID(),
      };
      console.log({ user });
      return { ...ctx, TMP_USER: user };
    }),
});
