import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atom/userAtom";


function MainPage() {
  const [loggedUser] = useRecoilState(userState);
  return (<h1>
      hello {loggedUser?.email}
  </h1>)
}

export default MainPage;