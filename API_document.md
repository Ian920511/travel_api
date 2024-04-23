## Table of contents

- [ERD (Entity Relationship Diagram)](#erd-entity-relationship-diagram)
- [User](#user)
  - [POST /apis/users/login (User login)](#post-apisuserslogin-user-login)
  - [POST /apis/users/signup (User signup)](#post-apisuserssignup-user-signup)
- [Viewpoint](#viewpoint)
  - [GET /apis/viewpoints (Get all viewpoints)](#get-apisviewpoints-get-all-viewpoints)
  - [GET /apis/viewpoints/:viewpointId (Get specific viewpoint info)](#get-apisviewpointsviewpointId-get-specific-viewpoint-info)
  - [POST /apis/admin/viewpoints (Add new viewpoint)](#post-apisadminviewpoints-add-new-viewpoint)
  - [PUT /apis/admin/viewpoints/:viewpointId (Update viewpoint)](#put-apisadminviewpointsviewpointId-update-viewpoint)
  - [DELETE /apis/admin/viewpoints/:viewpointId (Delete viewpoint)](#delete-apisadminviewpointsviewpointId-delete-viewpoint)
- [Category](#category)
  - [GET /apis/categories (Get all categories)](#get-apiscategories-get-all-categories)
  - [POST /apis/admin/categories (Add new category)](#post-apisadmincategories-add-new-category)
  - [PUT /apis/admin/categories/:categoryId (Update category)](#get-apisadmincategoriescategoryId-update-category)
  - [DELETE /apis/admin/categories/:categoryId (Delete category)](#delete-apisadmincategoriescategoryId-delete-category)
- [Comment](#comment)
  - [GET /apis/comments/:viewpointId (Get all specific viewpoint's comments)](#get-apiscommentsviewpointId-get-all-specific-viewpoints-comments)
  - [POST /apis/comments/ (Add new comment on viewpoint)](#post-apiscomments-add-new-comment-on-viewpoint)
  - [DELETE /apis/admin/comments/:commentId (Delete comment)](#delete-apisadmincommentscommentId-delete-comment)
- [Favorite](#favorite)
  - [POST /apis/favorites/:viewpointId (Add favorite on viewpoint)](#post-apisfavoritesviewpointId-add-favorite-on-viewpoint)
  - [DELETE /apis/favorites/:viewpointId (Delete favorite on viewpoint)](#delete-apivsfavoritesviewpointId-delete-favorite-on-viewpoint)

## ERD (Entity Relationship Diagram)

![travel_ERD.jpg](./public/db.PNG)

# User

## POST /apis/users/login (User login)

User is able to login.

### Request Body

| Params   | Required | Type   | Description     |
| -------- | -------- | ------ | --------------- |
| email    | Required | string | user’s email    |
| password | Required | string | user’s password |

### Response

Success | code : 200

- The token (JSON Web Token) should be stored in the header as the authentication and sent with every request except for signup and login.

```json
{
  "status": "success",
  "message": "登入成功",
  "data": {
    "user": {
      "id": 1,
      "eamil": "user1@example.com",
      "name": "Jack",
      "isAdmin": false
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZWFtaWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsIm5hbWUiOiJKYWNrIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxMzc5ODk1OSwiZXhwIjoxNzE0NDAzNzU5fQ.fwJ2L0t_XliJ37KrCbmyOy0HyKf573noT5LNatbZ9Ow"
  }
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "This account not exist"
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Email or password is wrong"
}
```

## POST /apis/users/signup (User signup)

User sign up.

### Request Body

| Params          | Required | Type   | Description         |
| --------------- | -------- | ------ | ------------------- |
| email           | Required | string | User’s email        |
| password        | Required | string | User’s password     |
| confirmPassword | Required | string | retype the password |
| name            | Required | string | User’s name         |

### Response

Success | code : 200

```json
{
  "status": "success",
  "message": "註冊成功",
  "data": {
    "user": {
      "id": 2,
      "name": "Tom",
      "email": "user2@example.com",
      "password": "$2a$10$4wMmA21tKG3qncBzfFS0vuKFnvm5wrp9QfiP6wv.jwlo3vGoMEFXq",
      "updatedAt": "2024-04-22T15:20:29.008Z",
      "createdAt": "2024-04-22T15:20:29.008Z"
    }
  }
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Password do not match"
}
```

Failure Response | code : 409

```json
{
  "status": "error",
  "message": "Email already exist"
}
```

Failure Response | code : 409

```json
{
  "status": "error",
  "message": "User name already exist"
}
```

Failure Response | code : 500

```json
{
  "status": "error",
  "message": "Create user failed"
}
```

# Viewpoint

## GET /apis/viewpoints (Get all viewpoints)

Get all viewpoints

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "viewpoints": [
      {
        "id": 8,
        "name": "淺草寺",
        "address": "東京都",
        "image": "www.fff.com.tw",
        "categoryId": 1,
        "createdAt": "2024-04-21T17:26:15.000Z",
        "updatedAt": "2024-04-21T17:41:09.000Z"
      },
      {
        "id": 10,
        "name": "東大寺",
        "address": "奈良",
        "image": "www.abc.com.tw",
        "categoryId": 2,
        "createdAt": "2024-04-22T06:09:12.000Z",
        "updatedAt": "2024-04-22T06:09:12.000Z"
      }
    ]
  }
}
```

## GET /apis/viewpoints/:viewpointId (Get specific viewpoint info)

Get specific viewpoint info

### **Path Variables**

| Params      | Required | Type | Description  |
| ----------- | -------- | ---- | ------------ |
| viewpointId | Required | int  | Viewpoint id |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "viewpoint": {
      "id": 8,
      "name": "淺草寺",
      "address": "東京都",
      "image": "www.abc.com.tw",
      "categoryId": 2,
      "createdAt": "2024-04-21T17:26:15.000Z",
      "updatedAt": "2024-04-21T17:39:47.000Z"
    }
  }
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Viewpoint didn't exist"
}
```

## POST /apis/admin/viewpoints (Add new viewpoint)

Add new viewpoint

Note: Admin is required

### Request Body

| Params     | Required | Type   | Description            |
| ---------- | -------- | ------ | ---------------------- |
| name       | Required | string | Viewpoint’s name       |
| address    | Required | string | Viewpoint’s address    |
| image      | Required | string | Viewpoint’s image      |
| categoryId | Required | int    | Viewpoint’s categoryId |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "viewpoint": {
      "id": 12,
      "name": "淺草寺",
      "address": "東京都",
      "image": "www.abc.com.tw",
      "categoryId": 2,
      "updatedAt": "2024-04-22T06:09:14.127Z",
      "createdAt": "2024-04-22T06:09:14.127Z"
    }
  }
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Viewpoint name is required"
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Category not found"
}
```

## PUT /apis/admin/viewpoints/:viewpointId (Update viewpoint)

Update viewpoint

Note: Admin is required

### Request Body

| Params     | Required | Type   | Description            |
| ---------- | -------- | ------ | ---------------------- |
| name       | Required | string | Viewpoint’s name       |
| address    | Required | string | Viewpoint’s address    |
| image      | Required | string | Viewpoint’s image      |
| categoryId | Required | int    | Viewpoint’s categoryId |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "newViewpoint": {
      "id": 8,
      "name": "淺草寺",
      "address": "東京都",
      "image": "www.fff.com.tw",
      "categoryId": 1,
      "createdAt": "2024-04-21T17:26:15.000Z",
      "updatedAt": "2024-04-21T17:41:09.000Z"
    }
  }
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Viewpoint name is required"
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Viewpoint doesn't exist"
}
```

## DELETE /apis/admin/viewpoints/:viewpointId (Delete viewpoint)

Delete viewpoint

Note: Admin is required

### **Path Variables**

| Params      | Required | Type | Description  |
| ----------- | -------- | ---- | ------------ |
| viewpointId | Required | int  | Viewpoint id |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "viewpoint": {
      "id": 8,
      "name": "淺草寺",
      "address": "東京都",
      "image": "www.abc.com.tw",
      "categoryId": 2,
      "createdAt": "2024-04-21T17:26:15.000Z",
      "updatedAt": "2024-04-21T17:39:47.000Z"
    }
  }
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Viewpoint doesn't exist"
}
```

# Category

## GET /apis/categories (Get all categories)

Get all categories

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "categories": [
      {
        "id": 2,
        "name": "Japan",
        "createdAt": "2024-04-21T17:39:28.000Z",
        "updatedAt": "2024-04-21T17:39:28.000Z"
      },
      {
        "id": 3,
        "name": "China",
        "createdAt": "2024-04-22T15:57:39.000Z",
        "updatedAt": "2024-04-22T15:57:39.000Z"
      }
    ]
  }
}
```

## POST /apis/admin/categories (Add new category)

Add new category

Note: Admin is required

### Request Body

| Params | Required | Type   | Description     |
| ------ | -------- | ------ | --------------- |
| name   | Required | string | Category’s name |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "category": {
      "id": 3,
      "name": "China",
      "updatedAt": "2024-04-22T15:57:39.295Z",
      "createdAt": "2024-04-22T15:57:39.295Z"
    }
  }
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Category name is required"
}
```

## PUT /apis/admin/categories/:categoryId (Update category)

Update category

Note: Admin is required

### Request Body

| Params | Required | Type   | Description     |
| ------ | -------- | ------ | --------------- |
| name   | Required | string | Category’s name |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "category": {
      "id": 3,
      "name": "China",
      "updatedAt": "2024-04-22T15:57:39.295Z",
      "createdAt": "2024-04-22T15:57:39.295Z"
    }
  }
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Category name is required"
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Category doesn't exist"
}
```

## DELETE /apis/admin/categories/:categoryId (Delete category)

Delete category

Note: Admin is required

### **Path Variables**

| Params     | Required | Type | Description |
| ---------- | -------- | ---- | ----------- |
| categoryId | Required | int  | Category id |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "category": {
      "id": 1,
      "name": "Japan",
      "createdAt": "2024-04-21T17:39:21.000Z",
      "updatedAt": "2024-04-21T17:39:21.000Z"
    }
  }
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Category doesn't exist"
}
```

# Comment

## GET /apis/comments/:viewpointId (Get all specific viewpoint's comments)

Get all specific viewpoint's comments

Note: authentication is required

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "comments": [
      {
        "id": 1,
        "text": "好玩",
        "userId": 1,
        "viewpointId": 8,
        "createdAt": "2024-04-22T03:21:58.000Z",
        "updatedAt": "2024-04-22T03:21:58.000Z"
      }
    ]
  }
}
```

## POST /apis/comments/ (Add new comment on viewpoint)

Add new comment on viewpoint

Note: authentication is required

### Request Body

| Params      | Required | Type   | Description  |
| ----------- | -------- | ------ | ------------ |
| viewpointId | Required | int    | Viewpoint id |
| text        | Required | string | comment text |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "comment": {
      "id": 4,
      "text": "好玩",
      "viewpointId": 8,
      "userId": 1,
      "updatedAt": "2024-04-22T05:40:28.037Z",
      "createdAt": "2024-04-22T05:40:28.037Z"
    }
  }
}
```

Failure Response | code : 400

```json
{
  "status": "error",
  "message": "Comment text is required"
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "User didn't exist"
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Viewpoint didn't exist"
}
```

## DELETE /apis/admin/comments/:commentId (Delete comment)

Delete comment

Note: Admin is required

### **Path Variables**

| Params    | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
| commentId | Required | int  | Comment id  |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "comment": {
      "id": 4,
      "text": "好玩",
      "userId": 1,
      "viewpointId": 8,
      "createdAt": "2024-04-22T05:40:28.000Z",
      "updatedAt": "2024-04-22T05:40:28.000Z"
    }
  }
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Comment didn't exist"
}
```

# Favorite

## POST /apis/favorites/:viewpointId (Add favorite on viewpoint)

Add favorite on viewpoint

Note: authentication is required

### **Path Variables**

| Params      | Required | Type | Description  |
| ----------- | -------- | ---- | ------------ |
| viewpointId | Required | int  | Viewpoint id |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "favorite": {
      "userId": 1,
      "viewpointId": "10",
      "updatedAt": "2024-04-22T16:14:27.144Z",
      "createdAt": "2024-04-22T16:14:27.144Z"
    }
  }
}
```

Failure Response | code : 404

```json
{
  "status": "error",
  "message": "Viewpoint didn't exist"
}
```

Failure Response | code : 409

```json
{
  "status": "error",
  "message": "You have favorited this viewpoint"
}
```

## DELETE /apis/favorites/:viewpointId (Delete favorite on viewpoint)

Delete favorite on viewpoint

Note: authentication is required

### **Path Variables**

| Params      | Required | Type | Description  |
| ----------- | -------- | ---- | ------------ |
| viewpointId | Required | int  | Viewpoint id |

### Response

Success | code : 200

```json
{
  "status": "success",
  "data": {
    "favorite": {
      "userId": 1,
      "viewpointId": 10,
      "createdAt": "2024-04-22T06:13:15.000Z",
      "updatedAt": "2024-04-22T06:13:15.000Z"
    }
  }
}
```

Failure Response | code : 409

```json
{
  "status": "error",
  "message": "You have not favorited this viewpoint"
}
```
