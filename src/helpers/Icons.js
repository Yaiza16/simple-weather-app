import React from 'react';
import { IconContext } from 'react-icons';
import { IoLocationSharp, IoArrowBackCircleSharp } from 'react-icons/io5';
import { IoIosSnow } from 'react-icons/io';
import {
  WiDaySunny,
  WiCloud,
  WiDayShowers,
  WiDayThunderstorm,
  WiWindy,
  WiRain,
  WiSmoke,
  WiDayHaze,
  WiDust,
  WiFog,
  WiSandstorm,
  WiStormShowers,
  WiTornado
} from 'react-icons/wi';

export const IconLocation = () => (
  <IconContext.Provider value={{ size: '18px', color: '#dadff7' }}>
    <IoLocationSharp />
  </IconContext.Provider>
);

export const IconSearch = () => (
  <IconContext.Provider value={{ size: '16px', color: '#dadff7' }}>
    <IoLocationSharp />
  </IconContext.Provider>
);

export const IconReturn = () => (
  <IconContext.Provider value={{ size: '24px', color: '#dadff7' }}>
    <IoArrowBackCircleSharp />
  </IconContext.Provider>
);

///
///
///
/* WEATHER ICONS */

/* Icon thunderstorm */
const IconThunderstormComponent = () => <IconThunderstorm />;

const IconThunderstorm = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayThunderstorm />
  </IconContext.Provider>
);

/* Icon drizzle */
const IconDrizzleComponent = () => <IconDrizzle />;

const IconDrizzle = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayShowers />
  </IconContext.Provider>
);

/* Icon rain */
const IconRainComponent = () => <IconRain />;

const IconRain = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiRain />
  </IconContext.Provider>
);

/* Icon snow */
const IconSnowComponent = () => <IconSnow />;

const IconSnow = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <IoIosSnow />
  </IconContext.Provider>
);

/* Icon mist */
const IconMistComponent = () => <IconMist />;

const IconMist = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiWindy />
  </IconContext.Provider>
);

/* Icon smoke */
const IconSmokeComponent = () => <IconSmoke />;

const IconSmoke = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiSmoke />
  </IconContext.Provider>
);

/* Icon haze */
const IconHazeComponent = () => <IconHaze />;

const IconHaze = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDayHaze />
  </IconContext.Provider>
);

/* Icon dust */
const IconDustComponent = () => <IconDust />;

const IconDust = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDust />
  </IconContext.Provider>
);

/* Icon fog */
const IconFogComponent = () => <IconFog />;

const IconFog = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiFog />
  </IconContext.Provider>
);

/* Icon sand */
const IconSandComponent = () => <IconSand />;

const IconSand = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiSandstorm />
  </IconContext.Provider>
);

/* Icon ash */
const IconAshComponent = () => <IconAsh />;

const IconAsh = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDust />
  </IconContext.Provider>
);

/* Icon Squall */
const IconSquallComponent = () => <IconSquall />;

const IconSquall = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiStormShowers />
  </IconContext.Provider>
);

/* Icon tornado */
const IconTornadoComponent = () => <IconTornado />;

const IconTornado = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiTornado />
  </IconContext.Provider>
);

/* Icon Clear */
const IconClearComponent = () => <IconClear />;

const IconClear = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiDaySunny />
  </IconContext.Provider>
);

/* Icon Clouds */

const IconCloudsComponent = () => <IconClouds />;

const IconClouds = () => (
  <IconContext.Provider value={{ size: '50px', color: '#dadff7' }}>
    <WiCloud />
  </IconContext.Provider>
);

const IconsWeather = {
  thunderstorm: IconThunderstormComponent,
  drizzle: IconDrizzleComponent,
  rain: IconRainComponent,
  snow: IconSnowComponent,
  mist: IconMistComponent,
  smoke: IconSmokeComponent,
  haze: IconHazeComponent,
  dust: IconDustComponent,
  fog: IconFogComponent,
  sand: IconSandComponent,
  ash: IconAshComponent,
  squall: IconSquallComponent,
  tornado: IconTornadoComponent,
  clear: IconClearComponent,
  clouds: IconCloudsComponent
};

export default IconsWeather;
