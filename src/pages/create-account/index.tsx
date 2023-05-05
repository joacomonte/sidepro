import AuthShowcase from "~/utils/AuthShowcase"
import LoginComponent from "../../components/LoginComponent/LoginComponent"
import { useEffect } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function CreateAccount() {

    const { data: sessionData } = useSession();
    
    const router = useRouter () ;

    useEffect(() => {
        if (sessionData) {
          void router.push({ pathname: "/" });
        }
      }, [router, sessionData]);
      
    

    return (
        <div style={{
            marginTop: "100px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "flex-start", 
            alignItems: "center",
            gap: "20px",
        }}
            >
                <LoginComponent />

                <div className="flex flex-col items-center gap-2">
                    <AuthShowcase />
                </div>
        </div>
    )
}