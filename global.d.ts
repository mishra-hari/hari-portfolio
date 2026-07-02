// 1. Top-level imports MUST come first
//import { MongoClient } from 'mongodb'

// 2. CSS Module Wildcard Declaration 
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// 3. FIX FOR TS(2882): Map both absolute and relative paths directly
declare module '@/app/globals.css' {
  const content: void;
  export default content;
}

declare module '../app/globals.css' {
  const content: void;
  export default content;
}

declare module './globals.css' {
  const content: void;
  export default content;
}

// 4. Global Scope Extensions
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

export {}
