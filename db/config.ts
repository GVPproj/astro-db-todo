import { defineDb, defineTable, column } from "astro:db"

const Categories = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
})

const ToDos = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    categoryId: column.text({ references: () => Categories.columns.id }),
    name: column.text(),
    checked: column.boolean(),
    streak: column.number(),
    priority: column.number({
      min: 1,
      max: 3,
      default: 2,
      integer: true,
    }),
    updatedAt: column.date(),
  },
})

const Workouts = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    categoryId: column.text({ references: () => WorkoutCategories.columns.id }),
    name: column.text(),
    weightPerDumbbell: column.number(),
    sets: column.number(),
    reps: column.number(),
    count: column.number(),
    checked: column.boolean(),
    updatedAt: column.date(),
  },
})

const WorkoutCategories = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
})

export default defineDb({
  tables: { Categories, ToDos, WorkoutCategories, Workouts },
})
