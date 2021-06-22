import React, {useEffect} from 'react';
import Deals from './Deals';
import covid from '../images/COVID-19.jpg';
import CarouselConatiner from '../Components/CarouselContainer';
import MainDeals from '../Components/MainDeals';
//import { Details } from '@material-ui/icons';

const Home = (props) => {
    useEffect(() => {
        document.title = `Home`;
          });
    return(<>
          <CarouselConatiner/>
          <Deals/>
          <img className="covid_img" src={covid} alt="covid"/>
          <MainDeals/>
         
    </>);
};

export default Home;
