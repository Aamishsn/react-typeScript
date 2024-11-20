// import React from "react";
 
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type courseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [courseGoals, setCourseGoals] = useState<courseGoal[]>([]);

  const handleAddGoal = (goal:string, summary:string) => {
    setCourseGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          title: goal,
          description: summary,
          id: Math.random() * 100,
        },
      ];
    });
  };

  const handleDelete=(id:number)=>{
    setCourseGoals(
      (prevGoals)=>{
      return prevGoals.filter((goal)=>goal.id!==id)
    }
  )
  }
  return (
    <main>
      <Header image={{ src: goalImg, alt: "Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal AddNewGoal={handleAddGoal}/>
      {/* <button onClick={handleAddGoal}>Add New Goal</button> */}
      <CourseGoalList courseGoals={courseGoals} onDeleteGoal={handleDelete}/> 
    </main>
  );
}
