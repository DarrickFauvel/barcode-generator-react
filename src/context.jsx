import { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = (props) => {
  const [state, setState] = useState({
    author: "Darrick Fauvel",
    urlWebsite: "http://darrickfauvel.com",
    urlLinkedIn: "https://www.linkedin.com/in/darrickfauvel/",
    urlGitHub: "https://github.com/DarrickFauvel",
    textInput: "",
    location: "",
    subLocation: "",
    subLocationNumber: "",
    barcodeValue: "",
    locations: ["01A", "99A", "SHP", "MC"],
  });

  const groceryCodes = [
    {
      name: 'banana',
      upc: '208011000006',
      dpci: '267-00-8011',
      imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=325&hei=325&qlt=80&fmt=pjpeg'
    },
    {
      name: 'lemon',
      upc: '204053000004',
      dpci: '267-01-4053',
      imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_3d962311-4a0b-47f9-8146-28740dfa2d53?wid=325&hei=325&qlt=80&fmt=pjpeg'
    },
    {
      name: 'lime',
      upc: '204048000002',
      dpci: '267-01-4048',
      imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_3e3023d6-31c9-4a50-8d1e-a5a5719448ae?wid=325&hei=325&qlt=80&fmt=pjpeg'
    },
    {
      name: 'avocado',
      upc: '204046000004',
      dpci: '224-12-4770',
      imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_6d9d5f9f-7206-49c4-a381-6ba5a0c08504?wid=325&hei=325&qlt=80&fmt=pjpeg'
    },
  ]
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value?.toUpperCase(),
    }));
  };

  return (
    <Context.Provider value={{ state, setState, handleChange, groceryCodes }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
