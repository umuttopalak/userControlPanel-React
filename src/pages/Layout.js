import { Outlet, Link } from "react-router-dom";
const Layout = () => {

    const buttonDivStyle = {
        margin: "auto",
    }

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
                                <a><Link to="/" className="btn btn-warning" style={butonStyle}>Ana Sayfa</Link></a>
                            </div>

                            <div className="col-lg-3">
                                <a><Link to="/show" className="btn btn-primary" style={butonStyle}>Çalışanları Göster</Link></a>
                            </div>

                            <div className="col-lg-3">
                                <a><Link to="/add" className="btn btn-success" style={butonStyle}>Çalışan Ekle</Link></a>
                            </div>

                            <div className="col-lg-3">
                                <a><Link to="/delete" className="btn btn-danger" style={butonStyle}>Çalışan Sil</Link></a>
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

export default Layout;