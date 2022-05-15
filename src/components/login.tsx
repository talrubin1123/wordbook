import { useEffect, useState } from "react";
import { Link,useHistory} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import {userState} from "../atom/userAtom";
import "./login.css";

import { IonImg } from '@ionic/react';
import { logInWithEmailAndPassword, signInWithGoogle, auth } from "../firebase";

import {FcGoogle} from 'react-icons/fc';
import imgIcon from '../icons/icon.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [loggedUser, setUserState] = useRecoilState(userState);
    const history = useHistory();


  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
  return (
    <div>
    <IonImg id='icon' src={imgIcon} />
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value!)}
          placeholder="E-mail Address"
        />
          <input
            type="password"
            className="login__textBox"
             value={password}
            onChange={(e) => setPassword(e.target.value!)}
            placeholder="Password"
            />
        <button
          className="login__btn"
          onClick={async () => {
            setUserState(await logInWithEmailAndPassword(email, password))
            loggedUser && history.push("/main");
        }
      }
        >
          Login
        </button>
        <button 
          className="login__btn login__google" 
          onClick={async () => {
            setUserState(await signInWithGoogle())
            loggedUser && history.push("/main");
          }
        }
          >
          Login with Google
          <FcGoogle id="googleBtn"/>
        </button>
        <div>
        </div>
        <div>
          Don't have an account? <Link id="registerBtn" to="/register">Register</Link> now.
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;