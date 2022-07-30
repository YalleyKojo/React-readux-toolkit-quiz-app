import { Routes,Route,useNavigate } from "react-router-dom";
import Settings from "./pages/Settings.js";
import Final from "./pages/Final.js";
import Questions from "./pages/Questions.js";
import { Container } from "@mui/material"
import { Box } from "@mui/system";
import { Typography } from '@mui/material'


function App() {
  return (
    <Container maxWidth='sm'>
      <Box textAlign='center' mt={5}>

            <Routes>

              <Route path="/" element={  <>
              <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
              <Settings/>
              </>  
              }/>
              <Route path="/questions" element={ <Questions/>}/>
              <Route path="/score" element={ <Final/>}/>


          </Routes>


      </Box>


     
    </Container>
   
 
  );
}

export default App;
