import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./NewPost";
import Nav from "./Nav";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import {DataProvider} from "./context/DataContext";

function App(){
    
  return (
    <div className="App">
      <DataProvider>
        <Header title="Vee Social Media"/> 
        <Nav/>

        <Routes>
          <Route path="/" element = {
          <Home/>}/>
          <Route path="post">
            <Route index element= {<NewPost/>}/>
            <Route path=":id" element={<PostPage/>}/>
          </Route> 
          <Route path="/edit/:id" element ={<EditPost/>}/>
          <Route path="about" element={ <About/>}/>
          <Route path ="*" element ={<Missing/>}/>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;