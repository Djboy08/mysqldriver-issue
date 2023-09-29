# mysql2minimal

To install dependencies:

```bash
bun install
```

To test the push:

Note: You need to have the DB_URL in the env.
Since this is using planetscale you need to use a url that follows the pattern: 
`mysql://xxxxxx:xxxxxxxx@aws.connect.psdb.cloud/db_name?ssl={"rejectUnauthorized":true}`

```bash
bun run push
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
