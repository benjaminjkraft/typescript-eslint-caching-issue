# Repro steps:

```sh
npm install
npx eslint --cache src/*.ts  # passes (correctly)
# edit src/callee.ts to switch to async (comment the sync function and uncomment the async function)
npx eslint --cache src/*.ts  # passes (erroneously)
npx eslint src/*.ts          # fails (correctly)
```
