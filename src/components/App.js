import "../App.css";
import { movies } from "./movies";
import LogoSection from "./LogoSection";
import NavList from "./NavList";

function App() {
  console.log({ movies });
  return (
    <div className="App">
      <LogoSection />
      <NavList movies={movies} />
      <hr />
    </div>
  );
}

export default App;

//         <div id="top">
//             <img class="logo" src="assets/f13-logo.png" />
//         </div>
//         <hr/>
//         <nav id="movie-list">

//         </nav>

//         <div id="movie-info">
//             <img id="detail-image" src="" />
//             <div>
//                 <h1 id="title">Title</h1>
//                 <h3 id="year-released">Year Released</h5>
//                 <p id="description">
//                     Description
//                 </p>
//                 <button id="watched">Watched</button>
//                 <p>
//                     <img class="icon" src="./assets/blood-drop.png"/>x
//                     <span id="amount">0</span>
//                 </p>
//             </div>

//             <form id="blood-form">
//                 <label for="blood-amount">Blood amount</label>
//                 <input id="blood-amount" type="text" placeholder="Number of drops ..."/>

//                 <input type="submit" value="Add Blood"></button>
//             </form>
//             </div>
