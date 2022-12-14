import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataAdd = () => {

    const inputStyle = {
        marginLeft: "25%",
        marginRight: "25%",

    }

    const buttonStyle = {
        paddingLeft: "2%",
        paddingBottom: "2%"
    }

    const [firstName, setfirstName] = useState('')
    const [surName, setsurName] = useState('')
    const [descriptor, setDescriptor] = useState('')
    const [month, setMonth] = useState()
    const [id, setId] = useState()

    const handleSubmit = (e) => {
        axios({
            method: 'post',
            url: `https://localhost:5001/user`,
            headers: {},
            data: {
                firstName,
                surName,
                descriptor,
                id,
                month
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="border text-center">
                    <br></br><br></br>
                    <div className="input-group mb-3" >
                        <input onChange={(e) => setfirstName(e.target.value)} id="firstname" type="text" class="form-control" placeholder="İsim" aria-label="" aria-describedby="basic-addon1" style={inputStyle} required />
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e) => setsurName(e.target.value)} id="surname" type="text" class="form-control" placeholder="Soyisim" aria-label="" aria-describedby="basic-addon1" style={inputStyle} required />
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e) => setDescriptor(e.target.value)} id="descriptor" type="text" class="form-control" placeholder="Departman" aria-label="" aria-describedby="basic-addon1" style={inputStyle} required />
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e) => setMonth(e.target.value)} id="month" type="text" class="form-control" placeholder="İşe" aria-label="" aria-describedby="basic-addon1" style={inputStyle} required />
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e) => setId(e.target.value)} id="id" type="text" class="form-control" placeholder="Id" aria-label="" aria-describedby="basic-addon1" style={inputStyle} required />
                    </div>
                    <div className="text-left" style={buttonStyle}>
                        <button type="submit" className="btn btn-success" >Çalışan Kaydını Tamamla</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataAdd
