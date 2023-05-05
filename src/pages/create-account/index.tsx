import Navbar from "~/components/Navbar/Navbar"
import LoginComponent from "../../components/LoginComponent/LoginComponent"

export default function CreateAccount() {
    return (
        <div style={{backgroundColor: "#18191B", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Navbar />
            <LoginComponent />
        </div>
    )
}