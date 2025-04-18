

import React, { useState } from 'react';
import { Github,  Twitter, Linkedin, Code, Palette, BarChart3, ExternalLink, Download } from 'lucide-react';

function App() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleDownloadCV = () => {
    // Replace this URL with the actual URL of your CV file
    const cvUrl = 'https://drive.google.com/file/d/1B0G1V5lNCUr2uTCJC9txIvFNwFbXBK5_/view?usp=sharing';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sunilkumar H S.pdf'; // The name that will be used for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Specializing in creating responsive, modern web applications using Java , React, TypeScript, and advanced  technologies. Experienced in building scalable web applications architectures and implementing complex UI/UX designs.',
      fullDescription: ' Specializing in creating responsive, modern web applications using Java , React, TypeScript, and advanced  technologies. Experienced in building scalable web applications architectures and implementing complex UI/UX designs. With enthusiastics  in modern web development, I create seamless user experiences using React, TypeScript, and the latest web technologies. My approach focuses on writing clean, maintainable code while ensuring optimal performance and accessibility. Services include custom web application development, responsive design implementation, API integration, and frontend architecture design.'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating stunning visual designs that communicate your brand\'s message effectively. From logos to complete brand identity systems, I help businesses stand out in the digital landscape.As a graphic designer, I blend creativity with strategic thinking to deliver impactful visual solutions.',
      fullDescription: 'Creating stunning visual designs that communicate your brand\'s message effectively. From logos to complete brand identity systems, I help businesses stand out in the digital landscape.As a graphic designer, I blend creativity with strategic thinking to deliver impactful visual solutions. As a graphic designer, I blend creativity with strategic thinking to deliver impactful visual solutions. My services encompass logo design, brand identity development, marketing materials, social media graphics, and UI design. Each project is approached with attention to detail and a focus on creating memorable, purpose-driven designs that resonate with your target audience.'
    },
    {
      icon: BarChart3,
      title: 'Database',
      description: 'Database management in web applications involves overseeing the organization, storage, and retrieval of data to ensure smooth functionality and security.Design and implement database structures tailored to web application needs.Ensure database security, integrity, and efficient backup/recovery processes. ',
      fullDescription: 'Database management in web applications involves overseeing the organization, storage, and retrieval of data to ensure smooth functionality and security.Design and implement database structures tailored to web application needs.Ensure database security, integrity, and efficient backup/recovery processes. Design and implement database structures tailored to web application needs.Ensure database security, integrity, and efficient backup/recovery processes.Optimize database performance for fast responses to user queries.Collaborate with developers to integrate databases seamlessly into web applications.Monitor and troubleshoot database issues to maintain high availability.Manage access permissions and ensure data protection compliance.'
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      image: '/images/shopimg2.jpg',
      description: 'A full-featured online shopping platform built with Java,React and Node.js',
      link: 'https://github.com/sunilkumarhs110/SALESSAVVY'
    },
    {
      title: 'Todo Application ',
      image: '/images/todo2.webp',
      description: 'Modern Todo app design with real-time data visualization',
      link: 'https://github.com/sunilkumarhs110/Sales_savvy_BackEnd'
    },
    {
      title: 'Networking Applications',
      image: '/images/data.avif',
      description: 'A social networking application with real-time messaging',
      link: 'https://github.com/sunilkumarhs110/Login_App'
    }
  ];

  const socialLinks = {
    github: 'https://github.com/sunilkumarhs110',
    twitter: 'https://x.com/suni40272',
   // instagram: 'https://instagram.com/your.profile',
    linkedin: 'https://www.linkedin.com/in/sunil-kumar-h-s-37b467254'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-cyan-900">
      //{/* Navigation*/} 
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <span className="text-white text-2xl font-bold">Portfolio.</span>
          <div className="space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-white text-5xl font-bold mb-4">
            Hello, I'm
            <div className="text-6xl mt-2">Sunil Kumar H S</div>
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            And I'm a <span className="text-cyan-400">Fullstack Developer</span>
          </p>
          <p className="text-gray-400 mb-8">
            Passionate about creating beautiful and functional web experiences that delight users and drive professionally towards success.
          </p>
          <div className="flex space-x-4 mb-8">
            {[
              { Icon: Github, link: socialLinks.github },
              { Icon: Twitter, link: socialLinks.twitter },
            //  { Icon: Instagram, link: socialLinks.instagram },
              { Icon: Linkedin, link: socialLinks.linkedin }
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <button 
            onClick={handleDownloadCV}
            className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors flex items-center"
          >
            Download CV
            <Download size={20} className="ml-2" />
          </button>
        </div>
        <div className="relative mt-12 lg:mt-0">
          <div className="hexagon mx-auto">
            <img
              src="/images/profile3.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>



        </div>
      </section>

      {/* Services Section */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My  <span className="text-cyan-400"> Skills </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-cyan-400 mb-4">
                <service.icon size={40} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">
                {expandedService === index ? service.fullDescription : service.description}
              </p>
              <button 
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="mt-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
              >
                {expandedService === index ? 'Show Less' : 'Read More'} 
                <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Latest <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Contact <span className="text-cyan-400">Me!</span>
        </h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-6"
          ></textarea>
          <div className="text-center">
            <button className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Portfolio | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;































/*import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Code, Palette, BarChart3, ExternalLink } from 'lucide-react';

function App() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Specializing in creating responsive, modern web applications using React, TypeScript, and cutting-edge technologies. Experienced in building scalable frontend architectures and implementing complex UI/UX designs.',
      fullDescription: 'With expertise in modern web development, I create seamless user experiences using React, TypeScript, and the latest web technologies. My approach focuses on writing clean, maintainable code while ensuring optimal performance and accessibility. Services include custom web application development, responsive design implementation, API integration, and frontend architecture design.'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating stunning visual designs that communicate your brands message effectively. From logos to complete brand identity systems, I help businesses stand out in the digital landscape.',
      fullDescription: 'As a graphic designer, I blend creativity with strategic thinking to deliver impactful visual solutions. My services encompass logo design, brand identity development, marketing materials, social media graphics, and UI design. Each project is approached with attention to detail and a focus on creating memorable, purpose-driven designs that resonate with your target audience.'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Driving business growth through strategic digital marketing campaigns. Expertise in SEO, social media marketing, and content strategy to help your brand reach its target audience.',
      fullDescription: 'My digital marketing approach combines data-driven strategies with creative execution to deliver measurable results. Services include comprehensive SEO optimization, social media campaign management, content marketing strategy, analytics reporting, and conversion rate optimization. I work closely with clients to develop tailored marketing solutions that align with their business objectives.'
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
      description: 'A full-featured online shopping platform built with React and Node.js',
      link: 'https://github.com/your-username/project1'
    },
    {
      title: 'Portfolio Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      description: 'Modern dashboard design with real-time data visualization',
      link: 'https://github.com/your-username/project2'
    },
    {
      title: 'Social Media App',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80',
      description: 'A social networking application with real-time messaging',
      link: 'https://github.com/your-username/project3'
    }
  ];

  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=100046587173782&mibextid=ZbWKwL',
    twitter: 'https://twitter.com/your.profile',
    instagram: 'https://www.instagram.com/sunilsuni_110?igsh=MTVnb2h3azVrNHFydQ==',
    linkedin: 'https://www.linkedin.com/in/sunil-kumar-h-s-37b467254'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-cyan-900">
      {/* Navigation 
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <span className="text-white text-2xl font-bold">Portfolio.</span>
          <div className="space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section *
      <section id="home" className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-white text-5xl font-bold mb-4">
            Hello, I'm
            <div className="text-6xl mt-2">John K</div>
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            And I'm a <span className="text-cyan-400">Frontend Developer</span>
          </p>
          <p className="text-gray-400 mb-8">
            Passionate about creating beautiful and functional web experiences that delight users and drive business success.
          </p>
          <div className="flex space-x-4 mb-8">
            {[
              { Icon: Facebook, link: socialLinks.facebook },
              { Icon: Twitter, link: socialLinks.twitter },
              { Icon: Instagram, link: socialLinks.instagram },
              { Icon: Linkedin, link: socialLinks.linkedin }
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <button className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors">
            Download CV
          </button>
        </div>
        <div className="relative mt-12 lg:mt-0">
          <div className="hexagon mx-auto">
            <img
              src="https://wallpaperbat.com/img/1843558-divine-love-lord-shiva-and-maa-parvati-hd-wallpaperai-ai-generated-hd-wallpaper.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section *
      <section id="services" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our <span className="text-cyan-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-cyan-400 mb-4">
                <service.icon size={40} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">
                {expandedService === index ? service.fullDescription : service.description}
              </p>
              <button 
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="mt-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
              >
                {expandedService === index ? 'Show Less' : 'Read More'} 
                <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section 
      <section id="portfolio" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Latest <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      //* Contact Section 
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Contact <span className="text-cyan-400">Me!</span>
        </h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-6"
          ></textarea>
          <div className="text-center">
            <button className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {//* Footer *
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Portfolio | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;*/