    import React,{useState} from 'react'
    import json from "../jsonfile/geography.json"

    let data=json;

    export default function Form() {
        const [form, setform] = useState({
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            Address:"",
            date:"",
            gender:"",
            Hobby:[],
            country:"",
            // States:"",
            // city:"",
        });

        

        const OnchangeHandler=(e)=>{
            const { name, value } = e.target;
            setform({ ...form, [name]: value });
        }

        const Submithandler=(e)=>{
            e.preventDefault();
            console.log(form);
        }

    return (
        <div>
            <form onSubmit={Submithandler}>
                <div>
                    <input type="text" placeholder='firstname' name='firstname' value={form.firstname}  onChange={OnchangeHandler} />
                    <input type="text" placeholder='lastname' name='lastname' value={form.lastname} onChange={OnchangeHandler}/>
                </div>
                <div>
                    <input type="email" placeholder='Email' name='email' value={form.email} onChange={OnchangeHandler}/>
                    <input type="text" placeholder='PhoneNo' name='phone' value={form.phone} onChange={OnchangeHandler} />
                </div>
                <div>
                    <textarea name='Address'  placeholder='Address' value={form.Address}  onChange={OnchangeHandler}></textarea>
                </div>
                <div>
                    <input type="date" placeholder='date' name='date' value={form.date} onChange={OnchangeHandler} />
                </div>
                <div>
                    <label htmlFor=""><input type="radio" name='gender' value='Male' checked={form.gender === 'Male'} onChange={OnchangeHandler} />Male</label>
                    <label htmlFor=""><input type="radio" name='gender' value='Female' checked={form.gender === 'Female'} onChange={OnchangeHandler} />Female</label>
                </div>
                <div>
                    <label htmlFor=""><input type="checkbox" name='Hobby' value="Dancing" checked={form.Hobby.includes("Dancing")} onChange={OnchangeHandler} />Dancing</label>
                     <label htmlFor=""><input type="checkbox" name='Hobby' value="Singing" checked={form.Hobby.includes("Singing")} onChange={OnchangeHandler} />Singing</label>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Country</option>
                        {
                            data.map((json)=>(
                                <option key={country.id}>{json.country}</option>
                            ))
                        }
                    </select>
                    <select name="" id="">
                        <option value="">States</option>
                    </select>
                    <select name="" id="">
                        <option value="">city</option>
                    </select>
                </div>
                    <button type='submit'>Submit</button>
            </form>
        </div>
    )
    }
