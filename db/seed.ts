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
    { id: "legs123", name: "Legs" },
    { id: "core123", name: "Core" },
    { id: "upper123", name: "Upper Body" },
  ])

  await db.insert(Workouts).values([
    {
      categoryId: "legs123",
      name: "Bulgarian squat / Dumbell Scaption",
      checked: false,
      count: 0,
      weightPerDumbbell: 10,
      reps: 10,
      sets: 3,
      id: crypto.randomUUID(),
      updatedAt: new Date(),
    },
    {
      categoryId: "upper123",
      name: "Arnold Press / Dumbell Bicep Curl",
      checked: false,
      count: 0,
      weightPerDumbbell: 10,
      reps: 10,
      sets: 3,
      id: crypto.randomUUID(),
      updatedAt: new Date(),
    },
  ])
}
