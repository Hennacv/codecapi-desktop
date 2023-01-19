## Migrations

##### Generate migration from entities

`yarn typeorm:generate ./src/db/migrations/<MIGRATION_NAME>`

##### Create empty migration

`yarn typeorm:create ./src/db/migrations/<MIGRATION_NAME>`

##### Run migrations

`yarn typeorm:up`

##### Revert migrations

`yarn typeorm:down`

## .env

```
NODE_ENV=development
DATABASE_URL=postgres://localhost/codecapi_portal_development
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
GOOGLE_CLIENT_ID=client_id
GOOGLE_CLIENT_SECRET=client_secret
DOMAIN=http://localhost:3000
```
