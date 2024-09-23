import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState("")
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(!!e.target.value.match('^[0-9.]*$'));

    if (!!e.target.value.match('^[0-9.]*$')) {
   

      if (e.target.name == 'principle') {
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      }
      if (e.target.name == 'rate') {
        setRate(e.target.value)
        setIsRate(true)
      }
      if (e.target.name == 'year') {
        setYear(e.target.value)
        setIsYear(true)
      }
    }
    else {
      if (e.target.name == 'principle') {
        setPrinciple(e.target.value)
        setIsPrinciple(false)
      }
      if (e.target.name == 'rate') {
        setRate(e.target.value)
        setIsRate(false)
      }
      if (e.target.name == 'year') {
        setYear(e.target.value)
        setIsYear(false)
      }
    }
  }
  const handleReset=()=>
  {
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest("")
  }
  const handleCalculate=()=>
  {
    setInterest((principle*rate*year)/100)
  }

  return (

    <>
      <div style={{ height: '100vh' }} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{ width: '500px' }} className='p-5 bg-light rounded'>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interset Easily</p>
          <div style={{ height: '150px' }} className='p-5 bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
            <h1>₹{interest}</h1>
            <p>Total simple interset</p>
          </div>
          <div className="my-3">
            <TextField value={principle} name="principle" id="outlined-basic" label="₹ Principal amount" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
            {isPrinciple == false && <span className='text-danger'>* invalid input</span>}
          </div>
          <div className="mb-3">
            <TextField value={rate} name="rate" id="outlined-basic" label="Rate Of Interest (p.a)%" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
            {isRate == false && <span className='text-danger'>* invalid input</span>}
          </div>
          <div className="mb-3">
            <TextField value={year} name="year" id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
            {isYear == false && <span className='text-danger'>* invalid input</span>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <Button style={{ width: '190px', height: '60px' }} variant="contained" onClick={handleCalculate} color="success" disabled={isPrinciple && isRate && isYear ? false: true}>Calculate</Button>
            <Button style={{ width: '190px', height: '60px' }} variant="outlined" onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
