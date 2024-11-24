import Image from "react";
import StudentCard from "./cards/page";

export default function ParentComponent() {
  return (
     <div>
      <StudentCard name='Mehak' rollNumber={2345}/>
      <br/>
      <StudentCard name='Saba' rollNumber={5678}/>
      <br/>
      <StudentCard name='Zareen' rollNumber={5891}/>
     </div>
  );
}
