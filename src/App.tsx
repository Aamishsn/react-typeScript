// import React from "react";
import CourseGoals from "./components/CourseGoals";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
export default function App() {
  return (
  <main>
    <Header image={{src:goalImg, alt:"Goals"}}>
      <h1>Your Course Goals</h1>
    </Header>
       <CourseGoals  title="Learn React + TypeScript">
      <p>Learn it from ground up</p>
    </CourseGoals >
    </main>

)
}


 {/* */}
 