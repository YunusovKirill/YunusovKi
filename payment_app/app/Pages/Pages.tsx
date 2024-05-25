import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const operators = ['МТС', 'Билайн', 'Мегафон'];

export function Pages() {
  const router = useRouter();

  const handleOperatorClick = (operator: string) => {
    router.push(`/payment?operator=${operator}`);
  };

  return (
    <Container>
      <Title>Выберите оператора</Title>
      <OperatorList>
        {operators.map((operator) => (
          <OperatorItem 
            key={operator} 
            onClick={() => handleOperatorClick(operator)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            {operator}
          </OperatorItem>
        ))}
      </OperatorList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const OperatorList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OperatorItem = styled(motion.li)`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;
