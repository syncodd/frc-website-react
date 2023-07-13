import Image from 'next/image';
import React from 'react'
import OurNeeds from './OurNeeds'
import PricingCard from './PricingCard';

const Sponsorship = () => {
  return (
    <div className="flex flex-col mx-auto">
      <h1 className="text-3xl font-bold text-black mb-20 ml-16 mt-20">Sponsorluk Paketlerimiz & İletişim</h1>
      <div className="flex flex-row mx-auto items-evenly">
        <PricingCard title="Bronz Paket" price="10k" context={[
          "Sosyal medyada teşekkür paylaşımı",
          "Şirketin adının ve logosunun web sitesinde paylaşılması",
          "Tanıtım videolarında şirket logosunun kullanılması",
          "Şirket logosunu takım portföyüne eklenmesi"]}/>
        <PricingCard title="Gümüş Paket" price="25k" context={[
          "Bronz paket içeriği",
          "Fuar ve etkinliklerde firma tanıtımı",
          "Yarışmalarda firma adının ve logosunun kullanımı",
          "Şirketin sosyal medyadan tanıtılması"]}/>
        <PricingCard title="Altın Paket" price="50k" context={[
          "Gümüş paket içeriği",
          "Ortak medya ve reklam çalışmalarının düzenlenmesi",
          "Şirketin reklam müziğinin araçta kullanılması",
          "Şirket ile sosyal sorumluluk projelerinin organizasyonu"]}/>
        <PricingCard title="Elmas Paket" price="100k" context={[
          "Altın paket içeriği",
          "Araç üzerine firmanın logosunun eklenmesi",
          "Aracın sponsor tarafından isimlendirilmesi",
          "Takım formasında göğüs sponsorluğunun verilmesi",
          "Youtube kanalında firmanın tanıtımının yapılması"]}/>
      </div>
    </div>
  )
}

export default Sponsorship