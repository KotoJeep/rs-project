import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SearchBar from '../../components/SearchBar';

const MainPage = () => {
  return (
    <div style={{ padding: '50px' }}>
      {/*<Card*/}
      {/*  image={'https://api.lorem.space/image/fashion?w=640&h=480&r=7346'}*/}
      {/*  title={'Unbranded Plastic Ball'}*/}
      {/*  description={*/}
      {/*    'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'*/}
      {/*  }*/}
      {/*  category={'Clothes'}*/}
      {/*  price={379}*/}
      {/*/>*/}
      {/*<Button>Find Now</Button>*/}
      {/*      <Input
        value=""
        onChange={(value: string) => console.log(value)}
        placeholder="Начните набирать свой вопрос"
      />*/}
      <SearchBar />
    </div>
  );
};

export default MainPage;
