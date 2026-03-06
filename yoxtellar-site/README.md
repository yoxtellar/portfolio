# yoxtellar portfolio

## コンテンツの更新方法

作品を追加・編集するには **`_data/works.yml`** だけ編集すればOK。

```yaml
- title: "作品名"
  tag: composer        # composer / live / release / vr-metaverse
  thumb: "assets/images/work1.jpg"  # 画像をassets/imagesに置く
  url: "https://..."   # クリック先URL（なければ空でOK）
```

## GitHub Pagesへのデプロイ

1. このフォルダをGitHubリポジトリとして push
2. GitHub → Settings → Pages → Source を `main` ブランチ・`/ (root)` に設定
3. 自動でビルドされて公開される

## ローカルで確認する場合

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## FuturaPT の設定

1. Adobe Fonts でプロジェクト作成 → embed code取得
2. `_config.yml` の `adobe_fonts_id` にIDを入力

```yaml
adobe_fonts_id: "XXXXXXX"
```
