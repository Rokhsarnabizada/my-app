
import React from 'react'
import {useState,useEffect } from 'react'

   function CalculatingMachine(props) {
  const [result,setResult]=useState([]);
 const operation=['addition','subtraction','multiplication','division'];

  const calculate=(c,d) => {
    c=parseInt(c);
    d=parseInt(d);
    const sum =c+d;
    const subtract=c-d;
    const multiple=c*d;
    const divide=c/d;
    setResult([sum, subtract, multiple, divide]);
    return [sum, subtract, multiple, divide]
          
  }


  return (
    <div>
      <div className='row'>
        <div className='col-12'>
        </div>
      </div>
      <div className='row'>

        <div className='col-4'>
          <InputFlields calc={calculate} />
        </div>
        <div className='col-8'>
          <Cards result={result} setRes={setResult} operation={operation}/>
        </div>
      </div>
    </div>
  )

}

function InputFlields(props) {
  const [firstnumber,setFirstNumber]=useState(0);
  const [secondnumber,setSecondNumber]=useState(0);


  const addNumber=(e)=>{
    e.preventDefault();
    if(firstnumber===0 || secondnumber===0){
      alert ('please insert value in order to calculate');
    }
  else
  {
      const [a,b,c,d]=props.calc(firstnumber,secondnumber)
    console.log(a,b,c,d);
  }
  }
  return (

    <form style={{marginTop: 200, marginLeft: 100}}  onSubmit={(e) =>addNumber(e)} >
      <div className='row mb-3'>
        <div className='col-6'>
          <label htmlFor="exampleInputEmail1" className="form-label name fw-bold">
            First Number
    </label>

        </div>

        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=> setFirstNumber(e.target.value)}
          />
        </div>

      </div>

      <div className='row'>
        <div className='col-6'>
          <label htmlFor="exampleInputEmail1" className="form-label name fw-bold">
            Second Number
    </label>


        </div>

        <div className="col-6 mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=> setSecondNumber(e.target.value)}
          />
        </div>
      </div>



      <button type="submit" className="btn btn-outline-warning mx-3">
        CalCulate
  </button>


      <button type="button" className="btn btn-outline-dark">
        Cancel
  </button>
    </form>



  )
  }




function Cards(props) {
  return (
    <div className='row' style={{marginTop: 200, marginLeft: 100}}>
      <div className='col-6'>
        <div className="card">
          <div className="card-header fw-bold"> Result Of My Application </div>
          <div className="card-body">
           {props.result.length>0 ?
           <>
            <h5> Sum Result: {props.result[0]} </h5>
            <h5> Subtract Result: {props.result[1]} </h5>
            <h5> Multiple Result: {props.result[2]} </h5>
            <h5> Divide Result: {props.result[3]} </h5>
           </>:null}
            <p className="card-text">
              If Your Want To Clear The Result Press The Below Button
              
              
    </p>
            <a href="#" className="btn btn-outline-dark"onClick={()=>props.setRes([])} >
              Clear 
    </a>
          </div>
        </div>

      </div>
      <div className='col-6'>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header fw-bold">operation</div>
          <ul className="list-group list-group-flush">
            {
             props.operation.map((item)=>{
                  return(
            <li className="list-group-item fw-bold">{item}</li>

                  )
              })
            }

          
          </ul>
        </div>

      </div>

    </div>
  )

}

export default CalculatingMachine
