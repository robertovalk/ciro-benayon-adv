'use client'

import Image from "next/image"
import styled from "styled-components"


const Container = styled('div') `
  padding: 2em;
  background-color: rgb(21,21,21);
  display: flex;
  flex-direction: column;
  align-items: center;

  .Img-perfil {
    width: 254px;
    height: 369px;
    border-radius: 76px;
  }

  .apresentacao-texto {
    color: white;
    padding: 2em 0em 1em 1em;
    text-align: unset;
    font-size: 14px;
    font-weight: 400;
  }

  .texto-2 {
    padding: 2em 0;

  }

  @media (min-width:768px) {

  }

`

export default function Apresentacao() {
 return (
   <>
   <Container >
   <Image className='Img-perfil'
     src="/perfil.jpeg"
     alt="Vercel Logo"
     width={323}
     height={402}
     objectFit="fill"
     priority
    />

    <div className="apresentacao-texto">
      <p className="texto-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo similique magnam eos. Iusto praesentium minima consectetur voluptas natus et cum eligendi deserunt nulla laudantium. Ipsam odio in expedita dolores?</p>

      <p className="texto-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae animi illo asperiores rem incidunt velit amet repellendus tempore ex cum laudantium soluta facere, quod repellat nobis fugit odit. Maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores inventore, distinctio, dicta earum accusantium natus eos, quasi cum ipsa iste perferendis beatae reiciendis quidem. Et placeat adipisci vitae perferendis! </p>

      <p className="texto-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam praesentium accusantium laboriosam quod eligendi itaque ab, odio temporibus fugiat quasi debitis numquam obcaecati minus sed non nam sint est!</p>
    </div>
    </Container>

   </>
 )
}