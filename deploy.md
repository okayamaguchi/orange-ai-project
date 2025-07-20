# ORANGE AI Project - Deployment Guide

## 現在の状況
- unblue.jp/ai には古いバージョンのサイトが表示されている
- 新しいコード（ORANGE AI Project - 青春は青くない）をデプロイする必要がある

## 必要な作業

### 1. Netlify Dashboard での設定確認
1. https://app.netlify.com/ にアクセス
2. unblue.jp/ai に対応するサイトを選択
3. 「Site settings」→「Build & deploy」を確認

### 2. GitHubリポジトリとの連携確認
- 現在のリポジトリ: https://github.com/okayamaguchi/orange-ai-project
- ブランチ: main
- 最新コミット: Add Netlify configuration and basic auth setup

### 3. デプロイ方法の選択

#### 方法A: 手動アップロード（推奨）
1. Netlifyの「Deploys」タブを選択
2. 「Deploy manually」をクリック
3. プロジェクトフォルダをドラッグ&ドロップ

#### 方法B: GitHubリポジトリ連携の再設定
1. 現在のGit連携を削除
2. 新しいリポジトリを連携
3. 自動デプロイを設定

### 4. Basic認証の設定
- Netlify Dashboard > Site settings > Access control
- Password protection を有効化
- ユーザー名: admin
- パスワード: orange2025

### 5. 確認事項
- robots.txt が正しく配置されているか
- noindex メタタグが設定されているか
- Basic認証が機能しているか 