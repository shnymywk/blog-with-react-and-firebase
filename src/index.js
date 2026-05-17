import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// reactの配下に取得したHTML部分のrootをおくことで操作することができる
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 開発中に問題がおきた場合に知らせてくれるモード
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
