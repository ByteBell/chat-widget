const Button = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return <button onClick={handleClick}>Button</button>;
};

export default Button;
