import { ReactComponent as ChannelIcon } from '../assets/icons/channelIcon.svg';
import { ReactComponent as LanguageIcon } from '../assets/icons/languageIcon.svg';
import { ReactComponent as GenreIcon } from '../assets/icons/genreIcon.svg';

const links = [
  {
    icon: <ChannelIcon />,
    title: 'Channels',
    linkTo: '/channels',
  },
  {
    icon: <LanguageIcon />,
    title: 'Languages',
    linkTo: '/languages',
  },
  {
    icon: <GenreIcon />,
    title: 'Genres',
    linkTo: '/genres',
  },
];

export default links;
