import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('micheal@gmail.com');
  const [password, setPassword] = useState('badman01');
  const [error, setError] = useState('');
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email === 'micheal@gmail.com' && password === 'baldman01') {
      // Successful login, navigate to the home page
      history('/home');
    } else {
      setError('Incorrect email or password');
    }
  }

  const bgImageStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };
  return (
    <div
      style={bgImageStyle}
      className=" flex items-center justify-center"
    >
      <div className=" max-w-[300px] w-[100%] mx-auto items-center justify-center flex flex-col ">
        <div className="  bg-white pt-[30px] pb-[60px]">
          <h1 className="text-center text-[30px] font-semibold mb-6">LOGIN</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="mb-4 border-2 flex justify-center items-center mx-5 p-2 rounded-full  ml-6 w-[100%] max-w-[200px] "
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                className="mb-4 border-2 flex justify-center items-center mx-5 p-2 rounded-full ml-6  w-[100%] max-w-[200px] px-[auto]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="items-center flex flex-col justify-center ">
              <button className="bg-green-500 px-[70px] py-[8px] rounded-full">
                Submit
              </button>
              <h1 className="text-sm ">Forget password</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
