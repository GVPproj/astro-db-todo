export function getFormDataValue(
  formData: FormData,
  key: string
): string | null {
  const value = formData.get(key)
  return typeof value === "string" ? value : null
}

export function calculateNewStreak(
  currentStreak: string | null,
  isChecked: boolean
): number {
  if (!currentStreak) return 0
  const streakValue = parseInt(currentStreak)
  return isChecked ? streakValue + 1 : streakValue
}
