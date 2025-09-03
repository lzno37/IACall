"use client";
import { useLanguage } from "@/hooks/Language";

export default function LegalPage() {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Legal Notice",
      lastUpdated: "Last updated on 31 August 2025",
      companyInfo: {
        title: "Company Information",
        name: "Company name: Smart Products & Services S.L.",
        taxId: "Tax ID (NIF): B86563756",
        address: "Registered address: C/ Velázquez 15, 28001 Madrid",
        registration:
          "Smart Products & Services S.L., Tax ID (CIF): B86563756, registered in the Mercantile Register of Madrid, Volume 30,782, Book 0, Section 8, Page 131, Sheet M-553972.",
      },
      liability: {
        title: "Limitation of Liability",
        content:
          "Within the limits established by law, Smart Products & Services S.L. assumes no liability for the lack of veracity, completeness, updating, and accuracy of the data or information contained on its web pages.",
      },
      content: {
        title: "Content Disclaimer",
        content:
          "The contents and information do not bind Smart Products & Services S.L. and do not constitute opinions, advice, or legal counsel of any kind, as they are merely offered for informational and educational purposes.",
      },
      thirdParty: {
        title: "Third-Party Links",
        content:
          "The internet pages of Smart Products & Services S.L. may contain links to third-party websites that are beyond the control of Smart Products & Services S.L. Therefore, Smart Products & Services S.L. cannot assume responsibility for any content that may appear on third-party pages.",
      },
      intellectualProperty: {
        title: "Intellectual Property",
        content:
          "The texts, images, sounds, animations, software, and other content included on this website are the exclusive property of Smart Products & Services S.L. or its licensors. Any act of transmission, distribution, assignment, reproduction, storage, or public communication, in whole or in part, must have the express consent of Smart Products & Services S.L.",
      },
      dataProtection: {
        title: "Data Protection",
        content:
          "Furthermore, to access certain services offered by Smart Products & Services S.L. through the website, you must provide certain personal data. In compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR), on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, we inform you that, by completing the relevant forms, your personal data will be incorporated into and processed in files owned by Smart Products & Services S.L., for the purpose of providing and offering our services and to inform you about improvements to the website.",
      },
      rights: {
        title: "Your Rights",
        content:
          "We also inform you that you may, at any time, exercise your rights of access, rectification, erasure (cancellation), objection, restriction, and portability of your personal data, free of charge, by emailing:",
        email: "info@iacall.es",
      },
    },
    ES: {
      title: "Aviso Legal",
      lastUpdated: "Última actualización el 31 de agosto de 2025",
      companyInfo: {
        title: "Información de la Empresa",
        name: "Denominación social: Smart Products & Services SL.",
        taxId: "NIF: B86563756",
        address: "Domicilio: C/ Velázquez 15. 28001 Madrid",
        registration:
          "Smart Products and Services. CIF B8653756, inscrita en el Registro Mercantil de Madrid, tomo 30782, libro 0, sección 8ª, folio 131, hoja M553972",
      },
      liability: {
        title: "Limitación de Responsabilidad",
        content:
          "Con los límites establecidos en la ley, Smart Products and Services S.L. no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que contienen sus páginas web.",
      },
      content: {
        title: "Descargo de Responsabilidad de Contenido",
        content:
          "Los contenidos e información no vinculan a Smart Products and Services S.L. ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.",
      },
      thirdParty: {
        title: "Enlaces de Terceros",
        content:
          "Las páginas de Internet de Smart Products & Services S.L. pueden contener enlaces (links) a otras páginas de terceras partes que Smart Products & Services S.L. no puede controlar. Por lo tanto, Smart Products & Services S.L. no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.",
      },
      intellectualProperty: {
        title: "Propiedad Intelectual",
        content:
          "Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad exclusiva de Smart Products & Services S.L. o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, deberá contar con el consentimiento expreso de Smart Products & Services S.L.",
      },
      dataProtection: {
        title: "Protección de Datos",
        content:
          "Asimismo, para acceder a algunos de los servicios que Smart Products & Services S.L. ofrece a través del sitio web, deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de Smart Products & Services S.L. con el fin de poderle prestar y ofrecer nuestros servicios así como para informarle de las mejoras del sitio Web.",
      },
      rights: {
        title: "Sus Derechos",
        content:
          "Le informamos también de que tendrá la posibilidad en todo momento de ejercer los derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos de carácter personal, de manera gratuita mediante email a:",
        email: "info@iacall.es",
      },
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="max-w-4xl mx-auto px-4 py-24 font-light">
      <h1 className="text-4xl font-light mb-6 text-gray-900">
        {currentContent.title}
      </h1>
      <p className="text-gray-600 mb-8">{currentContent.lastUpdated}</p>

      <div className="space-y-12">
        {Object.entries(currentContent).map(([key, section]) => {
          if (typeof section === "object" && section !== null) {
            return (
              <section key={key}>
                <h2 className="text-2xl font-light mb-4 text-gray-900">
                  {section.title}
                </h2>
                <div className="text-gray-600">
                  {key === "companyInfo" ? (
                    <div className="space-y-2">
                      <p>{section.name}</p>
                      <p>{section.taxId}</p>
                      <p>{section.address}</p>
                      <p>{section.registration}</p>
                    </div>
                  ) : (
                    <p>
                      {section.content}
                      {key === "rights" && (
                        <a
                          href={`mailto:${section.email}`}
                          className="text-[#196f95] hover:underline ml-1"
                        >
                          {section.email}
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </section>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
