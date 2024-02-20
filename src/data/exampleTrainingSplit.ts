const workoutPlan = {
  id: "workout-plan-1",
  name: "My Upper-Lower Split Workout",
  createdAt: new Date(),
  days: 2,
  workoutPerDay: [
    {
      id: "workout-plan-1-day-1",
      day: 1,
      name: "Upper Body",
      exercises: [
        {
          id: "id-exercise-chest-bench-press",
          name: "Bench Press",
          sets: 4,
        },
        {
          id: "id-exercise-back-pull-ups",
          name: "Pull Ups",
          sets: 4,
        },
        {
          id: "id-exercise-shoulders-military-press",
          name: "Military Press",
          sets: 4,
        },
        {
          id: "id-exercise-triceps-tricep-dips",
          name: "Tricep Dips",
          sets: 3,
        },
        {
          id: "id-exercise-biceps-barbell-curls",
          name: "Barbell Curls",
          sets: 3,
        },
      ],
    },
    {
      id: "workout-plan-1-day-2",
      day: 2,
      name: "Lower Body",
      exercises: [
        {
          id: "id-exercise-legs-squats",
          name: "Squats",
          sets: 4,
        },
        {
          id: "id-exercise-back-deadlifts",
          name: "Deadlifts",
          sets: 4,
        },
        {
          id: "id-exercise-legs-leg-press",
          name: "Leg Press",
          sets: 3,
        },
        {
          id: "id-exercise-legs-leg-curls",
          name: "Leg Curls",
          sets: 3,
        },
        {
          id: "id-exercise-legs-calf-raises",
          name: "Calf Raises",
          sets: 3,
        },
      ],
    },
  ],
};
