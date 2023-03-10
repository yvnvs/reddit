import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import React from "react";

const AuthButtons: React.FC = () => {
  const [aauthModalState, setAuthModalState] = useRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log in
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign up
      </Button>
    </>
  );
};
export default AuthButtons;
