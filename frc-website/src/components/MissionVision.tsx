import React from 'react'
import Image from 'next/image';

const MissionVision = () => {
  return (
    <div className="h-full w-full flex flex-row grow items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center pb-19">
        <Image
        src="/assets/mission.svg"
        alt="photo"
        width={300}
        height={300}
        />
        <h1 className="text-3xl font-bold mt-8">Misyon</h1>
        <p className="w-96 m-5 text-justify">TeRoBot, ekipleri ar-ge, sponsorluk ve mentörlük konularında tek bir çatı altında toplayan robotik klübüdür. Teknoloji ve mühendislik becerilerine yatkın ve kendisini bu alanlarda geliştirmek isteyen öğrencilere ulaşarak, çeşitli yarışma ve organizasyonlarda yer almalarını sağlar.</p>
      </div>
      <div className="left-1/2 -ml-0.5 w-0.5 h-[calc(100vh-74px)] bg-gray-600" />
      <div className="w-full flex flex-col items-center justify-center">
        <Image
        src="/assets/vision.svg"
        alt="photo"
        width={300}
        height={300}
        />
        <h1 className="text-3xl font-bold mt-8">Vizyon</h1>
        <p className="w-96 m-5 text-justify">Vizyonumuz, hem Türkiye’de hem de yurt dışında ulaştığımız herkese robotik ve teknoloji alanında sahip olduğumuz tüm değerleri en iyi şekilde temsil ederken süreç içerisinde  saygılı, disiplinli, hoşgörülü, girişimci, hevesli, çevreye duyarlı, takım ruhunu ve mühendislik  ruhunu benimseyebilen, bununla beraber bilimi ve teknolojiyi kullanarak yaratıcı, çözüm üretebilen liderler olmayı hedefliyoruz.</p>
      </div>
    </div>
  )
}

export default MissionVision