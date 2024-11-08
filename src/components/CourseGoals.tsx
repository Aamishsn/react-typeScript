import  {type ReactNode} from 'react'  

const CourseGoals = ( {title,children}:{title:string,children:ReactNode}) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>Delete</button>
    </article>
  )
}

export default CourseGoals