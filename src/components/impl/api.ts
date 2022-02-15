import { timeStamp } from 'console';
import {Implementation} from '../impl/impl';
import { SiteContent } from '../site/site';


 export class api{
    private impl :Implementation = new Implementation('');

    createMenu():SiteContent.Menu[]{
        return this.impl.createMenu();
    }

    createIntro():string{
        return this.impl.createIntro();
    }

    createAbout():SiteContent.About{
        return this.impl.createAbout();
    }

    createService() : SiteContent.Service{
        return this.impl.createService();
    }

    createConatct() : SiteContent.Contact{
        return this.impl.createContact();
    }

    createMessage(request: SiteContent.Message) : boolean {
        return this.impl.createMessage(request)
    }

    createFooter() : SiteContent.Footer{
      return  this.impl.createFooter();
    }
}