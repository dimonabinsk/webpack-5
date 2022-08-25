import './styles/main.scss';
import image from "./assets/img/webpack.png";
import { sayHello } from './js/components/seyHello';
import {createImg} from './js/utils/imgWebpack'

sayHello();

createImg( image );

