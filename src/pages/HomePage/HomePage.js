import React from 'react';

import { Separator } from 'components'
import {
  HomeTitle,
  HomeSubtitle,
  HomeDescription,
  HomeImageWrapper,
  HomeImage,
} from './HomePage.css';
import Features from './components/Features';
import homeSmall from 'images/home_640.jpg';
import homeMedium from 'images/home_1280.jpg';
import homeBig from 'images/home_1920.jpg';

const HomePage = () => {
  return (
    <>
      <HomeTitle>Nasz gabinet stomatologiczny</HomeTitle>
      <HomeSubtitle>Uśmiech pacjenta – naszym sukcesem</HomeSubtitle>
      <Separator />
      <HomeDescription>
        Gabinet stomatologiczny ArtDent to miejsce, w którym robimy wszystko dla pełnego komfortu oraz zadowolenia naszych pacjentów. Zależy nam na ich zaufaniu. Właśnie dlatego działamy zawsze profesjonalnie i stawiamy na indywidualne podejście do każdego przypadku. Wiemy, że tylko to stanowi gwarancję powodzenia, nawet najtrudniejszego leczenia.
      </HomeDescription>
      <HomeDescription>
        Nasz zespół to doskonale wykwalifikowani specjaliści, dla których praca jest również pasją. Posiadają wieloletnie doświadczenie, ponadto regularnie rozwijają swoje umiejętności, co pozwala im na stosowanie najnowszych technik z zakresu stomatologii. Gabinet ArtDent wyróżnia także doskonałej klasy sprzęt. Wszystko to w połączeniu z szerokim zakresem oferowanych zabiegów, sprawia że nasi pacjenci chcą do nas powracać.
      </HomeDescription>
      <HomeImageWrapper>
        <HomeImage
          srcSet={`${homeSmall} 640w, ${homeMedium} 1280w, ${homeBig} 1920w`} sizes='(max-width: 640px) 600px, (max-width: 1280px) 1200px, 1800px'
          src={homeBig}
          alt="gabinet"
        />
      </HomeImageWrapper>
      <HomeDescription>
        Najlepszą rekomendacją naszego gabinetu stomatologicznego, są zadowoleni, ze świadczonych przez nas usług, pacjenci. Dodatkowym atutem gabinetu ArtDent jest bezstresowa atmosfera i przyjazny wystrój. Stomatolodzy z Naszego gabinetu wykonują przegląd uzębienia konsultują to z pacjentem i proponują odpowiednie metody leczenia. Pamiętajmy o tym, że dobry stomatolog i odpowiednio zaplanowane leczenie, to najlepsza droga do sukcesu i radości z posiadania zdrowych i pięknych zębów.
      </HomeDescription>
      <Features />
    </>
  );
}

export default React.memo(HomePage);