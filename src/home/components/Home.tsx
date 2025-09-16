import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {globalSignOut} from "../../users/services/login-service.ts";
import {TokenStorage} from "../../users/services/user-token-storage-service.ts";

export const Home = () => {
    useEffect(() => {
        if (!TokenStorage.getAccessToken()) {
            navigate("/login")
        }
    }, [])

    const navigate = useNavigate()

    const logout = () => {
        globalSignOut(TokenStorage.getAccessToken()!)
        navigate("/login")
    }

    return (
        <div style={{ padding: 24, color: "#e5e7eb" }}>
            <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => navigate("/subscriptions")}>My Subscriptions</button>
                <button onClick={() => navigate("/discover")}>Discover</button>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    );
};