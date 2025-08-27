npm init -y
npm install typescript ts-node nodemon @types/node
npx tsc --init
npm i express dotenv
npm i @types/express cross-env @types/dotenv -D

package.json {
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start:dev": "cross-env NODE_ENV=dev nodemon --exec ts-node src/server.ts",
        "start:hml": "cross-env NODE_ENV=hml nodemon --exec ts-node src/server.ts",
        "start:prd": "cross-env NODE_ENV=prd nodemon --exec ts-node src/server.ts",
        "build": "tsc",
        "start": "NODE_ENV=prd node dist/server.js"
  },
}

tsconfig.json {
    {
    // Visit https://aka.ms/tsconfig to read more about this file
    "compilerOptions": {
        // File Layout
        "rootDir": "./src",
        "outDir": "./dist",

        // Environment Settings
        // See also https://aka.ms/tsconfig/module
        "module": "commonjs",
        "target": "es2020",
        // "types": [],
        // For nodejs:
        // "lib": ["esnext"],
        "types": ["node"],
        // and npm install -D @types/node

        // Other Outputs
        "sourceMap": true,
        "declaration": true,
        "declarationMap": true,

        // Stricter Typechecking Options
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,

        // Style Options
        // "noImplicitReturns": true,
        // "noImplicitOverride": true,
        // "noUnusedLocals": true,
        // "noUnusedParameters": true,
        // "noFallthroughCasesInSwitch": true,
        // "noPropertyAccessFromIndexSignature": true,

        // Recommended Options
        "strict": true,
        "jsx": "react-jsx",
        "verbatimModuleSyntax": true,
        "isolatedModules": true,
        "noUncheckedSideEffectImports": true,
        "moduleDetection": "force",
        "skipLibCheck": true,
        "esModuleInterop": true,
    }
}

}