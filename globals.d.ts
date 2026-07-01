// 1. Top-level imports MUST come first
import { MongoClient } from 'mongodb'

// 2. CSS Module Wildcard Declaration 
export declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// 3. FIX FOR TS(2882): Map the absolute alias path directly
export declare module '@/app/globals.css' {
  const content: void;
  export default content;
}

// 4. Global Scope Extensions
export declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

