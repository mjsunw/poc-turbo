Demo of micro-fe strucutre in a monorepo

# Development

```
pnpm install

pnpm run dev --filter=./apps/* 
```

Go to http://localhost:3000/pay-ops/

Above command runs all the sub apps. To run a single app separately
```
pnpm run dev --filter=apps-pot-app-1
```
