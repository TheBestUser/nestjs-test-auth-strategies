Commands

Start App:
```shell
yarn start:dev
```

Test JWT Guard:
```shell
curl --location 'localhost:3005' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNGUwZDI3NS03MjI5LTQzY2ItOGJjNC0xZWNkZGI2NDgyMmEiLCJ1c2VyIjoie1wibmFtZVwiOlwiSm9oblwifSIsImlhdCI6MjIyMjIyMjIyMn0.l-TBLaz4pBCedh6bUrTcmYOdfW3n9zjQzAwDNOC-Fak'
```

Test Refresh JWT Guard:
```shell
curl -X POST http://localhost:3005/refresh -d '{"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNGUwZDI3NS03MjI5LTQzY2ItOGJjNC0xZWNkZGI2NDgyMmEiLCJ1c2VyIjoie1wibmFtZVwiOlwiSm9oblwifSIsImlhdCI6MjIyMjIyMjIyMn0.l-TBLaz4pBCedh6bUrTcmYOdfW3n9zjQzAwDNOC-Fak"}' -H "Content-Type: application/json"
```
