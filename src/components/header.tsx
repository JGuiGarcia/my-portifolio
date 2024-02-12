import Image from "next/image"
import "./styles/header.scss"
export function Header(){
    return(
        <div className="header">
        
        <div>
          <h1>Hi, i'm João Guilherme 👋</h1>
          <h2>Developer Front end </h2>
        </div>
        <Image
          
          src="/me.png"
          alt="My"
          width={325}
          height={310}
          priority
        />
      </div> 
    )
    
}        
        