# 旅遊評論論壇

## 介紹

這是一個使用 Node.js + MySQL 打造的旅遊評論論壇，主要提供瀏覽、追蹤、評論旅遊景點的功能。

## 測試用帳號

-管理者:

```
email : root@example.com
password: 12345678
```

-使用者:

```
email : user1@example.com
password: 12345678
```

---

## 功能

- 可以觀看全部景點
- 使用者需註冊會員並登入才能進行收藏以及評論
- 使用者可以在景點新增評論
- 使用者可以追蹤景點
- 管理者可以新增、刪除、修改景點資訊
- 管理者可以新增、刪除、修改景點分類資訊
- 管理者可以在刪除景點的評論

---

## API Doc

API 設計文件資料:

## https://github.com/Ian920511/travel_api/blob/main/API_document.md

---

## ERD (Entity Relationship Diagram)

![travel_ERD.jpg](./public/db.PNG)

---

## Backend Technique

### Environment

- Node.js/Express.js

### Database

- MySQL

### Third Party Library

- jsonwebtoken
- bcrypt
- sequelize

### Version Control

- Git/GitHub

---

## 開始使用

1.先確認有安裝 node.js 與 npm

2.開啟終端機(Terminal)，clone 此專案

```bash
git clone https://github.com/Ian920511/travel_api.git
```

3.初始化

```bash
cd travel_api //進入存放檔案的資料夾
npm install  //安裝插件
```

4.新增 .env 檔，設定環境變數連線，並根據 .env.example 檔案內資訊設置環境變數

5.安裝 My SQL 在 SQL Workbench 輸入

```bash
drop database if exists travel;
create database travel;
use travel;
```

6. 在 ./config/config.json，並修改 'development' 部分中的 'username' 和 'password'，以對應你本地的 Sequelize 設置。

7.安裝完成後，需建立資料庫及新增種子資料，輸入下方程式碼:

```bash
npx sequelize db:migrate:all
npx sequelize db:seed:all
```

8.完成後，輸入

```bash
npm run start
```

9.看見此行訊息則代表順利運行

```bash
Sever is running on http://localhost:3000
```

10.可以使用以下帳號密碼進行測試

```bash
管理者:
account: root@example.com
password: 12345678

使用者:
account: user1@example.com
password: 12345678
```

11.若需要暫停伺服器，則在 ternimal 輸入

```bash
ctrl + c
```

---
