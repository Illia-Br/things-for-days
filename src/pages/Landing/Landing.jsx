import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-functional-things">karim's Things</Link><br/>
      <Link to="/the-well-styled-things">Ill's Things</Link><br/>
      <Link to="/the-silly-things">SomeoneElse's Things</Link><br/>
    </>
  )
}
 //this is a change to test branch
export default Landing