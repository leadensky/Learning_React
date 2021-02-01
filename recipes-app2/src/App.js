import "./App.css";
// import Menu from "./components/Menu";
// import data from "./data/recipes.json";
import React, {useState} from "react";
import faker from "faker";
import GitHubUser from "./components/GitHubUser";
import UserRepositories from "./components/UserRepositories";
// import { FixedSizeList } from "react-window";

// const bigList = [...Array(5000)].map(() => ({
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar()
// }));

function App() {
  const [login, setLogin] = useState("leadensky");

  return (
    <div>
      <GitHubUser login={login} />
      <UserRepositories login={login} />
    </div>
    // const renderRow = ({index, style}) => (
    //   <div style={{...style, ...{ display: "flex" }}} >
    //     <img src={bigList[index].avatar}
    //       alt={bigList[index].name}
    //       width={50}
    //     />
    //     <p>{bigList[index].name} - {bigList[index].email}</p>
    //   </div>
    // );

    // return (
    //   <FixedSizeList
    //     height={window.innerHeight}
    //     width={window.innerWidth - 20}
    //     itemCount={bigList.length}
    //     itemSize={50}
    //   >
    //     {renderRow}
    //   </FixedSizeList>
    // return (
    //   <div>
    //     <AddColorForm />
    //     <ColorList />
    //   </div>
    // );
    // return (
    //   <div className="App">
    //     <Menu recipes={data} />
    //   </div>
  );
}

export default App;
