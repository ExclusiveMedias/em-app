import Link from "next/link";


const social_links = [
  {
    link: "https://www.facebook.com/ExclusiveMedias",
    target: "_blank",
    icon: "fab fa-facebook-f ",
  },
  {
    link: "https://twitter.com/ExclusiveMedias",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.linkedin.com/company/exclusivemedias/",
    target: "_blank",
    icon: "fab fa-twitter",
  }, 
  {
    link: "https://www.pinterest.com/exclusivemedias",
    target: "_blank",
    icon: "fab fa-pinterest",
  },
  {
    link: "https://www.youtube.com/@exclusive-medias",
    target: "_blank",
    icon: "fab fa-youtube",  
},
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;



 
const copy_right_text = {
  copy_right: <>© Copyright <span>©{new Date().getFullYear()}</span> Exclusive Medias LLC. All Rights Reserved </>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




//  social link data 02
const social_links_two = [
  {
    link: "https://www.facebook.com/ExclusiveMedias",
    target: "_blank",
    icon: "fab fa-facebook-f ",
  },
  {
    link: "https://twitter.com/ExclusiveMedias",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.linkedin.com/company/exclusivemedias/",
    target: "_blank",
    icon: "fab fa-twitter",
  }, 
  {
    link: "https://www.pinterest.com/exclusivemedias",
    target: "_blank",
    icon: "fab fa-pinterest",
  },
  {
    link: "https://www.youtube.com/@exclusive-medias",
    target: "_blank",
    icon: "fab fa-youtube",  
},

];
 

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}