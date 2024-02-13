export type AuthContextType = {
  user: string | null;
  isLoggedIn: boolean;
  signIn: (user: string) => void;
  signOut: () => void;
};
