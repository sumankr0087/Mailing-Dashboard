import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/signin", data);
            login(response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Sign-in failed", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4 text-center">Sign in to your account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;