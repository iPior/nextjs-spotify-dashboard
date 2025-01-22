interface LoginProps {
  children: React.ReactNode;
}

const Login: React.FC<LoginProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Login;