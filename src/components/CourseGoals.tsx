import  {type ReactNode} from 'react'  

const CourseGoals = ( {id, title,children, onDeleteGoal}:{id:number, title:string,children:ReactNode, onDeleteGoal:(id:number)=>void}) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={()=>onDeleteGoal(id)}>Delete</button>
    </article>
  )
}

export default CourseGoals