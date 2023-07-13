import Image from 'next/image';
import React from 'react'

const AboutMe = () => {
  return (
    <div className="h-full container flex grow flex-row items-center justify-center mx-auto text-black">
      <div className="basis-3/5 flex flex-col items-start justify-items-between">
      <h1 className="text-8xl mx-4 font-bold">Biz Kimiz?</h1>
        <p className="m-5 text-justify">
          Terakki Vakfı Okulları, Şişli Terakki Lisesi’nin Robotik Takımı olan Terakki Robotik takımı (Terobot) adı altında, temelinde Shell Eco-Marathon, FRC ve Teknofest yarışmaları bulunmak üzere bir sürü yarışmalara katılmaktadır. Lise ve üniversite öğrencilerinden oluşan takımların içinde yer aldığı Shell Eco-Marathon isimli yarışmada hız ve enerji verimliliğinin sağlandığı araçlar tasarlamak hedeflenirken, FRC yarışmasında ise iki ay gibi kısa bir sürede verilen göreve uygun bir robotun tasarlanması ve bu robotun ulusal elemelerde başarı göstermesi hedeflenir. Bu yarışmalara ek olarak 2022 yılından beri katılım sağladığımız Teknofest yarışmasında ise farklı kategoriler yer almaktadır ve yarışma takımları istedikleri kategoriden yarışmaya katılmaktadırlar; bu sene takımımız insansız hava aracı kategorisinden yarışmaya katılmıştır.
        </p>
      </div>
      <div className="basis-2/5 ml-7">
          <Image
          src="/assets/takim_foto.png"
          alt="photo"
          width={920}
          height={920}
          // objectFit="cover"
          // fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl shadow-2xl"
          />
      </div>
    </div>
  )
}

export default AboutMe