const TitleContext = React.createContext();
export const useTitle = () => React.useContext(TitleContext);

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = React.useState("Hello");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};