# Cloud Functions for Firebase サンプルプロジェクト

## 前提ソフトウェア
  - git
  - node.js

## インストール

firebase-toolsをインストールします。

```shell
npm install -g firebase-tools
```

本プロジェクトと関連ソフトウェアをインストールします。

```shell
git clone https://github.com/nashimelon/firebase-functions.git
cd firebase-functions/functions
npm install
```

## デプロイ

firebaseにログインするか、あなたのプロジェクトのトークンを環境変数FIREBASE_TOKENに設定してください。

```shell
#  firebaseにログインする場合
firebase login

# トークンを環境変数に設定する場合
export FIREBASE_TOKEN="<あなたのプロジェクトのトークン>"
```

あなたのFirebaseプロジェクトIDを環境変数に設定して、Cloud Functionsをビルドして、firebaseサーバにアップロードします。

```shell
export PROJECT_ID="<あなたのプロジェクトID>"
cd functions
npm run bundle
cd ..
firebase deploy --project ${PROJECT_ID}
```
