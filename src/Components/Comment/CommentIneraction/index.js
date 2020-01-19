import React from "react";
import { Icon } from "semantic-ui-react";

import "./index.css";

const Footer = props => {
  return (
    <div>
      {/* <button>upvote</button>
      <button>downVote</button>
      <button>Share</button> */}
      <button>
        <Icon disabled name="thumbs up outline" />
      </button>
      <button>
        <Icon disabled name="thumbs down outline" />
      </button>
      <button>
        <Icon disabled name="share" />
      </button>
    </div>
  );
};

export default Footer;
