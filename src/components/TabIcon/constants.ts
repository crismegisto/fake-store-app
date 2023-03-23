import Routes from 'constants/routes';

interface Icons {
  [name: string]: string;
}

const ICONS: Icons = {
  [Routes.HomeNavigator]: 'home',
  [Routes.Support]: 'support-agent'
};

export default ICONS;
