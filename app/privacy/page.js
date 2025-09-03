"use client";
import { useLanguage } from "@/hooks/Language";

export default function PrivacyPage() {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Privacy Policy",
      lastUpdated: "Last updated on 31 August 2025",
      intro:
        'This Privacy Policy governs the processing of personal data carried out by Smart Products and Services S.L. in relation to data collected through the website "https://iacall.es" (the "Website").',
      contents: "Contents",
      sections: [
        "Purpose and scope of application",
        "Identity of the data controller",
        "Data processed and source",
        "Purposes of processing",
        "Lawful basis",
        "Mandatory nature of data",
        "Data retention",
        "Recipients and international transfers",
        "Rights of users",
        "Marketing communications",
        "User responsibility",
        "Information security",
        "Intellectual property",
        "Policy updates",
        "Contact",
      ],
      section1: {
        title: "1. Purpose and scope of application",
        content:
          "This policy complies with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).",
      },
      section2: {
        title: "2. Identity of the data controller",
        content:
          "The data controller is Smart Products and Services S.L., with registered office at [insert address], and email address info@iacall.es.",
      },
      section3: {
        title: "3. Data processed and source",
        content:
          "We process the following categories of personal data: [insert categories of data]. The data is collected directly from you when you use our website.",
      },
      section4: {
        title: "4. Purposes of processing",
        content:
          "The data is processed for the following purposes: [insert purposes].",
      },
      section5: {
        title: "5. Lawful basis",
        content:
          "The processing of your personal data is based on your consent, the performance of a contract, and compliance with legal obligations.",
      },
      section6: {
        title: "6. Mandatory nature of data",
        content:
          "Some personal data is mandatory to provide our services. If you do not provide this data, we may not be able to provide the service.",
      },
      section7: {
        title: "7. Data retention",
        content:
          "We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected, and to comply with our legal obligations.",
      },
      section8: {
        title: "8. Recipients and international transfers",
        content:
          "We do not sell or rent your personal data to third parties. We may share your data with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
      },
      section9: {
        title: "9. Rights of users",
        content:
          "You have the right to access, rectify, or delete your personal data, as well as the right to object to or restrict its processing. You can exercise these rights by contacting us at info@iacall.es.",
      },
      section10: {
        title: "10. Marketing communications",
        content:
          "We may use your personal data to send you marketing communications about our products and services. You can opt-out of receiving these communications at any time.",
      },
      section11: {
        title: "11. User responsibility",
        content:
          "You are responsible for the accuracy of the personal data you provide to us. Please keep your data updated.",
      },
      section12: {
        title: "12. Information security",
        content:
          "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data.",
      },
      section13: {
        title: "13. Intellectual property",
        content:
          "All content included on the Website, such as text, graphics, logos, and software, is the property of Smart Products and Services S.L. or its content suppliers and is protected by intellectual property laws.",
      },
      section14: {
        title: "14. Policy updates",
        content:
          "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      },
      section15: {
        title: "15. Contact",
        content:
          "If you have any questions about this Privacy Policy, please contact us at",
        email: "info@iacall.es",
      },
    },
    ES: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización el 31 de agosto de 2025",
      intro:
        'La presente Política de Privacidad regula el tratamiento de datos personales realizado por Smart Products and Services S.L. en relación con los datos recabados a través del sitio web "https://iacall.es" (el "Sitio Web").',
      contents: "Contenido",
      sections: [
        "Objeto y ámbito de aplicación",
        "Identidad del responsable del tratamiento",
        "Datos tratados y origen",
        "Finalidades del tratamiento",
        "Base jurídica",
        "Carácter obligatorio de los datos",
        "Conservación de los datos",
        "Destinatarios y transferencias internacionales",
        "Derechos de las personas usuarias",
        "Comunicaciones comerciales",
        "Responsabilidad del usuario",
        "Seguridad de la información",
        "Propiedad intelectual",
        "Actualizaciones de la política",
        "Contacto",
      ],
      section1: {
        title: "1. Objeto y ámbito de aplicación",
        content:
          "La presente política se ajusta al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica española 3/2018 (LOPDGDD).",
      },
      section2: {
        title: "2. Identidad del responsable del tratamiento",
        content:
          "El responsable del tratamiento es Smart Products and Services S.L., con domicilio social en [insertar dirección], y dirección de correo electrónico info@iacall.es.",
      },
      section3: {
        title: "3. Datos tratados y origen",
        content:
          "Se tratan las siguientes categorías de datos personales: [insertar categorías de datos]. Los datos son recabados directamente de usted al utilizar nuestro sitio web.",
      },
      section4: {
        title: "4. Finalidades del tratamiento",
        content:
          "Los datos son tratados con las siguientes finalidades: [insertar finalidades].",
      },
      section5: {
        title: "5. Base jurídica",
        content:
          "La legitimación para el tratamiento de sus datos personales se basa en su consentimiento, la ejecución de un contrato y el cumplimiento de obligaciones legales.",
      },
      section6: {
        title: "6. Carácter obligatorio de los datos",
        content:
          "Algunos datos personales son obligatorios para la prestación de nuestros servicios. Si no proporciona estos datos, es posible que no podamos prestar el servicio.",
      },
      section7: {
        title: "7. Conservación de los datos",
        content:
          "Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recabados, así como para cumplir con nuestras obligaciones legales.",
      },
      section8: {
        title: "8. Destinatarios y transferencias internacionales",
        content:
          "No vendemos ni alquilamos sus datos personales a terceros. Podemos compartir sus datos con terceros de confianza que nos asisten en la operación de nuestro sitio web, la realización de nuestro negocio o la prestación de servicios, siempre que dichos terceros acepten mantener esta información confidencial.",
      },
      section9: {
        title: "9. Derechos de las personas usuarias",
        content:
          "Usted tiene derecho a acceder, rectificar o suprimir sus datos personales, así como a oponerse o solicitar la limitación de su tratamiento. Puede ejercer estos derechos contactándonos en info@iacall.es.",
      },
      section10: {
        title: "10. Comunicaciones comerciales",
        content:
          "Podemos utilizar sus datos personales para enviarle comunicaciones comerciales sobre nuestros productos y servicios. Puede darse de baja de estas comunicaciones en cualquier momento.",
      },
      section11: {
        title: "11. Responsabilidad del usuario",
        content:
          "Usted es responsable de la veracidad de los datos personales que nos proporciona. Por favor, mantenga sus datos actualizados.",
      },
      section12: {
        title: "12. Seguridad de la información",
        content:
          "Implementamos medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado al riesgo del tratamiento de sus datos personales.",
      },
      section13: {
        title: "13. Propiedad intelectual",
        content:
          "Todos los contenidos incluidos en el Sitio Web, como textos, gráficos, logotipos y software, son propiedad de Smart Products and Services S.L. o de sus proveedores de contenido y están protegidos por las leyes de propiedad intelectual.",
      },
      section14: {
        title: "14. Actualizaciones de la política",
        content:
          "Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página.",
      },
      section15: {
        title: "15. Contacto",
        content:
          "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en",
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

      <p className="text-gray-700 mb-8">{currentContent.intro}</p>

      {/* Table of Contents */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl mb-4 text-gray-800">
          {currentContent.contents}
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {currentContent.sections.map((section, index) => (
            <li key={index}>{section}</li>
          ))}
        </ol>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {[...Array(15)].map((_, i) => {
          const sectionNumber = i + 1;
          const sectionKey = `section${sectionNumber}`;

          return (
            <section key={sectionNumber}>
              <h2 className="text-2xl font-light mb-4 text-gray-900">
                {currentContent[sectionKey].title}
              </h2>
              <p className="text-gray-600">
                {currentContent[sectionKey].content}
                {sectionNumber === 15 && (
                  <a
                    href={`mailto:${currentContent[sectionKey].email}`}
                    className="text-[#196f95] hover:underline ml-1"
                  >
                    {currentContent[sectionKey].email}
                  </a>
                )}
              </p>
            </section>
          );
        })}
      </div>
    </section>
  );
}
