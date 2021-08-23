import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosSnow } from 'react-icons/io';

import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiDayHail,
  WiDayThunderstorm,
  WiWindy
} from 'react-icons/wi';

/* Icon Clear */
const IconClearIcon = () => <IconClear />;

const IconClear = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDaySunny />
  </IconContext.Provider>
);

/* Icon Few Clouds */
const IconFewCloudsIcon = () => <IconFewClouds />;

const IconFewClouds = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayCloudy />
  </IconContext.Provider>
);

/* Icon Clouds */

const IconCloudsIcon = () => <IconClouds />;

const IconClouds = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiCloud />
  </IconContext.Provider>
);

/* Icon Broken Clouds */
const IconBrokenCloudsIcon = () => <IconBrokenClouds />;

const IconBrokenClouds = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiCloudy />
  </IconContext.Provider>
);

/* Icon Shower Rain */
const IconShowerRainIcon = () => <IconShowerRain />;

const IconShowerRain = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayShowers />
  </IconContext.Provider>
);

/* Icon rain */
const IconRainIcon = () => <IconRain />;

const IconRain = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayHail />
  </IconContext.Provider>
);

/* Icon thunderstorm */
const IconThunderstormIcon = () => <IconThunderstorm />;

const IconThunderstorm = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayThunderstorm />
  </IconContext.Provider>
);

/* Icon snow */
const IconSnowIcon = () => <IconSnow />;

const IconSnow = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <IoIosSnow />
  </IconContext.Provider>
);

/* Icon mist */
const IconMistIcon = () => <IconMist />;

const IconMist = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiWindy />
  </IconContext.Provider>
);

const IconsWeather = {
  clear: IconClearIcon,
  fewclouds: IconFewCloudsIcon,
  clouds: IconCloudsIcon,
  brokenclouds: IconBrokenCloudsIcon,
  showerrain: IconShowerRainIcon,
  rain: IconRainIcon,
  thunderstorm: IconThunderstormIcon,
  snow: IconSnowIcon,
  mist: IconMistIcon
};

export default IconsWeather;
