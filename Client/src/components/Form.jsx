import React, { useState } from 'react'
import json from "../jsonfile/geography.json"

let data = json;

let initailstate={
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Address: "",
    date: "",
    gender: "",
    Hobby: [],
    country: "",
    States: "",
    city: "",
}

export default function Form() {
    const [form, setform] = useState(initailstate);
    const [error, seterror] = useState(initailstate);

    let selectedcountry = data.find((country) => country.name === form.country)
    let selectedCity = selectedcountry?.States.find((state) => state.state === form.States)

    const OnchangeHandler = (e) => {
        const { name, value,type,checked } = e.target;
        // setform({ ...form, [name]: value });

        if(type==="checkbox"){
            let updateBoxes=[...form.Hobby];

            if(checked){
                updateBoxes.push(value);
            }else{
                updateBoxes=updateBoxes.filter((hob)=>hob!=value)
            }

            setform({...form,Hobby:updateBoxes})
        }
        else{
            setform({...form,[name]:value})
        }
    }

    const validateForm=()=>{
        let newErr={}

        if(!form.firstname){
            newErr.firstname="Enter the First Name"
        }
        
        if(!form.lastname){
            newErr.lastname="Enter the Last Name"
        }

        if(!form.email){
            newErr.email="Enter the Email"
        }

        if(!form.phone){
            newErr.phone="Enter the Phone"
        }

        if(!form.Address){
            newErr.Address="Enter the Address"
        }

        if(!form.date){
            newErr.date="Enter the Date"
        }

        if(!form.gender){
            newErr.gender="Enter the Gender"
        }

        if(!form.Hobby|| form.Hobby.length===0){
            newErr.Hobby="Enter the Hobby"
        }

        if(!form.country){
            newErr.country="Enter the Country"
        }

        if(!form.States){
            newErr.States="Enter the State"
        }

        if(!form.city){
            newErr.city="Enter the City"
        }

        seterror(newErr);
        return Object.keys(newErr).length===0;
    }

    const Submithandler = (e) => {
        e.preventDefault();

        if(validateForm()){
            console.log(form);
            setform(initailstate)
        }
        
    }

    return (
        <div>
            <form onSubmit={Submithandler}>
                <div>
                    <input type="text" placeholder='firstname' name='firstname' value={form.firstname} onChange={OnchangeHandler} />
                    {error.firstname && <p>{error.firstname}</p>}
                    <input type="text" placeholder='lastname' name='lastname' value={form.lastname} onChange={OnchangeHandler} />
                    {error.lastname && <p>{error.lastname}</p>}
                </div>
                <div>
                    <input type="email" placeholder='Email' name='email' value={form.email} onChange={OnchangeHandler} />
                    {error.email && <p>{error.email}</p>}
                    <input type="text" placeholder='PhoneNo' name='phone' value={form.phone} onChange={OnchangeHandler} />
                    {error.phone && <p>{error.phone}</p>}
                </div>
                <div>
                    <textarea name='Address' placeholder='Address' value={form.Address} onChange={OnchangeHandler}></textarea>
                    {error.Address && <p>{error.Address}</p>}
                </div>
                <div>
                    <input type="date" placeholder='date' name='date' value={form.date} onChange={OnchangeHandler} />
                    {error.date && <p>{error.date}</p>}
                </div>
                <div>
                    <label htmlFor=""><input type="radio" name='gender' value='Male' checked={form.gender === 'Male'} onChange={OnchangeHandler} />Male</label>
                    <label htmlFor=""><input type="radio" name='gender' value='Female' checked={form.gender === 'Female'} onChange={OnchangeHandler} />Female</label>
                    {error.gender && <p>{error.gender}</p>}
                </div>
                <div>
                    <label htmlFor=""><input type="checkbox" name='Hobby' value="Dancing" checked={form.Hobby.includes("Dancing")} onChange={OnchangeHandler} />Dancing</label>
                    <label htmlFor=""><input type="checkbox" name='Hobby' value="Singing" checked={form.Hobby.includes("Singing")} onChange={OnchangeHandler} />Singing</label>
                    {error.Hobby && <p>{error.Hobby}</p>}
                </div>
                <div>
                    <select name="country" value={form.country} onChange={OnchangeHandler} id="">
                        <option value="">Country</option>
                        {
                            data.map((country, index) => (
                                <option key={index} value={country.name}>{country.name}</option>
                            ))
                        }
                    </select>
                    {error.country && <p>{error.country}</p>}
                    <select name="States" value={form.States} onChange={OnchangeHandler} id="">
                        <option value="">States</option>
                        {
                            selectedcountry?.States.map((state,index)=>(
                                 <option key={index} value={state.state}>{state.state}</option>
                            ))
                        }
                    </select>
                    {error.States && <p>{error.States}</p>}
                    <select name="city" value={form.city} onChange={OnchangeHandler} id="">
                        <option value="">city</option>
                        {
                            selectedCity?.city.map((city,index)=>(
                                <option key={index} value={city}>{city}</option>
                            ))
                        }
                    </select>
                    {error.city && <p>{error.city}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
