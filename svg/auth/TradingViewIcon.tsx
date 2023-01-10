import { SvgCss } from 'react-native-svg';

const xml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.15908 8.88654L12.1379 8.88782L12.1804 18.937L8.14617 18.9088L8.14499 12.8791L4.15527 12.8728L4.15908 8.88654Z" fill="#7E7E7E"/>
<path d="M15.1532 12.7755C16.2652 12.7755 17.1667 11.874 17.1667 10.7619C17.1667 9.6499 16.2652 8.74841 15.1532 8.74841C14.0411 8.74841 13.1396 9.6499 13.1396 10.7619C13.1396 11.874 14.0411 12.7755 15.1532 12.7755Z" fill="#7E7E7E"/>
<path d="M19.231 8.89319L23.8793 8.89812L19.669 18.8639L15.0698 18.854L19.1989 8.9012L19.231 8.89319Z" fill="#7E7E7E"/>
</svg>
`;

const TradingViewIcon = () => {
  return <SvgCss xml={xml} />;
};

export default TradingViewIcon;
