import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { copy } from '../lib/copy';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  // Rutas internas (páginas del propio sitio)
  const internalRoutes: { [key: string]: string } = {
    'ECG Simulator': '/simulador-ecg'
  };

  return (
    <section id="proyectos" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-4 text-center">
          Proyectos
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Herramientas construidas para problemas reales, publicadas o en uso.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
        >
          {copy.services.map((service, idx) => {
            const route = internalRoutes[service.title];

            const cardBody = (
              <>
                <div className="text-4xl mb-6" role="img" aria-label={service.emoji_alt}>
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
                {route && (
                  <div className="mt-4 text-accent-hover font-mono text-sm">
                    → Abrir simulador
                  </div>
                )}
                {!route && service.url && (
                  <div className="mt-4 text-accent-hover font-mono text-sm">
                    → {service.linkLabel || 'Ver más'}
                  </div>
                )}
                {!route && !service.url && service.linkLabel && (
                  <div className="mt-4 text-text-secondary font-mono text-sm opacity-70">
                    {service.linkLabel}
                  </div>
                )}
              </>
            );

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {route ? (
                  <Link to={route} className="glass-card group block h-full">
                    {cardBody}
                  </Link>
                ) : service.url ? (
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group block h-full"
                  >
                    {cardBody}
                  </a>
                ) : (
                  <div className="glass-card group h-full">
                    {cardBody}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
