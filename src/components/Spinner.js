import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

const Spinner = () => {
  return (
    <Container>
      <div className='lds-heart'>
        <div></div>
      </div>
    </Container>
  );
};

export default Spinner;
