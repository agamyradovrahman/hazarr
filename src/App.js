import Appp from "./Appp";
import Login from "./Login/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          
          <Route path="/" element={<Appp />} />
          <Route path="login" element={<Login />} />
          
       
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
