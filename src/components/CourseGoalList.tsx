import CourseGoals from "./CourseGoals"
import {type courseGoal as CGoals} from '../App.tsx'

type courseGoalsProps = {
    courseGoals: CGoals[];
    onDeleteGoal:(id:number)=>void
}

const CourseGoalList = ({courseGoals, onDeleteGoal}:courseGoalsProps) => {
  return (
    <ul>
        {courseGoals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals id={goal.id} title={goal.title} onDeleteGoal={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
  )
}

export default CourseGoalList