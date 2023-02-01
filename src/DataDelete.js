import React, { useState } from 'react'
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

    const [firstname, setfirstName] = useState('')
    const [surname, setsurName] = useState('')
    const [id, setId] = useState()

    //Normal Hali

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.delete(`https://localhost:5001/user/${id}`)
    //     .then(res => console.log("Deleted" , res))
    //     .catch(err => console.log(err))

    //     window.location.reload()
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'delete',
            url: `https://localhost:44336/User/${id}`,
            headers: {},

        })
            .then(res => console.log("Deleted", res))
            .catch(err => console.log(err))

    }

    const userCheck = (e) => {
        e.preventDefault();
        axios({
            method: 'get',
            url: `https://localhost:44336/User/${id}`,
            headers: {},

        })

            .catch(function (error) {
                if (error.response) {

                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            }).then(res => {
                handleSubmit()
            })
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
                        <input onChange={(e) => setId(e.target.value)} id="id" type="text" class="form-control" placeholder="Id" aria-label="" aria-describedby="basic-addon1" style={inputStyle} required />
                    </div>
                    <div className="text-left" style={buttonStyle}>
                        <button type="submit" className="btn btn-danger">Çalışan Kaydını Sil</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataAdd
