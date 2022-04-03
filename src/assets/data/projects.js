import { v4 as uuidv4 } from 'uuid';
import socialMedia from '../images/socialMedia.jpg';
import UTrackerImg from '../images/utracker.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import sharanPortfolio from '../images/portfolio.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Code Editor',
    desc:
      'Code Editor is a real-time editor which helps for collaborating and write code between users.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Cryptocurrency Tracker',
    desc:
      'Cryptocurrency Tracker helps the people to get the information of trending coins of last 24 hours.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc: 'A portfolio for myself to know more about me and my projects works.',
    img: sharanPortfolio,
  },
  {
    id: uuidv4(),
    name: 'Social Media App',
    desc:
      'A Social Media app where user can login, see all articles and post articles.',
    img: socialMedia,
  },
];

export default projects;
