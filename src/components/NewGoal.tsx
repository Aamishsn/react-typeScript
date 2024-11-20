import {useRef, type FormEvent } from 'react'

const NewGoal = () => {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)
    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
            e.preventDefault()

            enteredGoal=goal.current!.value
            enteredSummary=summary.current!.value
    }
  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input type="text" id="goal" />
        </p>
        <p>
            <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" />
        </p>
        <p>
             <button>Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal