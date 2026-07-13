import React, { useState } from 'react';

function Signup() {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!username || !password) {
            setError("All fields are required.");
            return;
        }

        const endpoint = isLogin ? "login" : "signup";
        try {
            const response = await fetch(`http://localhost:5175/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Something went wrong.");
                return;
            }

            if (isLogin) {
                setSuccess("Login successful! Redirecting to dashboard...");
                setTimeout(() => {
                    window.location.href = `http://localhost:5174/?token=${data.token}&username=${data.username}`;
                }, 1000);
            } else {
                setSuccess("Account registered! Please switch to login to enter.");
                setUsername("");
                setPassword("");
                setIsLogin(true);
            }
        } catch (err) {
            setError("Unable to connect to the authentication server.");
        }
    };

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-5 card p-4 shadow-sm border-0 bg-light">
                    <h2 className="text-center mb-4 fw-semibold text-warning">
                        {isLogin ? "Log In to Mifflin" : "Open a Mifflin Account"}
                    </h2>
                    <p className="text-center text-muted mb-4">
                        {isLogin
                            ? "Enter your credentials to access your trading platform"
                            : "Create an account to start investing in stocks and mutual funds"}
                    </p>

                    {error && <div className="alert alert-danger py-2">{error}</div>}
                    {success && <div className="alert alert-success py-2">{success}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-medium text-secondary">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-medium text-secondary">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-warning w-100 text-white fw-bold py-2 mb-3">
                            {isLogin ? "Log In" : "Sign Up"}
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <span className="text-muted">
                            {isLogin ? "New to Mifflin? " : "Already have an account? "}
                        </span>
                        <button
                            className="btn btn-link p-0 text-warning fw-semibold text-decoration-none"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError("");
                                setSuccess("");
                            }}
                        >
                            {isLogin ? "Sign Up Now" : "Log In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;