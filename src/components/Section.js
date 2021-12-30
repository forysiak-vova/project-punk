import { Children } from "react/cjs/react.production.min";

function Section({ title, children }) {
   return <div>
      {title && <h2>{title}</h2>} {children}
   </div>
}
 
export default Section;