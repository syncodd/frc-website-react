import React from 'react'
import Person from './Person'

const OurTeam = () => {
  return (
    <div className="flex flex-col h-screen justify-evenly">
      <h1 className="text-5xl font-bold text-center text-black">Takım Üyelerimiz</h1>
      <div className="flex flex-row justify-evenly">

        <Person name="Pelin Sarp" title="Mentor" image="/assets/pelin_sarp.jpeg"/>
        <Person name="Eren Solmaz" title="Kaptan" image="/assets/eren_solmaz.jpeg"/>


      </div>
      <div className="flex flex-row justify-evenly">

        <Person name="Yağız Kutlubay" title="Yazılım" image="/assets/yagiz_kutlubay.jpeg"/>
        <Person name="Tan Aytürk" title="Mekanik" image="/assets/tan_ayturk.jpeg"/>
        <Person name="Güneş Bozkıroğlu" title="Pr" image="/assets/gunes_bozkiroglu.jpeg"/>
        <Person name="Ersel Can Gül" title="Pr" image="/assets/ersel_can_gul.jpeg"/>

      </div>
      <div className="flex flex-row justify-evenly">

        <Person name="Duru Sezin" title="Pr" image="/assets/duru_sezin.jpeg"/>
        <Person name="Ege Madran" title="Yazılım" image="/assets/ege_madran.jpeg"/>
        <Person name="Bakar Atan" title="Mekanik" image="/assets/bakar_atan.jpeg"/>
        <Person name="Ali Gönen" title="Mekanik/Safety" image="/assets/ali_gonen.jpeg"/>
        <Person name="Hakan Telgeren" title="Mekanik" image="/assets/hakan_telgeren.jpeg"/>

      </div>
      
    </div>
  )
}

export default OurTeam