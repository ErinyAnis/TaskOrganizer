import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ModeToggle";

const Nav = () => {
  return (
    <nav className="mb-8 mt-3 flex items-center justify-between">
      <ModeToggle />
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

export default Nav;
