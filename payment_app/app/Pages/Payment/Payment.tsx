import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export function Payment() {
  const router = useRouter();
  const { operator } = router.query;
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      setMessage('Оплата прошла успешно!');
      setTimeout(() => router.push('/'), 2000);
    } else {
      setMessage('Ошибка при оплате, попробуйте снова.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Оплата - {operator}</Title>
        <Label>
          Номер телефона:
          <InputMask
            mask="+7 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Label>
        <Label>
          Сумма (1-1000 руб):
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            max="1000"
            required
          />
        </Label>
        <Button type="submit">Подтвердить</Button>
        {message && <Message>{message}</Message>}
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Message = styled.div`
  margin-top: 20px;
  color: #ff0000;
`;
