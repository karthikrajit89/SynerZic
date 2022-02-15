import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { SiteContent } from "../site/site";
import {Implementation} from './impl';


export const ContactUs =(request: SiteContent.Message) =>
{
    var mailCredentials = new Implementation('').createMailer();
    
        var requestParams ={
        f_name : request.name,
        f_email : request.email,
        f_subject : request.subject,
        f_message : request.message,
        f_contactno : request.contactno,
    };
    //const form =useRef();
    //emailjs.sendForm('synerzIC','template_mbrho6i',form.current, )
    emailjs.send(mailCredentials.serviceID,mailCredentials.templateID,requestParams,mailCredentials.userID)
    .then(function(response){
        console.log('Success!',response.status, response.text);
    },function(error){
        console.log('Failed...',error);
    });
}