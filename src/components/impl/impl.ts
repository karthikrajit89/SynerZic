import { SiteContent  } from "../site/site";
import {ContactUs} from './email'

let Menus : SiteContent.Menu[] =
   [{
       id :1,
       name :'Home',
       eleId :'intro',
       order :1,
       display :'Home'
   },
   {
    id :2,
    name :'About',
    eleId :'about',
    order :2,
    display :'About Us'
},
{
    id :3,
    name :'FreeLancing',
    eleId :'services',
    order :3,
    display :'FreeLancing'
},
{
    id :4,
    name :'Contact',
    eleId :'contact',
    order :5,
    display :'Contact'
}
// {
//     id :5,
//     name :'Portfolio',
//     eleId :'portfolio',
//     order :4,
//     display : 'Portfolio'
// }

];

let intro ='<h2>We provide<br/><span>solutions</span><br/>for your business!</h2>' ;

let AboutUs : SiteContent.About={
    id :2,
    name : 'About Us',
    order :2,
    Header :{
        title : 'About Us',
        content : 'Our potential team of developers expertise in software research, design, and development. We provide web and software development, website designing, E-Commerce solution, Tech-consulting, Redesigning, and revamping, content management service businesses based in Sydney, Australia. Our adaptive thinking lets us offer solution to any business range with proficiency and reliability.',
                
    },
    SubHeader:{
        content : 'Rendering user-friendly and effective solutions that our clients expect.'
    },
    content : [       
        {
            title:'Pack you on Top',
            content:'In this fast-paced technology world, keeping up to date is challenging to business owners to remain on top of the latest technology. Let us bring down your burden to filter out what’s best and cost effective and to always keep you on top in your business.',
            stylecss:'fa fa-shopping-bag'
        },
        {
            title:'Staying in Tune',
            content:'It is our jobs – and our hobby, to always stay in tune with the latest technology and information technology developments and trends, and it is our expertise that allows us to determine which developments are right for which clients. Our personalized approach allows our clients to get maximum value out of their technology investments.',
            stylecss:'fa fa-photo'
        },
        {
            title:'Sharing Ideas',
            content:'With the gushing technology developments, it can seem like businesses are always trying to catch up with the next big thing. Don’t worry! we set up periodic meetings with you to talk about technology on the job. These meeting aids to learn about emerging tech, how others are using it and expected changes in your industry.',
            stylecss:'fa fa-bar-chart'
        },
        {
            title:'Effective Communication & Education',
            content:'Efficient communication is our priority. Our success depends on utilizing the knowledge, talents, and experience from both of us. We have patience and humility to learn from you and understand different practices and priorities that you have in your existing business and process. When you are confused about an idea and hesitant to follow our advice, we take time to explain why you should believe it is effective solution and technology. While you might be unfamiliar with your industry, it is our responsibility to bring you how others are performing and expecting changes through technology in your industry.   We educate and inform rather than saying. Similarly, we are willing to accept suggestions and guidance from you especially business to business interactions.',
            
        },
        {
            title:'Customer relationship & Feedback',
            content:'We maintain good customer relationship and consistent customer experience every time we interact with business and leaves them with a good impression. There is mutual regard and understanding between you and us, thus extends for a long period of time.  We establish a regular feedback loop in which we ask you to let us know what is working and what’s not.',
            
        },
    ]
}

let Serives: SiteContent.Service= {
    id :3,
    name : 'FreeLancing',
    order :3,

    Header :{
        title : 'FreeLancing',
        content : 'We have abreast knowledge and experience in web programming, developing, coding, designing and much more. Updating with new string of coding is our cup of tea. We provide affordable and proactive IT solutions to growing businesses.'
    },
    content :[
    {
        title:'Web & Software Development',
        content:'Website is the face of the business. Every business needs its website to showcase its skill, products, talents, and much more. We understand the necessities and crafts exquisite website and software tool for start-ups and businesses. Right from requirements gathering and until deploying, we closely follow each stage of the software development life cycle, and keeping our clients informed at every stage.'
    },
    {
        title:'WebSite Designing',
        content:'We web designers and developers are well thought out professionals. We work closely and incorporate innovate ideas to bring life to your business entities. We go hand in hand with the client to understand their requirements. We are there with you in every stage of product cycle and get website hosting done.'
    },
    {
        title:'E-Commerce Solutions',
        content:'Be it your requirement for Clothing Range, Food Delivery, Online Grocery Delivery, Electronics, Cosmetics, Travel Booking, or more, we understand the changing market trends of the industry and accordingly shape your business concepts into workable ecommerce solutions. We use existing open-source ecommerce framework for quick and easy deployment suitable for small-size and large retailers alike.'
    },
    {
        title:'Content Management',
        content:'Come to limelight with a good content. Effectively managing the valuable content of your website is important to keep it updated and inform your customers about the latest news, events, products, and other information related to business. If you are willing to create a comprehensive, search engine friendly website that can be managed effortlessly, we can help you to achieve that by offering content management solutions.'
    },
    {
        title:'Tech Consulting',
        content:'We work with you to help transforming the way you use technology. As business integrators, we work transformational engagements, help you to solve complex business problems using up-to-date technology. We are committed to deliver tangible benefits through technology-driven business and process transformation.'
    },
    {
        title:'Revamping & Redesigning',
        content:'The design world is on the rapidly changing trends, which are evolving lighter and faster loading templates than ever. The web content engaged also loses it’s relevant messages in today’s sense because of the changing scenario. We do site-redesign and effectively addressing your marketing needs as you would like.'
    }
    ]

};

let Contact: SiteContent.Contact={
    id : 4,
    name : "Contact",
    address :"Parramatta NSW",
    email :"info@example.com",
    phone :"+1 5589 55488 55",
    order : 4,
    gmap : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13259.592443459947!2d150.9999780008868!3d-33.81494236282079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a318e167af4f%3A0x5017d681632c600!2sParramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1644811471051!5m2!1sen!2sau"
}

let Footer : SiteContent.Footer={
    id : 5,
    name : 'SynerzIC',
    contact : {
        id : 5,
        name : "Contact",
        order : 5,
        address :"Parramatta NSW",
        email :"info@synerzic.net",
        phone :"+61 431 929 634",

    },
    headerMessage :"Our potential team of developers expertise in software research, design, and development. We provide web and software development, website designing, E-Commerce solution, Tech-consulting, Redesigning and revamping, content management service businesses",
    order :5
}

let Mailer : SiteContent.Mailer= {
serviceID : "synerzicnet@2022",
userID : "user_o1X2qKqb0R0sRJdY8PyI9",
templateID :"template_9o42wzv"
}

export class Implementation implements SiteContent.BuildPage{

    constructor(private api : string)
    {

    }

    createMenu(): SiteContent.Menu[] {
        return Menus
    }

    createIntro(): string {
        return intro;
    }

    createAbout(): SiteContent.About {
        return AboutUs;
    }
    createContact():  SiteContent.Contact {
        return Contact;
    }
    
    createMessage(request: SiteContent.Message): boolean {
       var isSent = ContactUs(request);
        return isSent;
    }
    createPortfolio(): void {//} SiteContent.Portfolio{
        return;
    }
    createService(): SiteContent.Service {
        return Serives;
    }

    createFooter(): SiteContent.Footer {
        return Footer;
    }

    createMailer(): SiteContent.Mailer {
         return Mailer;
    }
 

}