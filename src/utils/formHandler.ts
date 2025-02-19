import {
  db,
  ToDos,
  Categories,
  eq,
  WorkoutCategories,
  Workouts,
} from "astro:db"
import { getFormDataValue, calculateNewStreak } from "../utils/formUtils"

const handleFormSubmission = async (formData: FormData) => {
  const formType = formData.get("formType")

  switch (formType) {
    case "todo": {
      const categoryId = formData.get("categoryId")
      const name = formData.get("name")
      const priority = formData.get("priority")
      if (
        typeof categoryId === "string" &&
        typeof name === "string" &&
        typeof priority === "string"
      ) {
        await db.insert(ToDos).values({
          categoryId,
          name,
          checked: false,
          streak: 0,
          priority: priority ? parseInt(priority) : 1,
          id: crypto.randomUUID(),
          updatedAt: new Date(),
        })
      }
      break
    }

    case "workout": {
      const categoryId = formData.get("categoryId")
      const name = formData.get("name")
      const weightPerDumbbell = formData.get("weightPerDumbbell")
      const reps = formData.get("reps")
      const sets = formData.get("sets")
      if (typeof categoryId === "string" && typeof name === "string") {
        await db.insert(Workouts).values({
          categoryId,
          name,
          checked: false,
          count: 0,
          weightPerDumbbell: Number(weightPerDumbbell),
          reps: Number(reps),
          sets: Number(sets),
          id: crypto.randomUUID(),
          updatedAt: new Date(),
        })
      }
      break
    }

    case "category": {
      const name = formData.get("name")
      if (typeof name === "string") {
        await db.insert(Categories).values({
          name,
          id: crypto.randomUUID(),
        })
      }
      break
    }

    case "workoutCategory": {
      const name = formData.get("name")
      if (typeof name === "string") {
        await db.insert(WorkoutCategories).values({
          name,
          id: crypto.randomUUID(),
        })
      }
      break
    }

    case "removeCategory": {
      const categoryId = getFormDataValue(formData, "categoryId")

      const todosInCategory = await db
        .select()
        .from(ToDos)
        .where(eq(ToDos.categoryId, categoryId as string))

      if (todosInCategory.length > 0) {
        try {
          for (const todo of todosInCategory) {
            await db.delete(ToDos).where(eq(ToDos.id, todo.id))
          }
        } catch (error) {
          console.log(error)
        }
      }

      if (categoryId) {
        await db.delete(Categories).where(eq(Categories.id, categoryId))
      }
      break
    }

    case "removeWorkoutCategory": {
      const categoryId = getFormDataValue(formData, "categoryId")

      const workoutsInCategory = await db
        .select()
        .from(Workouts)
        .where(eq(Workouts.categoryId, categoryId as string))

      if (workoutsInCategory.length > 0) {
        try {
          for (const workout of workoutsInCategory) {
            await db.delete(Workouts).where(eq(Workouts.id, workout.id))
          }
        } catch (error) {
          console.log(error)
        }
      }

      if (categoryId) {
        await db
          .delete(WorkoutCategories)
          .where(eq(WorkoutCategories.id, categoryId))
      }
      break
    }

    case "deleteTodo": {
      const todoId = getFormDataValue(formData, "todoId")
      if (todoId) {
        await db.delete(ToDos).where(eq(ToDos.id, todoId))
      }
      break
    }

    case "updateTodo": {
      const todoId = getFormDataValue(formData, "todoId")
      const streakValue = getFormDataValue(formData, "streakValue")
      const isChecked = formData.get("checked") === "on"
      if (todoId) {
        const newStreakValue = calculateNewStreak(streakValue, isChecked)
        await db
          .update(ToDos)
          .set({
            checked: isChecked,
            streak: newStreakValue,
            updatedAt: new Date(),
          })
          .where(eq(ToDos.id, todoId))
      }
      break
    }

    default:
      console.log(`Unknown form type: ${formType}`)
      break
  }
}

export default handleFormSubmission
