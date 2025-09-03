import React from "react";

const IconsShow = () => {
  const icons = [
    { name: "Jira", img: "/Orbiting/Jira.avif" },
    { name: "Loom", img: "/Orbiting/Loom.avif" },
    { name: "Hubspot", img: "/Orbiting/Hubspot.avif" },
    { name: "MaiChimp", img: "/Orbiting/MailChimp.avif" },
    { name: "Slack", img: "/Orbiting/Slack.avif" },
    { name: "WhatsApp", img: "/Orbiting/WhatsApp.avif" },
    { name: "Mail", img: "/Orbiting/Mail.svg" },
  ];
  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="flex gap-2 max-w-xl mx-auto">
        {icons.map((icon, i) => (
          <div key={i} className="flex flex-col gap-1">
            {/* Top slot */}
            <div
              className={`w-16 h-16  flex items-center justify-center cursor-pointer  ${
                i % 2 === 0 ? ` opacity-100` : "opacity-0 pointer-events-none"
              }`}
            >
              {i % 2 === 0 && (
                <div className="rounded-xl">
                  <img
                    src={icon.img}
                    alt={icon.name}
                    className=" rounded-xl object-contain "
                  />
                </div>
              )}
            </div>
            {/* Bottom slot */}
            <div
              className={`w-16 h-16 flex items-center justify-center cursor-pointer   ${
                i % 2 === 1 ? ` opacity-100` : "opacity-0 pointer-events-none"
              }`}
            >
              {i % 2 === 1 && (
                <div className="">
                  <img
                    src={icon.img}
                    alt={icon.name}
                    className=" rounded-xl object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsShow;
