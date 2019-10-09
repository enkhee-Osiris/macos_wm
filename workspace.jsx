import { defaultTheme } from "./lib/style";

const command = "bash osiris/lib/workspace.sh";
const refreshFrequency = 1000; // ms

const renderClass = `
  ${defaultTheme}
  right: auto;
  bottom: auto;
  font-weight: bold;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
