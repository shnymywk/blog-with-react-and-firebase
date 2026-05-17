import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  // useNavigateはそのリンクへ誘導を行う関数
  const navigate = useNavigate();
  // Googleでログインをさせる関数
  const loginInWithGoogle = () => {
    // Googleでログイン　FirebaseのHPにて確認
    // 引数として認証機能とプロバイダの選択機能が与えられる
    signInWithPopup(auth, provider).then((result) => {
      // localStorageにisAuthというkey、trueという値を追加する
      localStorage.setItem("isAuth", true);
      // setIsAuthにtrueを渡してuseStateを更新
      setIsAuth(true);
      // homeにリダイレクト
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      {/* クリックで発火 */}
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
};
export default Login