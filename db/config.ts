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

export default defineDb({
  tables: { Categories, ToDos },
})
