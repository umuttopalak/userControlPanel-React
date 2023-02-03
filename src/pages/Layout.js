import { Outlet, Link, Route, Routes } from "react-router-dom";
import {
    BrowserRouter as Router, Switch
} from "react-router-dom";

import PageHome from "../components/PageHome";
import DataAdd from "../components/DataAdd";
import DataDele from "../components/DataDelete";
import DataFetch from "../components/DataFetch";

export default function Layout() {

    const containerStyle = {
        padding: "5px",
        overflow: "hidden",
        margin: "auto",

    }

    const tableContainerStyle = {
        marginTop: "2%",
    }

    const butonStyle = {
        width: "80%"
    }

    return (
        <>
            <div className="App" >
                <div className="container text-center " style={containerStyle}>
                    <div className="container " style={containerStyle} >
                        <div className="row" style={tableContainerStyle}>
                            <div className="col-lg-3">
                                <Link to="/" className="btn btn-primary" style={butonStyle}>Ana Sayfa</Link>
                            </div>

                            <div className="col-lg-3">
                                <Link to="/show" className="btn btn-secondary" style={butonStyle}>Çalışanları Göster</Link>
                            </div>

                            <div className="col-lg-3">
                                <Link to="/add" className="btn btn-success" style={butonStyle}>Çalışan Ekle</Link>
                            </div>

                            <div className="col-lg-3">
                                <Link to="/delete" className="btn btn-danger" style={butonStyle}>Çalışan Sil</Link>
                            </div>
                        </div>
                        <br></br><br></br>
                    </div>
                </div>
            </div >
            <Outlet />

        </>
    )
};
