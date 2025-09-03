"use client";
import { useLanguage } from "@/hooks/Language";

export default function TermsPage() {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Terms of Service",
      lastUpdated: "Last updated on 23 Jan 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using IAcall's AI automation services, you agree to and commit to comply with the terms and conditions of this agreement. If you do not agree with these terms, you must not use our services.",
        },
        {
          title: "2. Description of Services",
          content:
            "Aiphier provides AI-based automation solutions, including but not limited to:",
          list: [
            "Business process automation systems",
            "Intelligent chatbots and virtual assistants",
            "Predictive analytics and customised machine learning",
            "AI integration with existing systems",
            "Specialised AI consulting and technical support",
          ],
        },
        {
          title: "3. License of Use",
          content:
            "You are granted a limited, non-exclusive, non-transferable, and revocable license to use our AI services in accordance with these terms. This license is valid during the term of your service contract and is subject to compliance with all stipulated conditions.",
        },
        {
          title: "4. Acceptable Use of AI Services",
          content: "You agree not to:",
          list: [
            "Use our services for illegal or unauthorized activities",
            "Attempt to hack, decompile, or reverse engineer our AI systems",
            "Interfere with the normal operation of our services",
            "Share access credentials with unauthorized third parties",
            "Use our services to compete directly with IAcall",
            "Train competing AI models using our data or services",
          ],
        },
        {
          title: "5. Intellectual Property",
          content:
            "All intellectual property rights related to our services, including AI algorithms, machine learning models, source code, documentation, and trademarks, are the exclusive property of IAcall. The data you provide remains your property, but you grant us a license to process it as necessary to provide our services.",
        },
        {
          title: "6. Availability and Performance",
          content:
            "We strive to maintain high availability of our AI services, aiming for 99.5% monthly uptime. However, we cannot guarantee 100% availability due to scheduled maintenance, system updates, or circumstances beyond our control. We will notify you in advance about scheduled maintenance windows.",
        },
        {
          title: "7. Data Protection and Ethical AI",
          content:
            "We commit to processing your data in accordance with our Privacy Policy and applicable regulations (GDPR, LOPD). We implement ethical AI principles, including algorithmic transparency, bias prevention, and the responsible use of artificial intelligence in all our services.",
        },
        {
          title: "8. Fees and Payments",
          content:
            "The fees for our services are specified in your individual contract. Payments must be made according to the agreed terms. In the event of payment delay, we reserve the right to suspend services until the situation is resolved. Prices may be subject to change with 30 days' prior notice.",
        },
        {
          title: "9. Limitation of Liability",
          content:
            "To the maximum extent permitted by law, IAcall will not be liable for indirect, incidental, consequential, or punitive damages resulting from the use of our services. Our total liability will not exceed the amount paid for the services in the 12 months prior to the event giving rise to the claim.",
        },
        {
          title: "10. Confidentiality",
          content:
            "Both parties agree to maintain the confidentiality of all proprietary and sensitive information shared during the provision of services. This obligation remains in effect for five years after the termination of the service contract.",
        },
        {
          title: "11. Termination",
          content:
            "Either party may terminate this agreement with 30 days' prior notice. In the event of a material breach of these terms, we may suspend or terminate services immediately. Upon termination, you will have 30 days to export your data before it is permanently deleted.",
        },
        {
          title: "12. Modifications",
          content:
            "We reserve the right to modify these terms from time to time. Significant changes will be communicated 30 days in advance via email or notice on our services. Continued use of our services after such modifications constitutes acceptance of the new terms.",
        },
      ],
      contactInfo: {
        text: "If you have any questions about the Terms & Conditions, please contact us at",
        email: "info@iacall.es",
      },
    },
    ES: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización el 23 de enero de 2025",
      sections: [
        {
          title: "1. Aceptación de Términos",
          content:
            "Al acceder y utilizar los servicios de automatización IA de IAcall, aceptas y te comprometes a cumplir con los términos y condiciones de este acuerdo. Si no estás de acuerdo con estos términos, no debes utilizar nuestros servicios.",
        },
        {
          title: "2. Descripción de Servicios",
          content:
            "Aiphier proporciona soluciones de automatización basadas en inteligencia artificial, incluyendo pero no limitado a:",
          list: [
            "Sistemas de automatización de procesos empresariales",
            "Chatbots y asistentes virtuales inteligentes",
            "Análisis predictivo y machine learning personalizado",
            "Integración de IA con sistemas existentes",
            "Consultoría y soporte técnico especializado en IA",
          ],
        },
        {
          title: "3. Licencia de Uso",
          content:
            "Se te otorga una licencia limitada, no exclusiva, no transferible y revocable para utilizar nuestros servicios de IA conforme a estos términos. Esta licencia es válida durante la vigencia de tu contrato de servicios y está sujeta al cumplimiento de todas las condiciones establecidas.",
        },
        {
          title: "4. Uso Aceptable de Servicios de IA",
          content: "Te comprometes a no:",
          list: [
            "Utilizar nuestros servicios para actividades ilegales o no autorizadas",
            "Intentar hackear, descompilar o realizar ingeniería inversa de nuestros sistemas de IA",
            "Interferir con el funcionamiento normal de nuestros servicios",
            "Compartir credenciales de acceso con terceros no autorizados",
            "Usar nuestros servicios para competir directamente con IAcall",
            "Entrenar modelos de IA competidores utilizando nuestros datos o servicios",
          ],
        },
        {
          title: "5. Propiedad Intelectual",
          content:
            "Todos los derechos de propiedad intelectual relacionados con nuestros servicios, incluyendo algoritmos de IA, modelos de machine learning, código fuente, documentación y marcas comerciales, son propiedad exclusiva de IAcall. Los datos que proporciones permanecen bajo tu propiedad, pero nos otorgas licencia para procesarlos según sea necesario para prestarte nuestros servicios.",
        },
        {
          title: "6. Disponibilidad y Rendimiento",
          content:
            "Nos esforzamos por mantener alta disponibilidad de nuestros servicios de IA, con un objetivo de 99.5% de uptime mensual. Sin embargo, no podemos garantizar disponibilidad del 100% debido a mantenimientos programados, actualizaciones de sistemas, o circunstancias fuera de nuestro control. Te notificaremos con anticipación sobre ventanas de mantenimiento programado.",
        },
        {
          title: "7. Protección de Datos y IA Ética",
          content:
            "Nos comprometemos a procesar tus datos conforme a nuestra Política de Privacidad y regulaciones aplicables (GDPR, LOPD). Implementamos principios de IA ética, incluyendo transparencia en algoritmos, prevención de sesgos, y uso responsable de inteligencia artificial en todos nuestros servicios.",
        },
        {
          title: "8. Tarifas y Pagos",
          content:
            "Las tarifas por nuestros servicios se especifican en tu contrato individual. Los pagos deben realizarse según los términos acordados. En caso de retraso en el pago, nos reservamos el derecho de suspender servicios hasta que se regularice la situación. Los precios pueden estar sujetos a cambios con notificación previa de 30 días.",
        },
        {
          title: "9. Limitación de Responsabilidad",
          content:
            "En la máxima medida permitida por la ley, IAcall no será responsable por daños indirectos, incidentales, consecuenciales o punitivos resultantes del uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por los servicios en los 12 meses anteriores al evento que originó la reclamación.",
        },
        {
          title: "10. Confidencialidad",
          content:
            "Ambas partes se comprometen a mantener confidencial toda información propietaria y sensible compartida durante la prestación de servicios. Esta obligación permanece vigente durante 5 años después de la terminación del contrato de servicios.",
        },
        {
          title: "11. Terminación",
          content:
            "Cualquiera de las partes puede terminar este acuerdo con notificación previa de 30 días. En caso de violación material de estos términos, podemos suspender o terminar servicios inmediatamente. Tras la terminación, tendrás 30 días para exportar tus datos antes de que sean eliminados permanentemente.",
        },
        {
          title: "12. Modificaciones",
          content:
            "Nos reservamos el derecho de modificar estos términos ocasionalmente. Las modificaciones significativas serán comunicadas con 30 días de anticipación a través de email o notificación en nuestros servicios. El uso continuado de nuestros servicios después de las modificaciones constituye aceptación de los nuevos términos.",
        },
      ],
      contactInfo: {
        text: "Si tienes preguntas sobre los Términos y Condiciones, escríbenos a",
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
      <p className="text-gray-600 mb-12">{currentContent.lastUpdated}</p>

      <div className="space-y-12">
        {currentContent.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-light text-gray-900">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="pt-8">
          <p className="text-gray-600">
            {currentContent.contactInfo.text}{" "}
            <a
              href={`mailto:${currentContent.contactInfo.email}`}
              className="text-[#196f95] hover:underline"
            >
              {currentContent.contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
