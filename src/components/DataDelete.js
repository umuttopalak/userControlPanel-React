import React, { useState } from 'react'
import axios from 'axios'

function DataDelete(){

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


    const handleSubmit = () => {

        axios({
            method: 'delete',
            url: `https://localhost:44336/User/${id}`,
            headers: {},

        })
            .then(res => {
                console.log("Deleted", res)
                alert("Çalışan kaydı silindi!")
                
            }
            )
            .catch(err => {
                console.log(err);
                if (err.request.status === 0) {
                    alert("Database'e erişilemiyor!")
                }
                if (err.request.status === 404) {
                    alert("Çalışan kaydı bulunmamaktadır!!")
                }
            })
    }

    const checkUser = (e) => {
        e.preventDefault();
        axios({
            method: 'get',
            url: `https://localhost:44336/User/${id}`,
            headers: {},
        })
            .then(res => {

                console.log("kullanıcı bulundu")
                console.log(res.data);
                if (res.data.firstName.toLowerCase() === firstname.toLowerCase() && res.data.surName.toLowerCase() === surname.toLowerCase()) {
                    handleSubmit();
                    document.getElementById("deleteForm").reset();
                }
                else {
                    alert("çalışan adı ve soyadı hatalı");
                }
            })
            .catch(err => {
                console.log(err);
                if (err.request.status === 404) {
                    alert("Çalışan kaydı bulunmamaktadır!!")
                }
                if (err.request.status === 0) {
                    alert("Database'e erişilemiyor!")
                }
            })
    }



    return (
        <div className="container">
            <form id='deleteForm' onSubmit={checkUser}>
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

export default DataDelete
