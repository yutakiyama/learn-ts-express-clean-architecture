# MEMO

気づいたこととか、内容忘れないようにここに残していく

---

## Prismaについて

### prisma migrate

[Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

- prisma/schema.prismaに初期のモデルを定義する
- 下記コマンドで、マイグレーションの作成とデータベース適用とPrisma Clientを作成

```bash
# 確認
prisma migrate status
# 実行
prisma migrate dev --name init

マイグレーション作成後にデータベースに適用だけする場合は下記でいけそう

```bash
prisma migrate deploy
```