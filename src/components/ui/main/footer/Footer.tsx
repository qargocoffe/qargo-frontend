import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="py-6 text-beige flex flex-col md:flex-row md:justify-between md:px-10 items-center justify-center bg-whiteBackground slide-in-left">
      <div className="flex flex-col justify-start">
        <span className="font-black mb-4 text-center md:text-xl">Follow us</span>
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
      </div>
      <div className="flex gap-5 text-lavazzaBlue mt-8 text-sm">
        <a href="/" className="underline md:text-lg">Terms of Use </a>
        <a href="/" className="underline md:text-lg">Privacy Policy </a>
      </div>

      <div className="font-light mt-8 text-sm md:text-lg">
        <p className="text-center">© 2024 Qargo Coffee. All rights reserved.</p>      
      </div>
    </footer>
  )
}
