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

  const handleAddGoal = () => {
    setCourseGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          title: "Learn React + TypeScript",
          description: "Learn it from ground up",
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
      <NewGoal />
      {/* <button onClick={handleAddGoal}>Add New Goal</button> */}
      <CourseGoalList courseGoals={courseGoals} onDeleteGoal={handleDelete}/> 
    </main>
  );
}
