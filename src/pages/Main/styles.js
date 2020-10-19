import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Menu = styled.div`
  width: 200px;
  background: #282b43;
  height: auto;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 10px 0 0 10px;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 16px;
  padding: 5px;
`;

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 10px;
`;

export const Li = styled.li`
  padding: 5px;
  color: #fff;
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center !important;
  height: 30px;
  cursor: pointer;
`;
export const LiB = styled.li`
  padding: 5px;
  color: #fff;
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center !important;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
`;

export const Pin = styled.span`
  backgroud: #cf0001;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-itens: center;
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 200px;
  width: auto;
  height: auto;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #333;
  font-size: 16px;
  color: #333;
  height: 40px;
  padding: 10px;
  font-weight: bolder;
`;
export const Chat = styled.div`
  padding: 20px;
  overflow-y: scroll;
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  top: 40px;
  background: #f1f1f1;
`;

export const Messages = styled.div`
  margin-top: 15px;
`;

export const User = styled.label`
  font-weight: bold;
  color: #333;
  font-size: 14px;
`;

export const Date = styled.span`
  color: #333;
  opacity: 0.7;
  font-size: 12px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #333;
`;

export const Send = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 200px;
  right: 0;
  border-top: 2px solid #333;
  padding: 10px;
  width: auto;
`;

export const SendBox = styled.input`
  padding: 7px 10px;
  border: 1px solid #282b43;
  border-radius: 5px;
  height: 36px;
  width: 95%;
`;
export const SendButton = styled.button`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #282b43;
  background: transparent;
  border: none;
  cursor: pointer;
`;
