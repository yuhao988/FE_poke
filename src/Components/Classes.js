import { ClassStat } from "./Database";

export default function Classes() {
  return (
    <div>
      {Object.keys(ClassStat).map((className,index) => (
        <h3 key={index}>{className}</h3>
      ))}
    </div>
  );
}
