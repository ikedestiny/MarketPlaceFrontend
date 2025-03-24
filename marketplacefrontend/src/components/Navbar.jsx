import React from 'react';
import { useNavigate } from 'react-router-dom';
import Font, { Text } from 'react-font'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center p-5 sticky top-0 bg-[#07081e] w-full shadow-lg'>
            <div className='mx-[10%] my-2 flex justify-between items-center w-full'>
                <a href="/" className='text-7xl text-[#90e0ef] font-pacifico font-bold'>MP</a>
                {/* <Text family='Monoton' style={{ fontSize: 50, margin: 0 }} onLoad={() => console.log('loaded Monoton')}>
                    Super simple :)
                </Text> */}
                <div className='text-white flex items-center space-x-5'>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button
                        className='text-2xl hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                        onClick={() => navigate("/Home")}
                    >
                        Browse Collection
                    </button>
                </div>
            </div>
            <input
                type="text"
                placeholder='Search items...'
                className='bg-white rounded-full p-2 w-[50%] text-center mt-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
        </div>
    );
};

export default Navbar;
