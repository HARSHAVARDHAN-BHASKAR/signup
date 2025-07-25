import './App.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>Sign in</h1>
      <h5>Please login to continue to your account</h5>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br></br>
      <br></br>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br></br>
         <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
         <br></br>
            <Button variant="contained">Sign In</Button>
    </div>
  );
}

export default App;