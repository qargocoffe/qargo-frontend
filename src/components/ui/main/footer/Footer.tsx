import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="py-6 text-beige flex flex-col items-center justify-center bg-whiteBackground slide-in-left">
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
        <p className="text-center">© 2024 Qargo Coffee. All rights reserved.</p>      
      </div>
    </footer>
  )
}
