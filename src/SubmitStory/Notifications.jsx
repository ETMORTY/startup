import React from 'react';

import { submissionNotifier, storyEvent } from './submissionNotifier.js';

export function Notifications(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    submissionNotifier.addHandler(handleGameEvent);

    return () => {
      submissionNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === storyEvent.Submit) {
        message = ` submitted a story`;
      } else if (event.type === storyEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='user'>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
