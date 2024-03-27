const SessionHandler = () => {
  let isUserLogged = false;
  const makeUserLoggedIn = () => {
    isUserLogged = true;
  };
  const makeUserLoggedOut = () => {
    isUserLogged = false;
  };
  const getLoggedInStatus = () => isUserLogged;

  return {
    makeUserLoggedIn,
    makeUserLoggedOut,
    getLoggedInStatus,
  };
};

export const { getLoggedInStatus, makeUserLoggedIn, makeUserLoggedOut } =
  SessionHandler();
