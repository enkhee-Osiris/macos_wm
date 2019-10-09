import { defaultTheme } from "./lib/style";

const command = "bash osiris/lib/spotify/get_track_metadata.sh";
const refreshFrequency = 5000; // ms

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
  font-weight: bold;
  margin-right: calc(13ch + 13px);
`;

const render = ({ output }) => {
  if (!output) return null;

  const { name, artists } = JSON.parse(output);
  if (!name || !artists) return null;

  const artistsName = artists.map(artist => artist.name).join(" X ");
  let spotify = `${artistsName} - ${name}`;
  if (spotify.length > 34) spotify = `${spotify.slice(0, 30)} ...`;

  return <div>{`${spotify}`}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
