import React, { ReactNode } from "react";
import Wrapper from "../../../layout-navigation/src/components/wrapper/wrapper";
import './style.css'

const TestWrapper: React.FC<{children: ReactNode}> = ({children}) => {

  return ( 
  <Wrapper tabIndex={-1} className="App">
      {children}
  </Wrapper>
 )
};

export default TestWrapper;