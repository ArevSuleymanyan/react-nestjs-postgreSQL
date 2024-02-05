### Running the project using Docker
Copy .env.example to .env, and change to your credentials.

PORTS\
**Frontend:** 3000\
**Backend:** 3001, [Change port](./server/src/config.ts)\
**Postgres:** 5432

[**Replace the values with your database credentials.**](./server/.env)

_Create containers_

``` 
docker-compose build
```
_Run the project_

``` 
docker-compose up
```
