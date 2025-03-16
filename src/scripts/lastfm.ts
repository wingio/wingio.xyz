type RecentTracks = {
    track: Track[];
};

type Track = {
    artist: {
        "#text": string;
    };
    name: string;
    image: {
        size: string;
        "#text": string;
    }[];
    "@attr"?: {
        nowplaying: string;
    };
};

export const DEFAULT_IMAGE_ID = "2a96cbd8b46e442fc41c2b86b821562f";

export async function getNowPlaying(): Promise<Track | undefined> {
    let url = new URL("https://ws.audioscrobbler.com/2.0/");

    url.searchParams.set("api_key", import.meta.env.PUBLIC_LASTFM_TOKEN);
    url.searchParams.set("method", "user.getRecentTracks");
    url.searchParams.set("user", "WingCanListen");
    url.searchParams.set("limit", "1");
    url.searchParams.set("format", "json");

    let res = await fetch(url);

    if (!res.ok) return;

    let body = (await res.json()) as { recenttracks: RecentTracks; error?: number };
    if (body.error) return;

    return body.recenttracks.track.filter((track) => {
        return track["@attr"]?.nowplaying === "true";
    })[0];
}
