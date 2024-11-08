import CourseGoals from "./CourseGoals"
import {type courseGoal as CGoals} from '../App.tsx'

type courseGoalsProps = {
    courseGoals: CGoals[]
}

const CourseGoalList = ({courseGoals}:courseGoalsProps) => {
  return (
    <ul>
        {courseGoals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
  )
}

export default CourseGoalList