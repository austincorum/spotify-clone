// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// https://developer.spotify.com/dashboard/applications

export const authEndpoint = "https:/accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "12dd56e496e8431484cf9d3780526ec1";
const scopes = [
    "user-read-current-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        // #accessToken=
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;