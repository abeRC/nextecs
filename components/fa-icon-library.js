/*Purpose: to avoid importing icons individually.
Does it work? MAybe but I can't get it to, so let's just pretend this doesn't exist, aye? */
import { library } from '@fortawesome/fontawesome-svg-core';

import { 
  faEnvelope, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter,
  faTelegram,
  faFacebook,
  faInstagram
 } from '@fortawesome/free-brands-svg-icons';

library.add(
  faEnvelope,
  faTwitter,
  faTelegram,
  faFacebook,
  faInstagram
);