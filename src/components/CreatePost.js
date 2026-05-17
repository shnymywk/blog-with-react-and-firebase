import { useEffect, useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

// 親からisAuthが渡される
const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  // DBのpostsを指定してaddDocで保存
  // DBの情報とは別にtitle,postText,authorをオブジェクトで取得
  const createPost = async () => {
    await addDoc(collection(db,"posts"),{
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })
    navigate("/");
  };

  // isAuthがfalseならloginへリダイレクト
  // 要するにcreatepostのpageはログインしてないと表示されず
  // ログイン画面に飛ばされるという仕組み
  // 再レンダリングなし
  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  },[])

  return (
    <div className="createPostPage" >
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input 
            type="text" 
            placeholder="タイトルを記入" 
            // 変更されたときのイベントを取得。その時の値をsetTitleで呼び出し
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea 
            placeholder="投稿内容を記入" 
            // 変更されたときのイベントを取得。その時の値をsetPostTextで呼び出し
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        {/* クリックでcreatePost関数が発火してDBに内容が保存される */}
        <button className="postButton" onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}
export default CreatePost