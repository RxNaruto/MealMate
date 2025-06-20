import React, { useState } from 'react';
import { InputBox } from '../components/InputBox';
import { Button } from '../components/Button';
import { Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Login = () => {
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with phone:', phone);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-left">
          <Link to="/" className="inline-flex items-center mb-8">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">MealMate</span>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-lg text-gray-600">
            or{' '}
            <Link to="/signup" className="text-orange-500 hover:text-orange-600 font-medium">
              create an account
            </Link>
          </p>
          
          {/* Decorative line */}
          <div className="w-16 h-1 bg-black mt-6 mb-8"></div>
        </div>

        {/* Food illustration */}

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="relative pb-6">
              <InputBox
                label={"Phone"}
                placeholder={"9898989898"}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <InputBox
                label={"Password"}
                placeholder={"abcd123"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button  label = {"LOGIN"} onClick={async(e)=>{
            try {
                const response = await axios.post("http://localhost:3000/t/login",{
                    phone: phone,
                    password: password
                })
                localStorage.setItem("token",response.data.token);
                    navigate("/home");
            } catch (e) {
                console.log(e);
            }
          }}>
            
          </Button>

          <p className="text-sm text-gray-600 text-left leading-relaxed">
            By clicking on Login, I accept the{' '}
            <Link to="/terms" className="text-gray-900 underline hover:text-orange-500">
              Terms & Conditions
            </Link>
            {' '}&{' '}
            <Link to="/privacy" className="text-gray-900 underline hover:text-orange-500">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

