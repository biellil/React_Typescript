import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
export const SweetLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  
`;

export const OverrideClipLoader = styled(ClipLoader)`
  border-color: green;
  width: 150px; 
  height: 150px;
`;
