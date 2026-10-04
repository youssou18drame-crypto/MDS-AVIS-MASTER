const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const Register = async (data) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.name,
                email: data.email,
                password: data.password
            }),
        });

        return await response.json();
    } catch (error) {
        console.error("Erreur de connexion à l'API :", error);
        return { error: true, message: "Impossible de contacter l'API." };
    }
};

export default Register;
