import { db, Categories, ToDos } from "astro:db"

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Categories).values([
    { id: "asdfas", name: "People" },
    { id: "werwer", name: "Webdev" },
    { id: "2fsadf", name: "Gamedev" },
    { id: "cxzv", name: "Music" },
    { id: "xcvcxv", name: "DJ" },
    { id: "d4g", name: "Writing" },
    { id: "fasdv", name: "Reading" },
    { id: "bnfgh", name: "Gaming" },
  ])

  await db.insert(ToDos).values([
    {
      categoryId: "asdfas",
      name: "call joe",
      checked: false,
      streak: 0,
      id: crypto.randomUUID(),
    },
    {
      categoryId: "werwer",
      name: "code a button",
      checked: false,
      streak: 0,
      id: crypto.randomUUID(),
    },
  ])
}
