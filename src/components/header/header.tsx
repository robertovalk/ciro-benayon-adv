'use client'


import styled from "styled-components";




const Container = styled('div')`
  background-color: rgb(0,0,0);
  background-image: url (./public/justica.jpg);
  color: #ffffff;
  font-weight: 700;
  padding: 2em;
  text-align: center;

  .presentation p {
    margin: 1em 0;
    color: #123F76;
    
  }

  .buttom {
    color: black;
    background-color: #123F76;
    text-decoration: none;
    margin-top: 3em;
    font-weight: 600;
    padding: 8px;
    border-radius: 11px;
  }
  

  @media (min-width:768px) {

    display: flex;
    gap: 2em;
    

    .presentation {
      align-self: center;
    }

  }

}
  
`

export default function Header() {
    return (
      <>
      <Container className="Container-background">
        <div className="presentation">
          <h1>Dr. Ciro Benayon</h1>
          <p className="">Advogado especializaodo em taltaltaltal</p>

          <a className="buttom" href="">Entre em contato</a>
        </div>
      </Container>
      </>
    )
        
        
    
}

