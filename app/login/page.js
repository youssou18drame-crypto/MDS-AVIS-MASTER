"use client";

import { useState } from "react";
import Login from "@/service/login";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {

        const result = await Login({
            email,
            password,
        });

        if (result && !result.error) {

            // Stockage du JWT dans un cookie
            document.cookie = `token=${result.token}; path=/; max-age=7200`;

            alert("Connexion réussie");

            window.location.href = "/";

        } else {

            alert(result.message);

        }
    };

    return (
        <div className="flex justify-center items-center h-screen">

            <div className="w-96 border rounded p-5">

                <h1 className="text-2xl font-bold mb-5">
                    Connexion
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="border w-full p-2 mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="border w-full p-2 mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="bg-blue-600 text-white w-full p-2 rounded"
                    onClick={handleSubmit}
                >
                    Se connecter
                </button>

            </div>

        </div>
    );
}