# レポジトリの説明

RouteHandlers を Hono で置き換えるためのデモアプリ

# 初期のディレクトリ構成

```
app/
├── api/
│   ├── fuga/
│   │   └── route.ts         // POST /api/fuga?name=...
│   └── hoge/
│       └── [id]/
│           └── route.ts     // GET /api/hoge/[id]
├── layout.tsx
└── page.tsx
```

# 置き換え後のディレクトリ構成
