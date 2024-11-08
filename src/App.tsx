// import React from "react";
import CourseGoals from "./components/CourseGoals";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";

type courseGoal = {
  title:string;
  description:string;
  id:number;
}
export default function App() {
const [courseGoals, setCourseGoals] = useState<courseGoal[]>([]);

  const handleAddGoal = () => {
    setCourseGoals((prevGoals) => {
      return [
        ...prevGoals,
        { title: "Learn React + TypeScript", description: "Learn it from ground up", id: Math.random() * 100 },
      ];
    })
  };
  return (
  <main>
    <Header image={{src:goalImg, alt:"Goals"}}>
      <h1>Your Course Goals</h1>
    </Header>
    <button onClick={handleAddGoal}>Add New Goal</button>
       <CourseGoals  title="Learn React + TypeScript">
      <p>Learn it from ground up</p>
    </CourseGoals >
    </main>

)
}


 {/* */}
 