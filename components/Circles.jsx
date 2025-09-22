import React from "react";
import { OrbitingCircles } from "./magicui/orbiting-circles";

const Circles = () => {
  return (
    <div className="relative flex h-[345px] w-full flex-col items-center justify-center  z-[-2] overflow-hidden px-4 md:px-8">
      <OrbitingCircles radius={1} iconSize={40} duration={0}>
        <img
          src="/circle.png"
          alt="HubspotLogo"
          className="rounded-full filter brightness-0 opacity-100"
        />
      </OrbitingCircles>
      <OrbitingCircles radius={150} iconSize={40} duration={20}>
        <img
          src="/Orbiting/Hubspot.avif"
          alt="HubspotLogo"
          className="rounded-full"
        />
        <img
          src="/Orbiting/WhatsApp.avif"
          alt="WhatsAppLogo"
          className="rounded-full"
        />
        <img
          src="/Orbiting/Telegram.png"
          alt="TelegramLogo"
          className="rounded-full"
        />
        <img
          src="/Orbiting/Jira.avif"
          alt="JiraLogo"
          className="rounded-full"
        />
        <img
          src="/Orbiting/Slack.avif"
          alt="SlackLogo"
          className="rounded-full"
        />
        <img src="/Orbiting/Mail.svg" alt="MailLogo" className="rounded-full" />
      </OrbitingCircles>
    </div>
  );
};

export default Circles;
