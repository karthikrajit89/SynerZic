export namespace SiteContent {
  export interface Page {
    id: number;
    name: string;
    order: number;
  }

  export interface Menu extends Page {
    display: string;
    eleId: string;
  }

  export interface About extends Page {
    Header?: Header;
    SubHeader?: Header;
    content: MessageData[];
  }

  interface Header {
    styleclass?: string;
    stylecss?: string;
    title?: string;
    content: string;
    subcontent?: string;
  }

  interface MessageData {
    title: string;
    content: string;
    styleclass?: string;
    stylecss?: string;
  }

  export interface Service extends Page {
    Header?: Header;
    content: MessageData[];
  }

  export interface Portfolio extends Page {
    collection: string[];
    isAll: boolean;
    isApp: boolean;
    isWeb: boolean;
    isEcommerce: boolean;
  }

  export interface Contact extends Page {
    address: string;
    email: string;
    phone: string;
    gmap?: string;
  }

  export interface Message {
    name: string;
    email: string;
    subject: string;
    message: string;
    contactno: string;
  }

  export interface Intro {
    message: string;
  }

  export interface Footer extends Page {
    headerMessage: string;
    contact: Contact;
  }

  export interface Mailer {
    serviceID: string;
    templateID: string;
    userID: string;
  }

  export interface ClientShow {
    staticlinks: string[];
    password: string;
  }

  export interface BuildPage {
    createMenu(): Menu[];
    createIntro(): string;
    createAbout(): About;
    createService(): Service;
    createPortfolio(): void;
    createContact(): void;
    createMessage(request: Message): void;
    createFooter(): Footer;
    createMailer(): Mailer;
    createClientShow(): ClientShow;
  }
}
