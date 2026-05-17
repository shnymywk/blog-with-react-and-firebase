import React, { useEffect, useState } from 'react'
import './Home.css'
import { auth, db } from '../firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

const Home = () => {
    // postListの状態情報を設定、初期はnull
    const [ postList, setPostList ] = useState([])

    // getPostsを定義してgetPostsを実行
    useEffect(() => {
        // dbの中postsを指定してgetDocsで全て取り出しdataと定義する
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"))
            // 取り出したdataの中のdocs配列をmapで展開
            // 1つ1つをdocと名付け全てのdocのdata要素を取得し、keyをdata、idとしてdoc.idを取得
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))

            // doc.dataにはidが含まれないので自分で追加する必要がある
        }
        getPosts()
    },[])

    // idを使用する関数
    const handleDelete = async (id) => {
        // docのdbから"posts"とidを削除しhomeにリダイレクト
        await deleteDoc(doc(db, "posts", id))
        window.location.href = "/"
    }

    return (
        <div className="homePage">
            {/* postList配列をmapで展開し1つ1つのpostオブジェクトに */}
            {postList.map((post) => {
                return (
                    // postのidを使用して代入およびkeyとして重複管理
                    <div className="postContents" key ={post.id}>
                        <div className="postHeader">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="postTextContainer">
                            {post.postsText}
                        </div>
                        <div className="nameAndDeleteButton">
                            <h3>@{post.author.username}</h3>
                            {/* post.author.idが認証ユーザーのidと同じなら&以降を表示および実行可能 */}
                            {/* currentUserがいなければ表示なし */}
                            {post.author.id === auth.currentUser?.uid && (
                            <button onClick={() => handleDelete(post.id)}>削除</button>
                            )}
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
};

export default Home