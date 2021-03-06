import _ from "lodash";

export const checkTriggers = (slack, triggers, message) => {
  // assume any caller is smart enough to only have one valid trigger per statement
  _.each(triggers, (t) => {
    const trigger = `${slack.self.name} ${t.trigger}`;
    if (message.text && message.text.indexOf(trigger) === 0) {
      // trim out the trigger for clarity in the action
      message.text = message.text.substr(trigger.length + 1);
      t.action(message, slack);

      // now return false to break the execution so we don't do more than one action
      return false;
    }
  });
};