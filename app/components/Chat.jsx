"use client"

import { useEffect } from 'react';

const ChatScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.text = `
      window.embeddedChatbotConfig = {
        chatbotId: "pZbLPsha08dW_swxrghm-",
        domain: "www.chatbase.co"
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://www.chatbase.co/embed.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'chatbase-script'));
    `;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default ChatScript;
