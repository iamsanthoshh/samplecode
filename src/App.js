import React from 'react'

export default function App() {
  async function main {
    console.log(1);
    setTimeout(()=>console.log(2));
    Process.nextTick(()=> console.log(3));
    await console.log(4);
    console.log(5);
  }
 
  return (
    <div>main  </div>
  )
}