# Component Gym 🏋️

Reactコンポーネント実装の練習・実験場

## 📋 概要

このリポジトリは、以下のことを行う
- [デジタル庁デザインシステム](https://design.digital.go.jp/dads/)を参考に、再利用可能なUIコンポーネントの実装練習
- React Hook Form、状態管理ライブラリ、アニメーションライブラリなど、様々なReactエコシステムのライブラリを活用したコンポーネント実装の実験場として使用

## 🛠 技術スタック

- **React 19.1** - 最新のReact機能を活用
- **TypeScript 5.9** - 型安全な開発環境
- **Vite 7** - 高速な開発サーバー
- **React Compiler** - 自動メモ化による最適化
- **pnpm** - 効率的なパッケージ管理
- **ESLint + Prettier** - コード品質と統一性の維持

## 📁 ディレクトリ構成

```
src/
├── components/
│   ├── dads/              # デジタル庁デザインシステム実装
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Select/
│   │   └── ...
│   ├── experiments/       # ライブラリ実験用
│   │   ├── rhf/          # React Hook Form実験
│   │   ├── animations/   # アニメーションライブラリ実験
│   │   └── ...
│   └── common/           # 共通コンポーネント
├── hooks/                 # カスタムフック
├── types/                 # 型定義
└── styles/                # グローバルスタイル
```

## 🚀 セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動（http://localhost:5173）
pnpm dev

# プロダクションビルド
pnpm build

# ビルドしたアプリのプレビュー
pnpm preview

# Lint実行
pnpm lint
```

## 📚 参考リンク

- [デジタル庁デザインシステム（DADS）](https://design.digital.go.jp/dads/)
- [React Compiler](https://react.dev/learn/react-compiler)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📝 開発メモ

### React Compilerについて
このプロジェクトではReact Compilerを有効化しています。自動メモ化によりパフォーマンスが最適化されますが、開発・ビルド時間に若干の影響があります。

### コーディング規約
- Prettierによる自動フォーマット
- ESLintルールに従ったコード記述
- 未使用のインポートは自動検出・削除
- import文の自動ソート（React → 外部ライブラリ → 内部モジュール）

---
