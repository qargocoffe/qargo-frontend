import { SustainabilityDetail } from './SustainabilityDetail'

export const SustainabilityLayout = () => {
  return (
    <section className="lg:w-desktop lg:m-auto md:flex md:gap-6">
          <SustainabilityDetail
          title={'Planet'} 
          description={'Our products are made with Lavazza ¡Tierra! Selection, a sustainable Rainforest Alliance Certified coffee blend, that promotes the rights and well-being of workers communities while meeting rigorous social and environmental '} 
          urlImage={'/about/coffee-white.png'}
          urlImageDesktop={'/about/desktop/coffe2.png'}
          index={1}
          />
          <SustainabilityDetail 
          title={'People'} 
          description={'Our employees are trained, not only on our product portfolio, but also on making sure that all customers are treated with equality, friendliness and respect. Customer service is at the heart of our business.          '} 
          urlImage={'/about/coffee-white2.png'}
          urlImageDesktop={'/about/desktop/coffee.png'}
          index={2}
          />
          <SustainabilityDetail 
          title={'Product'} 
          description={'From the growing at Lavazza’s coffee grounds to the barista hand-crafting your drink, every step of the way is carefully supervised to ensure excellence and flavor. We’re committed to provide you with the best because that’s exactly what you deserve.'} 
          urlImage={'/about/coffee-white3.png'}
          urlImageDesktop={'/about/desktop/coffe3.png'}
          index={3}
          />
      </section>
  )
}
