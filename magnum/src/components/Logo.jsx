import logo from '../assets/logo.gif'
const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-48 h-48 flex justify-center items-center">
        <img 
          src={logo} 
          alt="Animated logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;