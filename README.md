# SIMPLE WEATHER APP

## Preview

![Preview image](/design/preview.mp4)

## Challenge's description

This project has been done in order put into practice the knowledge I'm been acquiring through React's study (practicar los conocimientos adquiridos en React). I've used [Open Weather API](https://openweathermap.org/api) to get the weather data.

There is a problem with API's request. In order to get the needed information, it's required to make two differents request:

1. Request to [Current Weather Data API](https://openweathermap.org/current) in order to the get the geographical coordinates of the city.

2. Request to [One Call API](https://openweathermap.org/api/one-call-api) passing the coordinates in order to get the information.

Second API database is smaller than first one so it doesn't contain all the cities. If you type a location which second API database doesn't contain but first one does, you won't get a error message. Since you pass a geographical coordinates, One Call API will return weather data of the closest city to the coordinates that its database contains.

> E.g.: If you type 'Barcelona', you'll get Madrid's information since Barcelona's data is in first request but in second one isn't. Madrid is in both database and it's the closest city to Barcelona's coordinates.

## Features

- Loading spinner used is from [loader](https://vineethtrv.github.io/loader/)
