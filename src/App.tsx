import "./lib/bootstrap/css/bootstrap.min.css";
import "./lib/font-awesome/css/font-awesome.min.css";
import "./lib/animate/animate.min.css";
import "./lib/ionicons/css/ionicons.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";
import "./css/style.css";
import logo from "./img/logo.png";
import intro from "./img/intro-img.svg";
import aboutimg1 from "./img/about-img.svg";
import aboutimg2 from "./img/about-extra-1.svg";
import aboutimg3 from "./img/about-extra-2.svg";
import { useScrollTo } from "react-use-window-scroll";
import React, { useEffect, useState } from "react";
import { useInput } from "./components/hooks/input-hook";

import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
  LinkProps,
  Router,
} from "react-router-dom";

import { api } from "./components/impl/api";
import { SiteContent } from "./components/site/site";

let dataapi = new api();

let Menuapi = dataapi.createMenu();

var scorllHookVisibility = false;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/client-guru" element={<CCR />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function Layout() {
  let Menus: SiteContent.Menu[] = Menuapi;

  var headerClass = "fixed-top";

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition > 100) {
    headerClass = "fixed-top header-scrolled";
    scorllHookVisibility = true;
  } else {
    headerClass = "fixed-top";
    scorllHookVisibility = false;
  }

  return (
    <div>
      <header id="header" className={headerClass}>
        <div className="container">
          <div className="logo float-left">
            <a href="#intro" className="scrollto">
              <img src={logo} alt="" className="img-fluid"></img>
            </a>
          </div>
          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              {Menus.map((menu) => (
                <li key={menu.name}>
                  <MenuLink menu={menu.name}>{menu.name}</MenuLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Intro />
      <main id="main">
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
        <ScrollHook />
      </main>
      <Outlet />
    </div>
  );
}

interface MenuLinkProps extends Omit<LinkProps, "to"> {
  menu: string;
}

function MenuLink({ menu, children, className, ...props }: MenuLinkProps) {
  // let [searchParams] = useSearchParams();
  // let isActive = searchParams.get("menu") === menu;
  //  var element = document.getElementById(menu.toLocaleLowerCase());
  var order: any = Menuapi.find((obj) => obj.name == menu)?.order;
  var element;
  var scrollLength: any = 0;

  if (order && order > 1) {
    var objToScroll = Menuapi.slice(0, order);
    for (let i = 1; i < order; i++) {
      element = document.getElementById(
        objToScroll[i - 1].eleId.toLocaleLowerCase()
      );
      scrollLength += element?.clientHeight;
    }
  }

  const scrollTo = useScrollTo();
  if (isNaN(scrollLength)) {
    scrollLength = 5;
  }
  return (
    <Link
      className={className}
      onClick={() =>
        scrollTo({ top: scrollLength, left: 0, behavior: "smooth" })
      }
      // to ={`/?menu= ${menu}`}
      to=""
      {...props}
    >
      {children}
    </Link>
  );
}

function Intro() {
  let introdata: string = dataapi.createIntro();

  return (
    <div>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={intro} alt="" className="img-fluid"></img>
          </div>
          <div className="intro-info">
            <div dangerouslySetInnerHTML={{ __html: introdata }}></div>
            <div>
              <MenuLink className="btn-get-started scrollto" menu={"About"}>
                {"Get Started"}
              </MenuLink>
              <MenuLink className="btn-services scrollto" menu={"FreeLancing"}>
                {"FreeLancing.."}
              </MenuLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutUs() {
  let aboutData: SiteContent.About = dataapi.createAbout();
  let headerData = aboutData.Header;
  let subHeaderData = aboutData.SubHeader;
  let contentData = aboutData.content;
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>{headerData?.title}</h3>
          <p>
            {headerData?.content}
            <br />
            <p>{headerData?.subcontent}</p>
          </p>
        </header>
        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>{subHeaderData?.content} </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon">
                <i className="fa fa-shopping-bag"></i>
              </div>
              <h4 className="title">{contentData[0].title}</h4>
              <p className="description">{contentData[0].content}</p>
            </div>
            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon">
                <i className="fa fa-photo"></i>
              </div>
              <h4 className="title">{contentData[1].title}</h4>
              <p className="description">{contentData[1].content}</p>
            </div>
            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon">
                <i className="fa fa-bar-chart"></i>
              </div>
              <h4 className="title">{contentData[2].title}</h4>
              <p className="description">{contentData[2].content}</p>
            </div>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={aboutimg1} className="img-fluid" alt=""></img>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
            <img src={aboutimg2} className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>{contentData[3].title}</h4>
            <p dangerouslySetInnerHTML={{ __html: contentData[3].content }}>
              {/* {contentData[3].content} */}
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={aboutimg3} className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>{contentData[4].title}</h4>
            <p dangerouslySetInnerHTML={{ __html: contentData[4].content }}>
              {/* {contentData[4].content} */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  let ServiceData: SiteContent.Service = dataapi.createService();

  return (
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>{ServiceData.Header?.title}</h3>
          <p>{ServiceData.Header?.content}</p>
        </header>

        <div className="row">
          <div
            className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-analytics-outline"
                  style={{ color: "#ff689b" }}
                ></i>
              </div>
              <h4 className="title">{ServiceData.content[0].title}</h4>
              <p className="description">{ServiceData.content[0].content}</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-5 wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-bookmarks-outline"
                  style={{ color: "#e9bf06" }}
                ></i>
              </div>
              <h4 className="title">{ServiceData.content[1].title}</h4>
              <p className="description">{ServiceData.content[1].content}</p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-paper-outline"
                  style={{ color: "#3fcdc7" }}
                ></i>
              </div>
              <h4 className="title">{ServiceData.content[2].title}</h4>
              <p className="description">{ServiceData.content[2].content}</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-5 wow bounceInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-speedometer-outline"
                  style={{ color: "#41cf2e" }}
                ></i>
              </div>
              <h4 className="title">{ServiceData.content[3].title}</h4>
              <p className="description">{ServiceData.content[3].content}</p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-world-outline"
                  style={{ color: "#d6ff22" }}
                ></i>
              </div>
              <h4 className="title">{ServiceData.content[4].title}</h4>
              <p className="description">{ServiceData.content[4].content}</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-5 wow bounceInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1.4s"
          >
            <div className="box">
              <div className="icon">
                <i
                  className="ion-ios-clock-outline"
                  style={{ color: "#4680ff" }}
                ></i>
              </div>
              <h4 className="title">{ServiceData.content[5].title}</h4>
              <p className="description">{ServiceData.content[5].content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  let contact: SiteContent.Contact = dataapi.createConatct();
  let IframeStyle = {
    border: 0,
    width: "100%",
    height: "312px",
  };
  let iframeBorder = {
    border: 0,
    width: "0",
    height: "0",
  };
  return (
    <section id="contact">
      <div className="container-fluid">
        <div className="section-header">
          <h3>{contact.name}</h3>
        </div>
        <div className="row wow fadeInUp">
          <div className="col-lg-6">
            <div className="map mb-4 mb-lg-0">
              <iframe
                src={contact.gmap}
                frameBorder="0"
                style={IframeStyle}
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5 info">
                <i className="ion-ios-location-outline"></i>
                <p>{contact.address}</p>
              </div>
              <div className="col-md-4 info">
                <i className="ion-ios-email-outline"></i>
                <p>{contact.email}</p>
              </div>
              <div className="col-md-3 info">
                <i className="ion-ios-telephone-outline"></i>
                <p>{contact.phone}</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm(props: any) {
  let usermessage: SiteContent.Message;

  const { value: f_name, bind: bindname, reset: resetname } = useInput("");
  const { value: f_email, bind: bindemail, reset: resetemail } = useInput("");
  const {
    value: f_subject,
    bind: bindsubject,
    reset: resetsubject,
  } = useInput("");
  const {
    value: f_message,
    bind: bindmessage,
    reset: resetmessage,
  } = useInput("");
  const {
    value: f_contactno,
    bind: bindcontactno,
    reset: resetcontactno,
  } = useInput("");
  const [isSuccessfullySent, setIsSuccessfullySent] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    usermessage = {
      name: f_name,
      email: f_email,
      subject: f_subject,
      message: f_message,
      contactno: f_contactno,
    };
    if (
      usermessage.name.trim() !== "" &&
      usermessage.email.trim() !== "" &&
      usermessage.subject.trim() !== "" &&
      usermessage.message.trim() !== ""
    ) {
      if (dataapi.createMessage(usermessage)) {
        setalertMessage(
          "We have received your request. We will contact you soon"
        );
        setIsSuccessfullySent(true);
        setTimeout(() => setIsSuccessfullySent(false), 3000);
      } else {
        setIsSuccessfullySent(false);
      }
      resetname();
      resetemail();
      resetsubject();
      resetmessage();
      resetcontactno();
    } else {
      setalertMessage("Please provide all inputs in Contact Form");
      setIsSuccessfullySent(true);
      setTimeout(() => setIsSuccessfullySent(false), 3000);
    }
  };

  return (
    <div className="form">
      <div id="sendmessage">Your message has been sent. Thank you!</div>
      <div id="errormessage"></div>
      <form onSubmit={handleSubmit} role="form" className="contactForm">
        <div className="form-row">
          <div className="form-group col-lg-6">
            <input
              type="text"
              {...bindname}
              className="form-control"
              id="name"
              placeholder="Your Name"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div className="validation"></div>
          </div>
          <div className="form-group col-lg-6">
            <input
              type="email"
              {...bindemail}
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
            <div className="validation"></div>
          </div>
          <div className="form-group col-lg-6">
            <input
              type="text"
              {...bindcontactno}
              className="form-control"
              name="contactno"
              id="contactno"
              placeholder="Your Contact"
              data-msg="Please enter your contact number"
            />
            <div className="validation"></div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            {...bindsubject}
            id="subject"
            placeholder="Subject"
            data-rule="minlen:4"
            data-msg="Please enter at least 8 chars of subject"
          />
          <div className="validation"></div>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            {...bindmessage}
            rows={5}
            data-rule="required"
            data-msg="Please write something for us"
            placeholder="Message"
          ></textarea>

          <div className="validation"></div>
        </div>
        {isSuccessfullySent && (
          <div className="form-group">
            <div className="col-md-6 info">
              <i className="ion-ios-email-outline"></i>
              <p>{alertMessage}</p>
            </div>
          </div>
        )}
        <div className="text-center">
          <button type="submit" title="Send Message">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Footer() {
  let footer = dataapi.createFooter();
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>{footer.name}</h3>
              <p>{footer.headerMessage}</p>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>{footer?.contact.name}</h4>
              <p>
                {footer?.contact.address} <br />
                <strong>Phone : {footer?.contact.phone}</strong> <br />
                <strong>Email : {footer?.contact.email}</strong> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const ScrollHook = () => {
  const scrollTo = useScrollTo();
  const vstyle = {
    display: scorllHookVisibility ? "block" : "none",
  };

  return (
    <a
      style={vstyle}
      onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="back-to-top"
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

function CCR() {
  let demoLinks: SiteContent.ClientShow = dataapi.createClientShow();
  //let list = <div>Try with your password</div>;
  var clientpassword = "";
  const {
    value: password,
    bind: bindpasswrod,
    reset: resetpassword,
  } = useInput("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    clientpassword = password;
  };

  //if (true) {
  // alert(clientpassword);
  const list = (
    <div>
      <ul>
        {demoLinks.staticlinks.map((link) => (
          <li key={link}>
            {link}
            <br />
            <a href={process.env.PUBLIC_URL + "/guru/" + link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
  //resetpassword();
  //}

  return <div>Demo space for your websites {list}</div>;
}

export default App;
