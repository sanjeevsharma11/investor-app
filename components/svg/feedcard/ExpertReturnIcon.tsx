import { SvgCss } from "react-native-svg";


const xml = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.90147 10.8167C8.60883 10.8167 10.8029 8.6193 10.8029 5.90837C10.8029 3.1976 8.60883 1 5.90147 1C3.19412 1 1 3.1976 1 5.90837C1 8.6193 3.19412 10.8167 5.90147 10.8167Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.90113 8.85349C7.52613 8.85349 8.8423 7.53498 8.8423 5.90843C8.8423 4.28188 7.52613 2.96338 5.90113 2.96338C4.27613 2.96338 2.95996 4.28188 2.95996 5.90843C2.95996 7.53498 4.27613 8.85349 5.90113 8.85349Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.9013 6.8901C6.44248 6.8901 6.88219 6.45055 6.88219 5.90837C6.88219 5.36619 6.44248 4.92664 5.9013 4.92664C5.36012 4.92664 4.92041 5.36619 4.92041 5.90837C4.92041 6.45055 5.36012 6.8901 5.9013 6.8901Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`



const ExpertReturnIcon = () => {
  return (
    <SvgCss
      xml={xml}
      
    />
  );
}

export default ExpertReturnIcon;