const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const Login = async (data) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Erreur de connexion à l'API :", error);
        return { error: true, message: "Impossible de contacter l'API." };
    }
};

export default Login;
