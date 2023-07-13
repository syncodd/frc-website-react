import Image from 'next/image';
import React from 'react'
import OurNeeds from './OurNeeds'

const Sponsorship = () => {
  return (
    <div className="flex flex-col mx-auto">
      <h1 className="text-6xl font-bold text-black mb-20 ml-28 mt-20">Sponsorluk</h1>
      <h1 className="text-4xl font-bold text-black mb-20 ml-28">Sponsorluk İhtiyaçlarımız </h1>
      <div className="h-full w-full flex flex-row items-center justify-evenly">
        <OurNeeds title="Mekanik" needings={[
          'Üretim Maliyeti',
          'Donanım Gereksinimleri',
          'Bakım Ücreti']}/>
        <OurNeeds title="Kreatif" needings={[
          'Baskı Giderleri',
          'Kiralama Hizmetleri',
          'Yazılım Lisanları']}/>
        <OurNeeds title="Organizasyon" needings={[
          'Lojistik Destek',
          'Konaklama Giderleri',
          'Yarışma Başvuru Ücreti']}/>
        <OurNeeds title="Yazılım" needings={[
          'Sunucu Kurulumu',
          'Donanım Bileşenleri',
          'Lisans Ödemeleri']}/>
        <OurNeeds title="Elektronik" needings={[
          'PCB Üretimi',
          'Sensör Vergilendirmesi',
          'Komponent Desteği']}/>
        </div>
      <h1 className="text-4xl font-bold text-black mb-16 ml-28 mt-20">Sponsorlarımız </h1>
      <div className="h-full w-full flex flex-row items-center justify-evenly">
          <Image 
          src="/assets/gurmen_tech.png"
          alt="gurmen_tech"
          width={200}
          height={200}
          className="mix-blend-multiply"
          />
          <Image 
          src="/assets/fikret_yuksel.png"
          alt="fikret_yuksel"
          width={200}
          height={200}
          />
          <Image 
          src="/assets/vmind.jpg"
          alt="vmind"
          width={200}
          height={200}
          className="mix-blend-multiply"
          />
          <Image 
          src="/assets/tekyaz_min.svg"
          alt="tekyaz"
          width={200}
          height={200}
          />
          <Image 
          src="/assets/inpak.jpeg"
          alt="inpak"
          width={200}
          height={200}
          className="mix-blend-multiply"
          />
          <Image 
          src="/assets/charged_up.png"
          alt="charged_up"
          width={200}
          height={200}
          />
      </div>
    </div>
  )
}

export default Sponsorship