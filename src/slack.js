// dummy file used to make an importable instance of slack
import Slack from "slack-client";

const slackToken = "xoxb-21641460357-2lceMgvGyeHylou1gErzP9UO";
const autoReconnect = true; // Automatically reconnect after an error response from Slack.
const autoMark = true; // Automatically mark each message as read after it is processed.

const slack = new Slack(slackToken, autoReconnect, autoMark);

slack.on("open", () => {
  console.log(`Connected to ${slack.team.name} as ${slack.self.name}`);
});

slack.on("message", (message) => {
});

slack.on("error", (err) => {
});

slack.login();

export default slack;
