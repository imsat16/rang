const Button = ({children,color,...props}) => {
    console.log(props);
    const BtnType = {
        DEFAULT:'',
        PRIMARY:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:bg-gray-300 disabled:text-gray-500 disabled:font-medium',
        LIGHT:'bg-white hover:bg-blue-100 hover:text-blue-500 text-blue-700 font-bold py-2 px-4 rounded-full',
        DARK:'bg-dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
        SECONDARY:'bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
        WARNING:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
        ERROR:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
    }
    const TypeButton = BtnType[color || BtnType.DEFAULT];
  return (
    // <button className="bg-blue-500 text-white font-semibold rounded-full py-2">
    <button className={TypeButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
