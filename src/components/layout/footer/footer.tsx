import Image from "next/image"


export function Footer() {
    return (
<footer className="bg-[#FF4100] mt-10">
  <div className="whitespace-nowrap md:flex md:justify-between pt-5 pb-5 pl-3 lg:px-20">
    <h1 className="font-aboutCompany lg:font-vehicle text-xs font-bold md:p-3 ">© 2025 Martins Locações — Todos os direitos reservados</h1>
  </div>

  <hr className="w-1/2 mx-auto border-white" />

  <div className="flex justify-center p-6 items-center gap-6">
    {[
      { href: "https://www.facebook.com/people/Julia-Gabriella/pfbid0381NKknxK6xKc1F3AuELKAByekSQ8kHu6T4bwvmr93XvtA7GcPe26Mg2kqHEQKieul/?locale=pt_BR", src: "/icons/fb.svg", alt: "Facebook" },
      { href: "https://www.instagram.com/chac_doisirmaos/", src: "/icons/instagram.svg", alt: "Instagram" },
    ].map(({ href, src, alt }) => (
      <a
        key={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity font-aboutCompany font-bold cursor-pointer pb-5"
      >
        <Image src={src} alt={alt} width={50} height={50} />
        <span>{alt}</span>
      </a>
    ))}
  </div>
</footer>
    )
}