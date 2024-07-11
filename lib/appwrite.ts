"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

//AppwriteのClientを作成
export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  // リクエストに含まれるcookiesからセッションIDを取得
  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
    throw new Error("No session");
  }

  // Making authenticated requests 
  // Pass the session cookie to the Appwrite client
  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

// appwriteにアクセスするためのクライアントを作成
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}

