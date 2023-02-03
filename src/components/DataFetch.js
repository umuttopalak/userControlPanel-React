import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetch(){

    const tableStyle = {
        margin: "10px",
        padding: "50px",
        margin: "auto"
    }
    const inputStyle = {
        width: "30%",
        display: "hidden"

    }

    const paddingStyle = {
        padding: "2%"
    }

    const [posts, setPosts] = useState([])

    const sort = () => {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("workerTable");
        switching = true;
        /* Değiştirme tamamlanana kadar döngüye gir*/
        while (switching) {
            switching = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {

                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {

                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    useEffect(() => {
        axios.get(`https://localhost:44336/User`)
            .then(res => {
                setPosts(res.data)
                sort()
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (

        <div className='container border' style={paddingStyle}>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Bölüm giriniz" aria-label="Bölüm giriniz" aria-describedby="button-addon2" style={inputStyle} />
            </div>
            <div className="row">
                <div className="col">
                    <table id='workerTable' className="table border" style={tableStyle}>
                        <thead className="">
                            <tr>
                                <th>#</th>
                                <th>İsim</th>
                                <th>Soyisim</th>
                                <th>Bölüm</th>
                                <th>İşe girme tarihi</th>
                            </tr>
                        </thead>
                        <tbody className='table' style={tableStyle} >

                            {posts.map(post =>
                                <tr>
                                    <td key={post.Id}>{post.id} </td>
                                    <td key={post.Id}>{post.firstName} </td>
                                    <td key={post.Id}>{post.surName} </td>
                                    <td key={post.Id}>{post.descriptor} </td>
                                    <td key={post.Id}>{post.month}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataFetch