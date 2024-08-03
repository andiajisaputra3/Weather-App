import bgCloudy from '../assets/images/bgCloudy.jpg';
import bgRain from '../assets/images/bgRain.jpg'
import bgDrizzle from '../assets/images/bgDrizzle.jpg'
import bgClear from '../assets/images/bgClear.jpg'
import bgSnow from '../assets/images/bgSnow.jpg'
import bgHaze from '../assets/images/bgHaze.jpg'
import bgMist from '../assets/images/bgMist.jpg'
import cloud from '../assets/images/cloud.png'
import rain from '../assets/images/rain.png'
import clear from '../assets/images/clear.png'
import drizzle from '../assets/images/drizzle.png'
import snow from '../assets/images/snow.png'
import mist from '../assets/images/cloud.png'
import haze from '../assets/images/cloud.png'

export const weatherImages = {
    Clear: clear,
    Rain: rain,
    Snow: snow,
    Drizzle: drizzle,
    Clouds: cloud,
    Haze: haze,
    Mist: mist
}

export const backgroundImages = {
    Clear: `url(${bgClear})`,
    Clouds: `url(${bgCloudy})`,
    Drizzle: `url(${bgDrizzle})`,
    Rain: `url(${bgRain})`,
    Haze: `url(${bgHaze})`,
    Mist: `url(${bgMist})`,
    Snow: `url(${bgSnow})`
};