

interface Props {
    url: string
}

export const MenuIframe = ({url}: Props) => {
  return (
    <>
        <iframe 
        className="w-full min-h-[409px] mb-9 md:min-h-[800px] " 
        allow={'clipboard-write'} 
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
        allowFullScreen={true} 
        src={url}
      ></iframe>
    </>
  )
}
