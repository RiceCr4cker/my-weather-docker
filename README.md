
## curl weather

`curl "https://api.open-meteo.com/v1/forecast?latitude=50.8504&longitude=4.34878&current_weather=true&timezone=Europe%2FBrussels"`

## filter on current temperature

`curl "https://api.open-meteo.com/v1/forecast?latitude=50.8504&longitude=4.34878&current_weather=true&timezone=Europe%2FBrussels" | jq ".current_weather.temperature"`

## build the image locally

`docker build -t nbittich/temperature .`

## push the image on docker hub (must own nbittich namespace)

`docker push nbittich/temperature`

## run it

`docker run --rm nbittich/temperature`
