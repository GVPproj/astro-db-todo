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
  },
})

export default defineDb({
  tables: { Categories, ToDos },
})
