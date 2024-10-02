import { assets } from "../assets/assets";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom website and web application development with modern technologies like React, Next.js, and Tailwind CSS.",
      image: assets.web,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using frameworks like React Native or Flutter, providing intuitive user experiences.",
      image: assets.mobile,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Fully integrated e-commerce platforms with product management, payment gateways, and customer management systems.",
      image: assets.e_commerce,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating user-centered designs, including wireframes, prototypes, and high-fidelity UI designs for enhanced user interaction.",
      image: assets.ux,
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Boost your online presence with SEO strategies, PPC campaigns, and social media marketing to drive organic traffic.",
      image: assets.seo,
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud migration, server setup, and cloud infrastructure management with providers like AWS, Google Cloud, and Azure.",
      image: assets.cloud,
    },
    {
      title: "Cybersecurity Services",
      description:
        "Security solutions to protect businesses from cyber threats, including audits, penetration testing, and encryption protocols.",
      image: assets.cyber,
    },
    {
      title: "IT Consultancy",
      description:
        "Expert advice for digital transformation, system optimization, and IT infrastructure planning to improve business efficiency.",
      image: assets.it,
    },
  ];

  return (
    <div className="my-10 px-4">
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p className="text-gray-500 mt-2">
          We offer a wide range of services to help your business grow.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-black-300 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-10 h-10 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
