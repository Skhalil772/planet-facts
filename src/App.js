import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mercury from "./component/Mercury";
import Venus from "./component/Venus";
import Earth from "./component/Earth";
import Mars from "./component/Mars";
import Jupiter from "./component/Jupiter";
import Saturn from "./component/Saturn";
import Uranus from "./component/Uranus";
import Neptune from "./component/Neptune";

import Nav from "./component/nav";

function App() {
  return (
    <Router>
      <div className="bg  ">
        <Nav />

        <Routes>
          <Route exact path="/" element={<Mercury />}></Route>
          <Route path="/Venus" element={<Venus />}></Route>
          <Route path="/Earth" element={<Earth />}></Route>
          <Route path="/Mars" element={<Mars />}></Route>
          <Route path="/Jupiter" element={<Jupiter />}></Route>
          <Route path="/Saturn" element={<Saturn />}></Route>
          <Route path="/Uranus" element={<Uranus />}></Route>
          <Route path="/Neptune" element={<Neptune />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import Figure from "./component/figure";
// import Nav from "./component/nav";
// import Bgimage from "./component/assets/background-stars.svg";
// import Content from "./component/content";
// import { DataProvider } from "./context/DataContext";
// function App() {
//   return (
//     <div className="bg  ">
//       <DataProvider>
//         <Nav />
//         <Content />
//         <Figure />
//       </DataProvider>
//     </div>
//   );
// }

// export default App;
