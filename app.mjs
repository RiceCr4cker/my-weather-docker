import fetch from "node-fetch";
async function main() {
    const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=50.8504&longitude=4.34878&current_weather=true&timezone=Europe%2FBrussels";
    const response = await fetch(endpoint);
    if (!response.ok) {
        return { "error": "could not fetch result" };
    }
    const json = await response.json();
    return { "weather": json.current_weather.temperature }
}

main().then(r => console.log(r));
