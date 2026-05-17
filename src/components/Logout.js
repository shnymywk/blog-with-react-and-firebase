import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () => {
    // Googleでログアウト　FirebaseのHPにて確認
    // signOut関数を実行するとlocalStorageの情報を削除
    // setIsAuthにfalseを私loginへリダイレクト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      {/* クリックで発火 */}
      <button onClick={logout}>ログアウト</button>
    </div>
  )
};
export default Logout