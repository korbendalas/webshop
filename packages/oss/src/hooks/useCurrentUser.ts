import { useSelector } from "react-redux";

export function useCurrentUser() {
  const user = useSelector(({ app }: any) => app.user || null);
  const loggedIn = useSelector(({ app }: any) => app.loggedIn);
  return { ...user, loggedIn };
}
