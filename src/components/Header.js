import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 16px;
  color: white;
  text-align: center;
  display:flex;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      Auth App
    </HeaderContainer>
  );
};

export default Header;
