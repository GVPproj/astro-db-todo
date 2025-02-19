import { db, Categories, ToDos, WorkoutCategories, Workouts } from "astro:db"

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
      priority: 1,
      updatedAt: new Date(),
    },
    {
      categoryId: "werwer",
      name: "code a button",
      checked: false,
      streak: 0,
      priority: 2,
      id: crypto.randomUUID(),
      updatedAt: new Date(),
    },
  ])

  await db.insert(WorkoutCategories).values([
    { id: "nkjdsfi", name: "Legs" },
    { id: "57ndfl", name: "Core" },
    { id: "zzadsfkj", name: "Upper Body" },
  ])

  await db.insert(Workouts).values([
    {
      categoryId: "nkjdsfi",
      name: "Bulgarian Split Squat",
      checked: false,
      streak: 0,
      weightLevel: 1,
      id: crypto.randomUUID(),
      updatedAt: new Date(),
    },
    {
      categoryId: "zzadsfkj",
      name: "Dumbbell Bicep Curl",
      checked: false,
      streak: 0,
      weightLevel: 2,
      id: crypto.randomUUID(),
      updatedAt: new Date(),
    },
  ])
}
