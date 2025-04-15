# レポジトリの説明

RouteHandlers を Hono で置き換えるためのデモアプリ

# 初期のディレクトリ構成

```
app/
├── api/
   ├── fuga/
   │   └── route.ts         // POST /api/fuga?name=...
   └── hoge/
       └── [id]/
           └── route.ts     // GET /api/hoge/[id]
```

# 置き換え後のディレクトリ構成
```
app/
└── api/
    └── [[..route]]/             // Catch-all APIルート（Honoエントリポイント）
        ├── model/
        │   ├── fuga.ts           // fuga に関する Zod スキーマ定義
        │   └── hoge.ts           // hoge に関する Zod スキーマ定義
        ├── fugaApi.ts            // fuga API のルート定義（createRoute）
        ├── hogeApi.ts            // hoge API のルート定義（createRoute）
        └── route.ts              // Honoルーターの作成と統合、およびOpenAPI/Swagger UIのエンドポイント定義

```
