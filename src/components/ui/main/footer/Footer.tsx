import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="min-h-[400px] text-beige flex flex-col items-center justify-center bg-whiteBackground">
      <Image className="mb-4" src={'/footer/coffee.png'} alt="Coffe" width={60} height={60} />
      <span className="font-black mb-4">Follow us</span>
      <nav className="flex items-center justify-center gap-5 list-none px-12">
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/facebook.png'} alt="Coffe" width={20} height={35} />
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/ig.png'} alt="Coffe" width={35} height={35} />
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/youtube.png'} alt="Coffe" width={35} height={35} />
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/spotify.png'} alt="Coffe" width={35} height={35} />
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/in.png'} alt="Coffe" width={35} height={35} />
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/tiktok.png'} alt="Coffe" width={30} height={35} />
          </a>
        </li>
        
        <li>
          <a href="instagram.com">
            <Image src={'/footer/social/pinterest.png'} alt="Coffe" width={30} height={35} />
          </a>
        </li>
      </nav>
      <div className="flex gap-5 text-lavazzaBlue mt-8 text-sm">
        <a href="/" className="underline">Terms of Use </a>
        <a href="/" className="underline">Privacy Policy </a>
      </div>

      <div className="font-light mt-8 text-sm">
        <p className="text-center">701 Brickell Ave. Suite 1550 Miami, FL 33131</p>      
        <p className="text-center"> (786) 913-9991 | info@qargocoffee.com</p>
      </div>

      <div className="font-light mt-8 text-sm">
        <p className="text-center">© 2024 Qargo Coffee. All rights reserved.</p>      
      </div>
    </footer>
  )
}
