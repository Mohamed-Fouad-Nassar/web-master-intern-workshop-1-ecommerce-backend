## Deploy JSON Server to Vercel

A template to deploy [JSON Server](https://github.com/typicode/json-server) to [Vercel](https://vercel.com), allow you to run fake REST API online!

### Demo from this repository:

<!-- 1. https://json-server-in.vercel.app -->
<!-- 2. https://json-server-in.vercel.app/api/posts -->

### How to use

1. download this repo zip file.
2. unzip the file and open with code.
3. run `npm i` to install node_modules.
4. update or use the default [`db.json`](./db.json).
5. run `npm run start` and open "**http://localhost:3000**" to test your api.
6. upload it to github and deploy it with vercel.

### Default `db.json`

```json
{
  "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
  "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
  "profile": { "name": "typicode" }
}
```

## Reference

1. https://github.com/typicode/json-server
2. https://vercel.com
3. https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel
